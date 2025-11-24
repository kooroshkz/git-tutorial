import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Terminal } from "lucide-react";
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
            Click on any command to see detailed explanation and interactive demo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {gitCommands.map((cmd) => (
            <CommandCard
              key={cmd.id}
              id={cmd.id}
              command={cmd.command}
              description={cmd.description}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-primary/20 mt-16">
        <p className="text-muted-foreground">
          Let's see in practice! 🚀
        </p>
      </footer>
    </div>
  );
};

export default Index;
