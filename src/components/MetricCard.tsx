import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

export const MetricCard = ({ title, value, change, icon }: MetricCardProps) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {change} vs mês anterior
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};