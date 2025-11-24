import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw } from "lucide-react";
import { TerminalStep } from "@/data/gitCommands";

interface TerminalSimulatorProps {
  steps: TerminalStep[];
}

const TerminalSimulator = ({ steps }: TerminalSimulatorProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="w-full">
      <div className="bg-terminal-bg rounded-lg border border-primary/20 overflow-hidden shadow-lg shadow-primary/10">
        {/* Terminal Header */}
        <div className="bg-card border-b border-primary/20 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-muted-foreground ml-2">bash</span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 min-h-[300px] font-mono text-sm">
          {steps.slice(0, currentStep + 1).map((step, index) => (
            <div key={index} className="mb-4 animate-fade-in">
              {step.command && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{step.command}</span>
                </div>
              )}
              {step.output && (
                <div className="text-terminal-text whitespace-pre-line mb-2 pl-4">
                  {step.output}
                </div>
              )}
              <div className="text-muted-foreground text-xs pl-4 italic border-l-2 border-primary/30 ml-2">
                💡 {step.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mt-4">
        <Button
          onClick={nextStep}
          disabled={currentStep >= steps.length - 1}
          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          {currentStep < steps.length - 1 ? "Next Step" : "Complete"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          onClick={reset}
          variant="outline"
          className="border-primary/30 hover:bg-primary/10"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="mt-3 text-center text-sm text-muted-foreground">
        Step {currentStep + 1} of {steps.length}
      </div>
    </div>
  );
};

export default TerminalSimulator;
