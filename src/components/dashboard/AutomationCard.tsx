import { useState } from "react";
import { AutomationItem } from "@/lib/automations-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AutomationDrawer from "./AutomationDrawer";

interface Props {
  automation: AutomationItem;
  activated: boolean;
  onActivate: (id: string) => void;
}

const AutomationCard = ({ automation, activated, onActivate }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const Icon = automation.icon;

  return (
    <>
      <div
        className="glass-card rounded-xl p-5 flex flex-col cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setDrawerOpen(true)}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-badge text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="secondary" className="text-xs">{automation.category}</Badge>
        </div>
        <h4 className="font-semibold text-foreground text-sm mb-1">{automation.name}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{automation.description}</p>
        <Button
          size="sm"
          variant={activated ? "secondary" : "default"}
          className="w-full"
          onClick={(e) => { e.stopPropagation(); if (!activated) setDrawerOpen(true); }}
        >
          {activated ? "Active" : "Activate"}
        </Button>
      </div>

      <AutomationDrawer
        automation={automation}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        activated={activated}
        onActivate={onActivate}
      />
    </>
  );
};

export default AutomationCard;
