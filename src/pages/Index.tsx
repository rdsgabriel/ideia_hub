import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MetricCard } from "@/components/MetricCard";
import { VisitorChart } from "@/components/VisitorChart";
import { DocumentsTable } from "@/components/DocumentsTable";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex w-full flex-col px-4 py-3">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <div className="flex flex-col flex-1">
                  <h1 className="text-base font-semibold">Dashboard</h1>
                  <p className="text-xs text-muted-foreground">Centralização e monitoramento de processos automatizados</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Button size="sm" className="hidden sm:flex">
                    <CirclePlus className="h-4 w-4" />
                    Novo Job
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                  title="Jobs Cadastrados"
                  value="127"
                  change="+8.2%"
                  trend="up"
                  description="Processos centralizados"
                  subtitle="Crons, scripts e automações"
                />
                <MetricCard
                  title="Execuções (7 dias)"
                  value="1,834"
                  change="+12.5%"
                  trend="up"
                  description="Rastreabilidade completa"
                  subtitle="Logs padronizados e acessíveis"
                />
                <MetricCard
                  title="Taxa de Sucesso"
                  value="98.4%"
                  change="+2.1%"
                  trend="up"
                  description="Governança e confiabilidade"
                  subtitle="Monitoramento em tempo real"
                />
                <MetricCard
                  title="FTE Economizado"
                  value="24.5"
                  change="+15.3%"
                  trend="up"
                  description="Valor mensurável"
                  subtitle="Economia operacional visível"
                />
              </div>

              <div className="w-full">
                <VisitorChart />
              </div>

              <div className="w-full">
                <DocumentsTable />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
