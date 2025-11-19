import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "13 Nov", sucesso: 342, falha: 12 },
  { date: "14 Nov", sucesso: 387, falha: 8 },
  { date: "15 Nov", sucesso: 356, falha: 65 },
  { date: "16 Nov", sucesso: 412, falha: 6 },
  { date: "17 Nov", sucesso: 398, falha: 11 },
  { date: "18 Nov", sucesso: 425, falha: 9 },
  { date: "19 Nov", sucesso: 441, falha: 7 },
];

const chartConfig = {
  sucesso: {
    label: "Sucesso",
    color: "hsl(var(--primary))",
  },
  falha: {
    label: "Falha",
    color: "hsl(var(--destructive))",
  },
} satisfies ChartConfig;

export function VisitorChart() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Execuções de Jobs</CardTitle>
          <CardDescription>
            <span className="hidden sm:inline">Histórico de execuções dos últimos 7 dias</span>
            <span className="sm:hidden">Últimos 7 dias</span>
          </CardDescription>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <ToggleGroup type="single" defaultValue="last7days" className="hidden sm:flex">
              <ToggleGroupItem value="last3months" aria-label="Últimos 3 meses" className="px-4">
                Últimos 3 meses
              </ToggleGroupItem>
              <ToggleGroupItem value="last30days" aria-label="Últimos 30 dias" className="px-4">
                Últimos 30 dias
              </ToggleGroupItem>
              <ToggleGroupItem value="last7days" aria-label="Últimos 7 dias" className="px-4">
                Últimos 7 dias
              </ToggleGroupItem>
            </ToggleGroup>
            <Select defaultValue="last7days">
              <SelectTrigger className="w-40 sm:hidden" aria-label="Select a value">
                <SelectValue placeholder="Últimos 7 dias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last3months">Últimos 3 meses</SelectItem>
                <SelectItem value="last30days">Últimos 30 dias</SelectItem>
                <SelectItem value="last7days">Últimos 7 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSucesso" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.05}
                />
              </linearGradient>
              <linearGradient id="fillFalha" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--destructive))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--destructive))"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="sucesso"
              type="monotone"
              fill="url(#fillSucesso)"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
            />
            <Area
              dataKey="falha"
              type="monotone"
              fill="url(#fillFalha)"
              stroke="hsl(var(--destructive))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--destructive))", r: 4 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
