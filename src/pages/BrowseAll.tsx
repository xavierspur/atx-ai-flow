import { useState } from "react";
import { AUTOMATIONS, CATEGORIES } from "@/lib/automations-data";
import AutomationCard from "@/components/dashboard/AutomationCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BrowseAll = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activatedIds, setActivatedIds] = useState<string[]>([]);

  const filtered = AUTOMATIONS.filter((a) => {
    const matchCategory = category === "All" || a.category === category;
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Browse All Automations</h2>
        <p className="text-muted-foreground mt-1">Discover and activate AI automations for every part of your business.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search automations..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                category === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((a) => (
          <AutomationCard key={a.id} automation={a} activated={activatedIds.includes(a.id)} onActivate={(id) => setActivatedIds((prev) => [...prev, id])} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">No automations found matching your criteria.</div>
      )}
    </div>
  );
};

export default BrowseAll;
