import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trash2, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface WasteData {
  item: string;
  wastePercentage: number;
  costLoss: number;
  reason: string;
  suggestion: string;
  priority: "high" | "medium" | "low";
  trend: "increasing" | "decreasing" | "stable";
  location: string;
}

const wasteData: WasteData[] = [
  {
    item: "Mixed Greens Salad",
    wastePercentage: 35,
    costLoss: 420,
    reason: "Overproduction during weekdays",
    suggestion: "Reduce prep by 40% Mon-Wed, implement pre-order system",
    priority: "high",
    trend: "increasing",
    location: "Downtown Location"
  },
  {
    item: "Fresh Bread Rolls",
    wastePercentage: 28,
    costLoss: 280,
    reason: "Daily overstock preparation",
    suggestion: "Adjust baking schedule based on reservations",
    priority: "high",
    trend: "stable",
    location: "Mall Location"
  },
  {
    item: "Seafood Special",
    wastePercentage: 22,
    costLoss: 650,
    reason: "Limited shelf life, unpredictable demand",
    suggestion: "Implement dynamic pricing, limited daily portions",
    priority: "medium",
    trend: "decreasing",
    location: "Waterfront Location"
  },
  {
    item: "Seasonal Fruit Dessert",
    wastePercentage: 18,
    costLoss: 180,
    reason: "Weather-dependent ingredient quality",
    suggestion: "Partner with local suppliers, flexible menu",
    priority: "low",
    trend: "stable",
    location: "Garden Location"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "destructive";
    case "medium": return "secondary";
    case "low": return "outline";
    default: return "outline";
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "increasing": return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case "decreasing": return <CheckCircle className="h-4 w-4 text-green-500" />;
    default: return <Clock className="h-4 w-4 text-yellow-500" />;
  }
};

const getWasteColor = (percentage: number) => {
  if (percentage >= 30) return "text-red-600";
  if (percentage >= 20) return "text-yellow-600";
  return "text-green-600";
};

export const WasteOptimization = () => {
  const totalWasteCost = wasteData.reduce((sum, item) => sum + item.costLoss, 0);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash2 className="h-5 w-5" />
          Otimização de Desperdício da Cozinha
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h4 className="font-semibold text-red-800">Perda Total Mensal</h4>
            </div>
            <p className="text-2xl font-bold text-red-600">R$ {totalWasteCost.toLocaleString()}</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-blue-800">Economia Potencial</h4>
            </div>
            <p className="text-2xl font-bold text-blue-600">R$ {Math.round(totalWasteCost * 0.7).toLocaleString()}</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-800">Itens Críticos</h4>
            </div>
            <p className="text-2xl font-bold text-green-600">
              {wasteData.filter(item => item.priority === "high").length}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          {wasteData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">{item.item}</h4>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getPriorityColor(item.priority)}>
                    {item.priority}
                  </Badge>
                  {getTrendIcon(item.trend)}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Taxa de Desperdício</span>
                  <span className={`font-semibold ${getWasteColor(item.wastePercentage)}`}>
                    {item.wastePercentage}%
                  </span>
                </div>
                <Progress value={item.wastePercentage} className="h-2" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Perda mensal:</span>
                  <p className="font-semibold text-red-600">R$ {item.costLoss}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Motivo principal:</span>
                  <p className="font-medium">{item.reason}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h5 className="font-semibold text-blue-800 mb-2">💡 Sugestão de Otimização:</h5>
                <p className="text-sm text-blue-700">{item.suggestion}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Economia estimada: <span className="font-semibold text-green-600">
                    R$ {Math.round(item.costLoss * 0.7)}
                  </span>
                </span>
                <Button size="sm" variant="outline">
                  Implementar Sugestão
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-green-800">Plano de Ação Prioritário</h4>
              <p className="text-sm text-green-700">
                Implementando as 2 sugestões prioritárias, economia projetada de 
                <span className="font-bold"> R$ {Math.round((wasteData[0].costLoss + wasteData[1].costLoss) * 0.7)}/mês</span>
              </p>
            </div>
            <Button variant="default">
              Iniciar Implementação
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};