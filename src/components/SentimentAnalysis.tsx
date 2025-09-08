import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, ThumbsDown, Meh } from "lucide-react";

interface SentimentData {
  dish: string;
  positive: number;
  negative: number;
  neutral: number;
  totalReviews: number;
  recentComments: Array<{
    comment: string;
    sentiment: "positive" | "negative" | "neutral";
    source: string;
  }>;
}

const mockSentimentData: SentimentData[] = [
  {
    dish: "Truffle Pasta",
    positive: 85,
    negative: 10,
    neutral: 5,
    totalReviews: 234,
    recentComments: [
      { comment: "Absolutely divine! Best pasta in town", sentiment: "positive", source: "Google" },
      { comment: "Too expensive for the portion", sentiment: "negative", source: "Yelp" }
    ]
  },
  {
    dish: "Grilled Salmon",
    positive: 72,
    negative: 18,
    neutral: 10,
    totalReviews: 156,
    recentComments: [
      { comment: "Fresh and perfectly cooked", sentiment: "positive", source: "TripAdvisor" },
      { comment: "Fish was a bit dry", sentiment: "negative", source: "Google" }
    ]
  }
];

const getSentimentIcon = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return <ThumbsUp className="h-4 w-4 text-green-600" />;
    case "negative": return <ThumbsDown className="h-4 w-4 text-red-600" />;
    default: return <Meh className="h-4 w-4 text-yellow-600" />;
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "bg-green-100 text-green-800";
    case "negative": return "bg-red-100 text-red-800";
    default: return "bg-yellow-100 text-yellow-800";
  }
};

export const SentimentAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Análise de Sentimento dos Clientes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockSentimentData.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{item.dish}</h4>
              <span className="text-sm text-muted-foreground">
                {item.totalReviews} avaliações
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3 text-green-600" />
                  Positivo
                </span>
                <span>{item.positive}%</span>
              </div>
              <Progress value={item.positive} className="h-2" />
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1">
                  <ThumbsDown className="h-3 w-3 text-red-600" />
                  Negativo
                </span>
                <span>{item.negative}%</span>
              </div>
              <Progress value={item.negative} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Comentários Recentes:</h5>
              {item.recentComments.map((comment, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-muted rounded-lg">
                  {getSentimentIcon(comment.sentiment)}
                  <div className="flex-1">
                    <p className="text-sm">{comment.comment}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {comment.source}
                      </Badge>
                      <span className={`text-xs px-2 py-1 rounded-full ${getSentimentColor(comment.sentiment)}`}>
                        {comment.sentiment}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};