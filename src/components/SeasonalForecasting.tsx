import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Calendar, TrendingUp, Snowflake, Sun, Leaf, Cloud } from "lucide-react";

const monthlyData = [
  { month: "Jan", demand: 65, temperature: -2, events: 2 },
  { month: "Fev", demand: 70, temperature: 1, events: 1 },
  { month: "Mar", demand: 85, temperature: 8, events: 3 },
  { month: "Abr", demand: 90, temperature: 15, events: 2 },
  { month: "Mai", demand: 95, temperature: 20, events: 4 },
  { month: "Jun", demand: 88, temperature: 25, events: 3 },
  { month: "Jul", demand: 85, temperature: 28, events: 5 },
  { month: "Ago", demand: 92, temperature: 27, events: 4 },
  { month: "Set", demand: 98, temperature: 22, events: 3 },
  { month: "Out", demand: 88, temperature: 16, events: 2 },
  { month: "Nov", demand: 75, temperature: 8, events: 2 },
  { month: "Dez", demand: 80, temperature: 2, events: 6 }
];

const seasonalItems = [
  {
    item: "Sopa de Abóbora",
    season: "winter",
    peakMonths: ["Jun", "Jul", "Ago"],
    demandIncrease: 240,
    icon: <Snowflake className="h-4 w-4" />
  },
  {
    item: "Saladas Frescas",
    season: "summer",
    peakMonths: ["Dez", "Jan", "Fev"],
    demandIncrease: 180,
    icon: <Sun className="h-4 w-4" />
  },
  {
    item: "Pratos Quentes",
    season: "winter",
    peakMonths: ["Jun", "Jul", "Ago"],
    demandIncrease: 160,
    icon: <Cloud className="h-4 w-4" />
  },
  {
    item: "Smoothies & Açaí",
    season: "summer",
    peakMonths: ["Nov", "Dez", "Jan"],
    demandIncrease: 320,
    icon: <Leaf className="h-4 w-4" />
  }
];

export const SeasonalForecasting = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Previsão de Demanda Sazonal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="demand" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Itens Sazonais - Oportunidades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seasonalItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h4 className="font-semibold">{item.item}</h4>
                  </div>
                  <Badge variant={item.season === "summer" ? "default" : "secondary"}>
                    {item.season === "summer" ? "Verão" : "Inverno"}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pico de demanda:</span>
                    <span className="font-medium">{item.peakMonths.join(", ")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Aumento esperado:</span>
                    <span className="font-medium text-green-600">+{item.demandIncrease}%</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="text-xs text-muted-foreground mb-1">Tendência de 12 meses</div>
                  <div className="h-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData.slice(0, 6)}>
                        <Bar 
                          dataKey="demand" 
                          fill="hsl(var(--primary))" 
                          opacity={0.6}
                          radius={[2, 2, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};