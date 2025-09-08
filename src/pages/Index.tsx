import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { AIRecommendations } from "@/components/AIRecommendations";
import { SentimentAnalysis } from "@/components/SentimentAnalysis";
import { SeasonalForecasting } from "@/components/SeasonalForecasting";
import { CompetitorMonitoring } from "@/components/CompetitorMonitoring";
import { WasteOptimization } from "@/components/WasteOptimization";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Users, ChefHat } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard de Análise de Menu</h1>
          <p className="text-muted-foreground">
            Insights em tempo real para otimização de rentabilidade e redução de desperdício
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Receita Total"
            value="R$ 847.2K"
            change="+12.5%"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <MetricCard
            title="Margem de Lucro Média"
            value="68.4%"
            change="+5.2%"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <MetricCard
            title="Satisfação do Cliente"
            value="4.7/5"
            change="+0.3"
            icon={<Users className="h-4 w-4" />}
          />
          <MetricCard
            title="Desperdício da Cozinha"
            value="8.2%"
            change="-2.1%"
            icon={<ChefHat className="h-4 w-4" />}
          />
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="analytics">Análise</TabsTrigger>
            <TabsTrigger value="recommendations">IA</TabsTrigger>
            <TabsTrigger value="sentiment">Sentimento</TabsTrigger>
            <TabsTrigger value="seasonal">Sazonal</TabsTrigger>
            <TabsTrigger value="competitors">Concorrentes</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <WasteOptimization />
              <AIRecommendations />
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <AIRecommendations />
          </TabsContent>

          <TabsContent value="sentiment">
            <SentimentAnalysis />
          </TabsContent>

          <TabsContent value="seasonal">
            <SeasonalForecasting />
          </TabsContent>

          <TabsContent value="competitors">
            <CompetitorMonitoring />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Index;
