import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

interface CommandCardProps {
  command: string;
  description: string;
  id: string;
}

const CommandCard = ({ command, description, id }: CommandCardProps) => {
  return (
    <Link to={`/command/${id}`}>
      <Card className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 bg-card/50 backdrop-blur-sm cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
            <Terminal className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 font-mono text-primary">
              $ {command}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CommandCard;
