import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { gitCommands } from "@/data/gitCommands";

const CheatSheet = () => {
  const handleDownload = () => {
    const content = gitCommands
      .map(
        (cmd) =>
          `${cmd.command}\n${"-".repeat(50)}\nDescription: ${cmd.description}\nUsage: ${cmd.usage}\nUse Case: ${cmd.useCase}\n\n`
      )
      .join("");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "git-cheatsheet.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background wave-pattern">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4 border-primary/30 hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">
                Git Command Cheat Sheet
              </h1>
              <p className="text-muted-foreground">
                Quick reference for all essential Git commands
              </p>
            </div>
            <Button
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Cheat Sheet
            </Button>
          </div>
        </div>

        {/* Commands Grid */}
        <div className="space-y-8">
          {["CREATE", "LOCAL CHANGES", "COMMIT HISTORY", "BRANCHES & TAGS", "UPDATE & PUBLISH", "MERGE & REBASE", "UNDO"].map((category) => {
            const categoryCommands = gitCommands.filter(cmd => cmd.category === category);
            if (categoryCommands.length === 0) return null;
            
            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-primary mb-4">{category}</h2>
                <div className="grid gap-4">
                  {categoryCommands.map((cmd) => (
                    <Card
                      key={cmd.id}
                      className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all"
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h3 className="text-lg font-bold font-mono text-primary mb-2">
                            $ {cmd.command}
                          </h3>
                          <code className="text-xs bg-terminal-bg px-2 py-1 rounded text-terminal-text">
                            {cmd.usage}
                          </code>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-muted-foreground mb-2">
                            {cmd.description}
                          </p>
                          <p className="text-xs text-muted-foreground/80">
                            <span className="text-secondary font-semibold">Use case:</span>{" "}
                            {cmd.useCase}
                          </p>
                          <Link to={`/command/${cmd.id}`}>
                            <Button
                              variant="link"
                              className="text-primary p-0 h-auto mt-2 text-xs"
                            >
                              Interactive terminal →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;
