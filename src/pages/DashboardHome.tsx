import { useOutletContext } from "react-router-dom";
import { Zap, Users, Mail, Clock } from "lucide-react";
import { AUTOMATIONS } from "@/lib/automations-data";
import AutomationCard from "@/components/dashboard/AutomationCard";
import { useState } from "react";

const stats = [
  { label: "Active Automations", value: "0", icon: Zap, color: "text-primary" },
  { label: "Leads Captured", value: "0", icon: Users, color: "text-success" },
  { label: "Emails Sent", value: "0", icon: Mail, color: "text-warning" },
  { label: "Time Saved", value: "0 hrs", icon: Clock, color: "text-primary" },
];

const DashboardHome = () => {
  const { user } = useOutletContext<{ user: { name: string; businessName: string } }>();
  const [activatedIds, setActivatedIds] = useState<string[]>([]);

  // Get onboarding needs for recommendations
  const onboardingRaw = localStorage.getItem("atxdoes_onboarding");
  const onboarding = onboardingRaw ? JSON.parse(onboardingRaw) : {};
  const needs: string[] = onboarding.needs || [];

  const categoryMap: Record<string, string[]> = {
    "Lead Generation": ["Lead Gen"],
    "Customer Support": ["Voice"],
    "Social Media": ["Social"],
    "Email Follow-up": ["Email"],
    "Phone Calls": ["Voice"],
    "Reputation Management": ["Reviews"],
    "Business Analytics": ["Analytics"],
  };

  const matchedCategories = needs.flatMap((n) => categoryMap[n] || []);
  const recommended = AUTOMATIONS.filter((a) => matchedCategories.includes(a.category)).slice(0, 4);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Welcome back, {user.name.split(" ")[0]}!</h2>
        <p className="text-muted-foreground mt-1">{user.businessName} — here's your AI workspace overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recommended */}
      {recommended.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Recommended For You</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommended.map((a) => (
              <AutomationCard key={a.id} automation={a} activated={activatedIds.includes(a.id)} onActivate={(id) => setActivatedIds((prev) => [...prev, id])} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
