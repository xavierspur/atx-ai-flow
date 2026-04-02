const MyAutomations = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">My Automations</h2>
        <p className="text-muted-foreground mt-1">Manage your active AI automations.</p>
      </div>
      <div className="glass-card rounded-xl p-12 text-center">
        <p className="text-muted-foreground">You haven't activated any automations yet.</p>
        <p className="text-sm text-muted-foreground mt-1">Head to <a href="/dashboard/browse" className="text-primary font-medium hover:underline">Browse All</a> to get started.</p>
      </div>
    </div>
  );
};

export default MyAutomations;
