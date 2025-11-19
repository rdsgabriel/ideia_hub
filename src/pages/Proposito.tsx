import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Proposito = () => {
  const projetoContent = `Hoje, a empresa possui uma grande quantidade de processos automatizados, desde scripts simples em cron até projetos maiores e fluxos em ferramentas como n8n. Esses processos funcionam, mas estão espalhados entre ambientes diferentes, sem rastreabilidade e sem uma visão unificada. Muitos estão em uma máquina física, outros em servidores isolados, cada um com sua própria forma de log e monitoramento. Isso faz com que, apesar de termos automações valiosas, o acompanhamento seja difícil, o diagnóstico de falhas seja lento e o potencial de ganho operacional não seja totalmente visível.

A proposta do **HUB SOTEC** nasce exatamente para resolver esse problema: criar uma plataforma única onde todos os processos: crons, serviços, scripts e automações possam ser catalogados, acompanhados e monitorados. A ideia não é reescrever o legado nem gerar demasiado trabalho. Pelo contrário: **tudo o que já existe continuará igual**, e vamos apenas criar um “funil” para centralizar informações e logs, trazendo organização, governança e rastreabilidade com **mínimo esforço**.

Cada job, seja ele um cron simples ou um processo mais complexo, será catalogado em uma tabela central com informações essenciais:

- Nome do projeto
- Tipo (cron, projeto grande, n8n, rotina python etc.)
- Local onde roda (máquina física, VM, AWS)
- Frequência de execução
- Última vez que rodou
- Status das execuções recentes
- Dono ou responsável
- Link do repositório no Git
- Logs dos últimos 7 dias
- Tempo que levaria para executar manualmente
- Economia estimada em FTE
- **Controle de acesso por usuário e permissões específicas**

Essa central oferece um ponto único de verdade: podemos finalmente saber **o que existe**, **por que existe**, **quem cuida**, **quão crítico é** e **como está se comportando ao longo do tempo**.

A implementação é simples porque **não exige refatorar nada**. Hoje, praticamente todos os processos já produzem logs: apenas estão isolados, guardados localmente ou enviados para uma planilha. O que vamos fazer é padronizar esses logs e criar uma pequena API onde cada job envia uma notificação de execução, contendo status (sucesso ou falha), timestamp, duração e um link para o log correspondente. Com isso, a central passa a exibir automaticamente os últimos 7 dias de execuções, facilitando o rastreamento de falhas e ampliando a visibilidade do funcionamento de todo o ecossistema.

Além disso, vale destacar um benefício importante: **todos esses dados estruturados poderão ser consumidos por outras áreas, inclusive BI**. Se algum dia quisermos criar dashboards mostrando volume de execuções, taxa de falhas, economia de FTE ou tendências operacionais, isso será simples, afinal, teremos uma API organizada entregando tudo pronto.

Em outras palavras: se quisermos colocar tudo isso em um dashboard bonito, dá. E quem trabalha com BI sabe que isso já é meio caminho andado para virar realidade.

Outro ponto essencial que esta central resolve é o **churn natural de pessoal** e a movimentação entre equipes. Hoje, quando alguém troca de área ou sai da BR MED, o conhecimento sobre determinados scripts e processos muitas vezes se perde. Com a Central SOTEC, **cada usuário terá seu próprio acesso**, com níveis de permissão adequados (visualização, edição, administração), garantindo que não existam “donos ocultos” de automações ou dependência de pessoas específicas. Isso cria continuidade operacional, transfere conhecimento para um repositório institucional (além do que já possuímos no git) e reduz drasticamente o risco de jobs “órfãos” ou desconhecidos.

Para os jobs legados, bastará adicionar uma pequena chamada ao final da execução: algo que não muda a lógica do código, não interfere no funcionamento e exige praticamente zero reescrita. Já para processos futuros, seguiremos um padrão claro: cada job terá um identificador único, um README explicando o que faz, um link para o Git, arquivos de configuração organizados e logs enviados diretamente para a plataforma (Se reparar, já fazemos isso, só não centralizamos :). Isso cria um ciclo virtuoso: o legado continua funcionando, mas tudo novo já nasce padronizado, e aos poucos convergimos para uma operação muito mais sustentável.

E aqui entra talvez o elemento mais poderoso, e muitas vezes "mágico", escondido nesse projeto: **a flexibilidade**. A plataforma será inteiramente nossa, mantida internamente, sob total controle da equipe. Isso significa que não estaremos presos a soluções engessadas ou dependentes de terceiros. Se um dia quisermos adicionar novas métricas, mudar o visual, integrar com outra ferramenta, criar alertas mais avançados ou até transformar a central em um orquestrador mais robusto, teremos autonomia absoluta para evoluir no ritmo do negócio. Em outras palavras: criamos um alicerce que não só resolve os problemas atuais, mas permite que cresçamos, inovemos e ajustemos a plataforma conforme nossas necessidades mudarem, sem amarras.

Além de melhorar governança e confiabilidade, esse modelo também permitirá medir valor. Cada automação poderá ter estimada a quantidade de tempo que substituiria caso fosse um processo manual,  permitindo calcular economia em horas e em **FTE (Full-Time Equivalent)**. Isso revela de forma clara e objetiva quanto trabalho humano a empresa economiza com automações, algo que hoje simplesmente não é visível.

Com essa central, passamos a ter:

- **Rastreabilidade completa**
- **Logs padronizados e acessíveis**
- **Últimas execuções sempre registradas**
- **Histórico dos últimos dias para diagnóstico rápido**
- **Base sólida para futuras migrações para AWS ou outras infraestruturas**
- **Controle de acesso, permissões e continuidade operacional mesmo com churn**
- **Dados estruturados prontos para BI e análises avançadas**
- **Economia operacional mensurável em FTE**
- **Menos risco, menos dependência de indivíduos e máquinas específicas**

E o mais importante: tudo isso sem esforço elevado. Os jobs já existem, já rodam, já executam suas rotinas. O que falta hoje é apenas **organizar e centralizar**, permitindo que a empresa finalmente enxergue, controle e evolua seu ecossistema de automações de forma profissional e escalável.

Esse projeto, portanto, não muda o que já funciona: apenas torna visível, seguro e governado aquilo que já está gerando valor. E cria as bases para que cresçamos com muito mais eficiência daqui para frente.`;

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
                  <h1 className="text-base font-semibold">Propósito</h1>
                  <p className="text-xs text-muted-foreground">A razão de ser da Central SOTEC</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col items-center">
            <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6 w-full max-w-4xl">
              <Card>
                <CardContent className="p-6 md:p-8 lg:p-12">
                  <div className="markdown-content">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({children}) => <p className="mb-4 text-base leading-7 text-justify">{children}</p>,
                        ul: ({children}) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                        li: ({children}) => <li className="text-base leading-7">{children}</li>,
                        strong: ({children}) => <strong className="font-bold text-primary">{children}</strong>,
                      }}
                    >
                      {projetoContent}
                    </ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Proposito;
