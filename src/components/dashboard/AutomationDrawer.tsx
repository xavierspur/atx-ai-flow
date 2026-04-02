import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Loader2 } from "lucide-react";
import { AutomationItem } from "@/lib/automations-data";

interface Props {
  automation: AutomationItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activated: boolean;
  onActivate: (id: string) => void;
}

const AutomationDrawer = ({ automation, open, onOpenChange, activated, onActivate }: Props) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(activated);
  const Icon = automation.icon;

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setDone(true);
    onActivate(automation.id);
  };

  const allFilled = automation.setupFields.every((f) => formData[f.label]?.trim());

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg overflow-y-auto">
        <SheetHeader className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-badge text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <Badge variant="secondary">{automation.category}</Badge>
          </div>
          <SheetTitle>{automation.name}</SheetTitle>
          <SheetDescription>{automation.description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          {done ? (
            <div className="text-center py-12">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-1">Automation Active!</h3>
              <p className="text-sm text-muted-foreground">Your AI agent is now running this automation for your business.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Configure this automation</p>
              {automation.setupFields.map((field) => (
                <div key={field.label}>
                  <Label>{field.label}</Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      placeholder={field.placeholder}
                      className="mt-1.5"
                      value={formData[field.label] || ""}
                      onChange={(e) => setFormData((d) => ({ ...d, [field.label]: e.target.value }))}
                    />
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      className="mt-1.5"
                      value={formData[field.label] || ""}
                      onChange={(e) => setFormData((d) => ({ ...d, [field.label]: e.target.value }))}
                    />
                  )}
                </div>
              ))}
              <Button className="w-full mt-4" disabled={!allFilled || submitting} onClick={handleSubmit}>
                {submitting ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Activating...</> : "Activate Automation"}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AutomationDrawer;
