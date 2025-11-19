# HUB SOTEC

Plataforma de centralização e monitoramento de processos automatizados da BR MED.

## Sobre o Projeto

O HUB SOTEC é uma plataforma desenvolvida para centralizar, monitorar e gerenciar todos os processos automatizados da empresa, incluindo:

- **Cron Jobs**: Scripts agendados e automações periódicas
- **Projetos Web**: Aplicações em produção com status de saúde
- **N8N Workflows**: Fluxos de automação
- **Scripts Python**: Rotinas de processamento de dados

### Principais Funcionalidades

- 📊 Dashboard centralizado com métricas em tempo real
- 📈 Gráficos de execução (sucesso vs falha)
- 🔍 Rastreabilidade completa de todos os processos
- 👥 Controle de responsáveis por cada automação
- 💰 Cálculo de FTE (Full-Time Equivalent) economizado
- 🏥 Status de saúde para projetos web
- 📝 Logs padronizados e acessíveis

## Como Executar

### Pré-requisitos

- Node.js 18+ e npm instalados

### Instalação

```sh
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre no diretório do projeto
cd ui-dash-recreate

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## Tecnologias Utilizadas

- **Vite** - Build tool e dev server
- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **shadcn/ui** - Componentes de UI
- **Tailwind CSS** - Framework CSS utility-first
- **Recharts** - Biblioteca de gráficos

## Estrutura do Projeto

```
src/
├── components/       # Componentes React reutilizáveis
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e helpers
└── hooks/           # React hooks customizados
```
