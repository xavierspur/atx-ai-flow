import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Zap,
  Grid3X3,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "My Automations", path: "/dashboard/my-automations", icon: Zap },
  { label: "Browse All", path: "/dashboard/browse", icon: Grid3X3 },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
  { label: "Help", path: "/dashboard/help", icon: HelpCircle },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; businessName: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async (userId: string, email: string) => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("name, business_name")
        .eq("user_id", userId)
        .maybeSingle();

      setUser({
        name: profile?.name || email.split("@")[0],
        email,
        businessName: profile?.business_name || "",
      });
      setLoading(false);
    };

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state change:", event, !!session);
      if (event === "SIGNED_OUT" || (!session && !loading)) {
        setUser(null);
        navigate("/login");
      } else if (session) {
        loadProfile(session.user.id, session.user.email || "");
      }
    });

    const initSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          // Add a tiny delay to be sure it's not a race condition
          await new Promise(resolve => setTimeout(resolve, 500));
          const { data: { session: retrySession } } = await supabase.auth.getSession();
          if (!retrySession) {
            navigate("/login");
            setLoading(false);
            return;
          }
          loadProfile(retrySession.user.id, retrySession.user.email || "");
        } else {
          loadProfile(session.user.id, session.user.email || "");
        }
      } catch (error) {
        console.error("Session init error:", error);
        setLoading(false);
      }
    };

    initSession();

    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  if (loading || !user) return null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("atxdoes_onboarding");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-section-alt">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:flex`}
      >
        <div className="h-16 flex items-center gap-2 px-6 border-b border-sidebar-border">
          <Zap className="h-5 w-5 text-sidebar-primary" />
          <span className="text-lg font-bold text-sidebar-primary-foreground">ATXDOES AI</span>
          <button className="lg:hidden ml-auto" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5 text-sidebar-muted" />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-muted mb-3 truncate">{user.email}</div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-sidebar-muted hover:text-sidebar-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" /> Log out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 bg-background border-b border-border flex items-center px-4 sm:px-6 lg:px-8">
          <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">{navItems.find((n) => n.path === location.pathname)?.label || "Dashboard"}</h1>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet context={{ user }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
