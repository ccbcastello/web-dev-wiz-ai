import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

interface CompetitorData {
  restaurant: string;
  dish: string;
  ourPrice: number;
  theirPrice: number;
  difference: number;
  recommendation: "increase" | "decrease" | "maintain";
  marketPosition: "above" | "below" | "competitive";
  lastUpdated: string;
}

const competitorData: CompetitorData[] = [
  {
    restaurant: "Bella Vista",
    dish: "Truffle Pasta",
    ourPrice: 32,
    theirPrice: 35,
    difference: -3,
    recommendation: "increase",
    marketPosition: "below",
    lastUpdated: "2h ago"
  },
  {
    restaurant: "Ocean Grill",
    dish: "Grilled Salmon",
    ourPrice: 28,
    theirPrice: 26,
    difference: 2,
    recommendation: "maintain",
    marketPosition: "competitive",
    lastUpdated: "4h ago"
  },
  {
    restaurant: "Garden Fresh",
    dish: "Caesar Salad",
    ourPrice: 16,
    theirPrice: 18,
    difference: -2,
    recommendation: "increase",
    marketPosition: "below",
    lastUpdated: "1h ago"
  },
  {
    restaurant: "Prime Steakhouse",
    dish: "Ribeye Steak",
    ourPrice: 45,
    theirPrice: 52,
    difference: -7,
    recommendation: "increase",
    marketPosition: "below",
    lastUpdated: "6h ago"
  }
];

const getRecommendationIcon = (rec: string) => {
  switch (rec) {
    case "increase": return <TrendingUp className="h-4 w-4 text-green-600" />;
    case "decrease": return <TrendingDown className="h-4 w-4 text-red-600" />;
    default: return <AlertCircle className="h-4 w-4 text-yellow-600" />;
  }
};

const getPositionBadge = (position: string) => {
  switch (position) {
    case "above": return <Badge variant="destructive">Acima</Badge>;
    case "below": return <Badge variant="secondary">Abaixo</Badge>;
    default: return <Badge variant="default">Competitivo</Badge>;
  }
};

export const CompetitorMonitoring = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Monitoramento de Concorrentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {competitorData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">{item.dish}</h4>
                  <p className="text-sm text-muted-foreground">{item.restaurant}</p>
                </div>
                {getPositionBadge(item.marketPosition)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Nosso preço:</span>
                  <p className="font-semibold text-lg">R$ {item.ourPrice}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Preço deles:</span>
                  <p className="font-semibold text-lg">R$ {item.theirPrice}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getRecommendationIcon(item.recommendation)}
                  <span className="text-sm">
                    {item.difference > 0 
                      ? `R$ ${item.difference} mais caro` 
                      : `R$ ${Math.abs(item.difference)} mais barato`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    Atualizado {item.lastUpdated}
                  </span>
                  <Button size="sm" variant="outline">
                    Ajustar Preço
                  </Button>
                </div>
              </div>
              
              {item.recommendation === "increase" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800">
                    💡 <strong>Recomendação:</strong> Considere aumentar o preço em R$ {Math.abs(item.difference)} 
                    para melhor posicionamento no mercado.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Análise Competitiva</h4>
              <p className="text-sm text-muted-foreground">
                Oportunidade de aumento de receita: <span className="font-semibold text-green-600">R$ 3,200/mês</span>
              </p>
            </div>
            <Button variant="default">
              Ver Relatório Completo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};