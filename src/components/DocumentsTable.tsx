import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GripVertical, MoreVertical, Plus, Columns, ChevronDown, CircleCheckBig, Loader2 } from "lucide-react";

interface DocumentRow {
  id: string;
  header: string;
  sectionType: string;
  status: "done" | "in-process" | "healthy" | "warning";
  target: number;
  limit: number;
  reviewer: string;
  local: string;
  lastExecution: string;
  isCron: boolean;
}

const mockData: DocumentRow[] = [
  // CRONS
  {
    id: "1",
    header: "Convocação MODEC",
    sectionType: "Cron Job",
    status: "done",
    target: 148,
    limit: 3.2,
    reviewer: "Alessandra",
    local: "Servidor Físico",
    lastExecution: "Há 2 horas",
    isCron: true,
  },
  {
    id: "2",
    header: "Convocação SBM",
    sectionType: "Cron Job",
    status: "in-process",
    target: 329,
    limit: 5.8,
    reviewer: "Claudinho",
    local: "AWS EC2",
    lastExecution: "Em execução",
    isCron: true,
  },
  {
    id: "3",
    header: "Convocação Eletrobrás",
    sectionType: "Cron Job",
    status: "done",
    target: 84,
    limit: 2.1,
    reviewer: "Breno Rio",
    local: "Servidor Físico",
    lastExecution: "Há 30 min",
    isCron: true,
  },
  {
    id: "4",
    header: "Multissistemas",
    sectionType: "Cron Job",
    status: "done",
    target: 267,
    limit: 6.5,
    reviewer: "Claudinho",
    local: "Servidor Físico",
    lastExecution: "Há 15 min",
    isCron: true,
  },
  {
    id: "5",
    header: "SLA Abertta",
    sectionType: "Cron Job",
    status: "done",
    target: 192,
    limit: 4.3,
    reviewer: "Alessandra",
    local: "Servidor Físico",
    lastExecution: "Há 1 hora",
    isCron: true,
  },
  {
    id: "6",
    header: "SEAC",
    sectionType: "Cron Job",
    status: "done",
    target: 168,
    limit: 1.9,
    reviewer: "Claudinho",
    local: "AWS EC2",
    lastExecution: "Há 45 min",
    isCron: true,
  },
  {
    id: "7",
    header: "ETL SBM",
    sectionType: "Cron Job",
    status: "done",
    target: 224,
    limit: 7.2,
    reviewer: "Natan desAparecido",
    local: "AWS",
    lastExecution: "Há 3 horas",
    isCron: true,
  },
  {
    id: "8",
    header: "DataApp CMAT",
    sectionType: "Projeto Web",
    status: "healthy",
    target: 412,
    limit: 3.8,
    reviewer: "Gabriel Rodrigues",
    local: "Render",
    lastExecution: "Há 20 min",
    isCron: true,
  },
  // PROJETOS
  {
    id: "9",
    header: "ProntuAI",
    sectionType: "Projeto Web",
    status: "healthy",
    target: 0,
    limit: 0,
    reviewer: "Gabriel Rodrigues",
    local: "AWS EC2",
    lastExecution: "Online",
    isCron: false,
  },
  {
    id: "10",
    header: "PGR Web",
    sectionType: "Projeto Web",
    status: "healthy",
    target: 0,
    limit: 0,
    reviewer: "Breno Rio",
    local: "AWS ECS",
    lastExecution: "Online",
    isCron: false,
  },
  {
    id: "11",
    header: "AeroCheck",
    sectionType: "Projeto Web",
    status: "warning",
    target: 0,
    limit: 0,
    reviewer: "Claudinho",
    local: "AWS ECS",
    lastExecution: "Online",
    isCron: false,
  },
  {
    id: "12",
    header: "Sistema COPSOQ",
    sectionType: "Projeto Web",
    status: "healthy",
    target: 0,
    limit: 0,
    reviewer: "Leo Lopes 🫡",
    local: "Render",
    lastExecution: "Online",
    isCron: false,
  },
];

