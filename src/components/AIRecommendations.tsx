import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertTriangle, Lightbulb } from "lucide-react";

interface Recommendation {
  id: string;
  type: "pricing" | "menu" | "promotion" | "removal";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  potentialSavings: number;
  confidence: number;
}

const mockRecommendations: Recommendation[] = [
  {
    id: "1",
    type: "pricing",
    title: "Increase Truffle Pasta Price",
    description: "Based on popularity and cost analysis, increase price by 15% to optimize profit margin",
    impact: "high",
    potentialSavings: 2400,
    confidence: 92
  },
  {
    id: "2",
    type: "removal",
    title: "Remove Seasonal Salad",
    description: "Low popularity (12%) and high waste rate. Consider seasonal replacement",
    impact: "medium",
    potentialSavings: 1200,
    confidence: 87
  },
  {
    id: "3",
    type: "promotion",
    title: "Promote Grilled Salmon",
    description: "High profit margin but underperforming. Social media campaign recommended",
    impact: "medium",
    potentialSavings: 1800,
    confidence: 78
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "high": return "destructive";
    case "medium": return "secondary";
    case "low": return "outline";
    default: return "outline";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "pricing": return <TrendingUp className="h-4 w-4" />;
    case "removal": return <TrendingDown className="h-4 w-4" />;
    case "promotion": return <Lightbulb className="h-4 w-4" />;
    default: return <AlertTriangle className="h-4 w-4" />;
  }
};

export const AIRecommendations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Recomendações de IA
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockRecommendations.map((rec) => (
          <div key={rec.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                {getTypeIcon(rec.type)}
                <h4 className="font-semibold">{rec.title}</h4>
              </div>
              <Badge variant={getImpactColor(rec.impact)}>
                {rec.impact}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground">{rec.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-sm">
                <span className="text-green-600 font-medium">
                  +${rec.potentialSavings}/mês
                </span>
                <span className="text-muted-foreground">
                  {rec.confidence}% confiança
                </span>
              </div>
              <Button size="sm" variant="outline">
                Aplicar
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};