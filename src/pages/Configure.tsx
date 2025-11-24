import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, MonitorSmartphone, Apple, Laptop } from "lucide-react";
import TerminalSimulator from "@/components/TerminalSimulator";
import { TerminalStep } from "@/data/gitCommands";

const Configure = () => {
  const [selectedOS, setSelectedOS] = useState<string | null>(null);

  const configSteps: TerminalStep[] = [
    {
      command: 'git config --global user.name "Your Name"',
      output: "",
      explanation: "Sets your name for all Git commits on this computer"
    },
    {
      command: 'git config --global user.email "your.email@example.com"',
      output: "",
      explanation: "Sets your email for all Git commits - use the same email as your GitHub account"
    },
    {
      command: "git config --global --list",
      output: "user.name=Your Name\nuser.email=your.email@example.com",
      explanation: "Verify your Git configuration settings"
    }
  ];

  const sshSteps: TerminalStep[] = [
    {
      command: 'ssh-keygen -t ed25519 -C "your.email@example.com"',
      output: "Generating public/private ed25519 key pair.\nEnter file in which to save the key (/home/user/.ssh/id_ed25519):",
      explanation: "Generate a new SSH key pair - press Enter to use default location"
    },
    {
      output: "Enter passphrase (empty for no passphrase):",
      explanation: "You can add a passphrase for extra security or press Enter to skip"
    },
    {
      command: "cat ~/.ssh/id_ed25519.pub",
      output: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILx... your.email@example.com",
      explanation: "Display your public key - copy this entire output"
    },
    {
      output: "Go to GitHub → Settings → SSH and GPG keys → New SSH key",
      explanation: "Paste your public key in GitHub and save it"
    },
    {
      command: "ssh -T git@github.com",
      output: "Hi username! You've successfully authenticated, but GitHub does not provide shell access.",
      explanation: "Test your SSH connection to GitHub"
    }
  ];

  return (
    <div className="min-h-screen bg-background wave-pattern">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link to="/">
          <Button variant="outline" className="mb-4 border-primary/30 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Configure Git & GitHub
          </h1>
          <p className="text-muted-foreground">
            Set up Git on your computer and connect it to GitHub
          </p>
        </div>

        {/* Step 1: Install Git and GitHub Account */}
        <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 1: Install Git & Create GitHub Account
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Download Git for your OS:</h3>
            <div className="flex gap-4 flex-wrap">
              <a href="https://git-scm.com/install/windows" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => setSelectedOS("windows")}
                >
                  <MonitorSmartphone className="mr-2 h-5 w-5" />
                  Windows
                </Button>
              </a>
              <a href="https://git-scm.com/install/mac" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => setSelectedOS("macos")}
                >
                  <Apple className="mr-2 h-5 w-5" />
                  macOS
                </Button>
              </a>
              <a href="https://git-scm.com/install/linux" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => setSelectedOS("linux")}
                >
                  <Laptop className="mr-2 h-5 w-5" />
                  Linux
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Create or Sign in to GitHub:</h3>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Github className="mr-2 h-5 w-5" />
                Go to GitHub
              </Button>
            </a>
          </div>
        </Card>

        {/* Step 2: Configure Git Name and Email */}
        <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 2: Set Your Git Name and Email
          </h2>
          <p className="text-muted-foreground mb-4">
            Do this once on each computer you use Git on. This information will be attached to your commits.
          </p>
          <TerminalSimulator steps={configSteps} />
        </Card>

        {/* Step 3: SSH Setup */}
        <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 3: Set Up SSH Connection to GitHub
          </h2>
          <p className="text-muted-foreground mb-4">
            SSH allows you to securely connect to GitHub without entering your password every time.
          </p>
          <TerminalSimulator steps={sshSteps} />
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            You're all set!
          </h3>
          <p className="text-muted-foreground mb-4">
            Your Git is now configured and connected to GitHub. You can now clone repositories, push changes, and collaborate with others.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Start Learning Git Commands
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Configure;