export const DocumentsTable = () => {
  const [activeTab, setActiveTab] = useState("outline");

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between px-4 lg:px-6 mb-4">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="w-fit @4xl/main:hidden h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outline">Visão Geral</SelectItem>
              <SelectItem value="past-performance">Jobs Recentes (3)</SelectItem>
              <SelectItem value="key-personnel">Responsáveis (2)</SelectItem>
              <SelectItem value="focus-documents">Projetos</SelectItem>
            </SelectContent>
          </Select>

          <TabsList className="hidden @4xl/main:flex">
            <TabsTrigger value="outline">Visão Geral</TabsTrigger>
            <TabsTrigger value="past-performance">
              Jobs Recentes <Badge variant="secondary" className="ml-1.5">3</Badge>
            </TabsTrigger>
            <TabsTrigger value="key-personnel">
              Responsáveis <Badge variant="secondary" className="ml-1.5">2</Badge>
            </TabsTrigger>
            <TabsTrigger value="focus-documents">Projetos</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Columns className="h-4 w-4" />
                  <span className="hidden lg:inline">Personalizar Colunas</span>
                  <span className="lg:hidden">Colunas</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mostrar todas</DropdownMenuItem>
                <DropdownMenuItem>Ocultar status</DropdownMenuItem>
                <DropdownMenuItem>Ocultar revisores</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="gap-1.5">
              <Plus className="h-4 w-4" />
              <span className="hidden lg:inline">Adicionar Job</span>
            </Button>
          </div>
        </div>

        <TabsContent value={activeTab} className="px-4 lg:px-6 mt-0">
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader className="bg-muted sticky top-0 z-10">
                <TableRow>
                  <TableHead className="w-8"></TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Local</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Última Execução</TableHead>
                  <TableHead className="text-right">Exec. (7d)</TableHead>
                  <TableHead className="text-right">FTE</TableHead>
                  <TableHead>Responsável</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground hover:bg-transparent">
                        <GripVertical className="h-3 w-3" />
                        <span className="sr-only">Reordenar</span>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="link" className="h-9 px-0 text-foreground">
                        {row.header}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="w-32">
                        <Badge variant="outline" className="text-muted-foreground">
                          {row.sectionType}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{row.local}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-muted-foreground">
                        {row.status === "done" ? (
                          <>
                            <CircleCheckBig className="h-3 w-3 fill-green-500 dark:fill-green-400 text-green-500 dark:text-green-400" />
                            Ativo
                          </>
                        ) : row.status === "in-process" ? (
                          <>
                            <Loader2 className="h-3 w-3" />
                            Processando
                          </>
                        ) : row.status === "healthy" ? (
                          <>
                            <CircleCheckBig className="h-3 w-3 fill-green-500 dark:fill-green-400 text-green-500 dark:text-green-400" />
                            Saudável
                          </>
                        ) : (
                          <>
                            <span className="h-3 w-3 inline-block rounded-full bg-yellow-500" />
                            Atenção
                          </>
                        )}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{row.lastExecution}</span>
                    </TableCell>
                    <TableCell>
                      {row.isCron ? (
                        <form>
                          <Label htmlFor={`${row.id}-target`} className="sr-only">
                            Execuções
                          </Label>
                          <Input
                            id={`${row.id}-target`}
                            type="number"
                            value={row.target}
                            className="h-8 w-20 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30"
                            readOnly
                          />
                        </form>
                      ) : (
                        <span className="text-sm text-muted-foreground text-right block pr-2">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {row.isCron ? (
                        <form>
                          <Label htmlFor={`${row.id}-limit`} className="sr-only">
                            FTE
                          </Label>
                          <Input
                            id={`${row.id}-limit`}
                            type="text"
                            value={row.limit.toFixed(1)}
                            className="h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30"
                            readOnly
                          />
                        </form>
                      ) : (
                        <span className="text-sm text-muted-foreground text-right block pr-2">-</span>
                      )}
                    </TableCell>
                    <TableCell>{row.reviewer}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground data-[state=open]:bg-muted">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Abrir menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Ver logs</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Desativar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
