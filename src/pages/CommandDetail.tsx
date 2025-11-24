import { useParams, Link } from "react-router-dom";
import { gitCommands } from "@/data/gitCommands";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Terminal, BookOpen, Lightbulb } from "lucide-react";
import TerminalSimulator from "@/components/TerminalSimulator";

const CommandDetail = () => {
  const { id } = useParams();
  const command = gitCommands.find((cmd) => cmd.id === id);

  if (!command) {
    return (
      <div className="min-h-screen bg-background wave-pattern flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Command not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background wave-pattern">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Button */}
        <Link to="/">
          <Button variant="outline" className="mb-6 border-primary/30 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Commands
          </Button>
        </Link>

        {/* Command Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <Terminal className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold gradient-text font-mono">
              {command.command}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">{command.description}</p>
        </div>

        {/* Usage Section */}
        <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 text-primary mt-1" />
            <div>
              <h2 className="text-lg font-semibold mb-2 text-primary">Usage</h2>
              <code className="bg-terminal-bg px-4 py-2 rounded block font-mono text-terminal-text">
                {command.usage}
              </code>
            </div>
          </div>
        </Card>

        {/* Use Case Section */}
        <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-secondary mt-1" />
            <div>
              <h2 className="text-lg font-semibold mb-2 text-secondary">When to Use</h2>
              <p className="text-muted-foreground leading-relaxed">{command.useCase}</p>
            </div>
          </div>
        </Card>

        {/* Terminal Simulator */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Interactive Demo
          </h2>
          <p className="text-muted-foreground mb-6">
            Follow along step-by-step to see how this command works:
          </p>
          <TerminalSimulator steps={command.steps} />
        </div>
      </div>
    </div>
  );
};

export default CommandDetail;
