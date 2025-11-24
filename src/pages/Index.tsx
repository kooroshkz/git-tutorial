import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Terminal, Github, Settings } from "lucide-react";
import CommandCard from "@/components/CommandCard";
import { gitCommands } from "@/data/gitCommands";

const Index = () => {
  return (
    <div className="min-h-screen bg-background wave-pattern">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Introduction to Git and Code Collaboration
          </h1>
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 inline-block mb-8">
            <p className="text-foreground font-medium">
              Presentor: Koorosh Komeili Zadeh – Hosted by: De Leidsche Flesch – Leiden University
            </p>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Master Git commands through interactive tutorials and hands-on terminal simulations.
            Learn at your own pace with step-by-step guidance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/cheatsheet">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Cheat Sheet
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => {
                document.getElementById("commands")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Terminal className="mr-2 h-5 w-5" />
              Explore Commands
            </Button>
            <Link to="/configure">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Settings className="mr-2 h-5 w-5" />
                Configure
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Git Basic Commands Workflow
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on any command to see detailed explanation and interactive terminal
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {["CREATE", "LOCAL CHANGES", "COMMIT HISTORY", "BRANCHES & TAGS", "UPDATE & PUBLISH", "MERGE & REBASE", "UNDO"].map((category) => {
            const categoryCommands = gitCommands.filter(cmd => cmd.category === category);
            if (categoryCommands.length === 0) return null;
            
            return (
              <div key={category}>
                <h3 className="text-2xl font-bold text-primary mb-4">{category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCommands.map((cmd) => (
                    <CommandCard
                      key={cmd.id}
                      id={cmd.id}
                      command={cmd.command}
                      description={cmd.description}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-primary/20 mt-16">
        <p className="text-muted-foreground">
          by Koorosh Komeilizadeh{" "}
          <a 
            href="https://github.com/kooroshkz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
