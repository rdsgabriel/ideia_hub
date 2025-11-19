import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  subtitle: string;
}

export function MetricCard({ title, value, change, trend, description, subtitle }: MetricCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardDescription>{title}</CardDescription>
        <Badge variant="outline" className="ml-auto gap-1">
          <TrendIcon className="h-3 w-3" />
          {change}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{value}</CardTitle>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <div className="flex items-center gap-2 text-sm font-medium">
          {description}
          <TrendIcon className="h-4 w-4" />
        </div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </CardFooter>
    </Card>
  );
}
