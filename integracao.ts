/**
 * INTEGRAÇÃO PADRÃO PARA NOVOS PROJETOS - HUB SOTEC
 *
 * Classe simples com métodos para notificar início, sucesso e falha.
 * Registra automaticamente duração e outras métricas.
 */

const HUB_API = 'https://hub.sotec.brmed.com/api/log';

interface ConfigJob {
  jobId: string;
  nome: string;
  responsavel: string;
}

class HubSotec {
  private jobId: string;
  private inicio: number;

  constructor(config: ConfigJob) {
    this.jobId = config.jobId;
    this.inicio = Date.now();

    // Registra no HUB que existe
    this.registrarJob(config);
  }

  private async registrarJob(config: ConfigJob) {
    try {
      await fetch(`${HUB_API}/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
    } catch (e) { /* Ignora */ }
  }

  async notificarInicio() {
    try {
      await fetch(HUB_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_id: this.jobId,
          status: 'iniciado',
          timestamp: new Date().toISOString()
        })
      });
    } catch (e) { /* Ignora */ }
  }

  async notificarSucesso(registrosProcessados?: number) {
    const duracao = Math.floor((Date.now() - this.inicio) / 1000);

    try {
      await fetch(HUB_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_id: this.jobId,
          status: 'sucesso',
          duracao,
          registros_processados: registrosProcessados,
          timestamp: new Date().toISOString()
        })
      });
    } catch (e) { /* Ignora */ }
  }

  async notificarFalha(erro: Error) {
    const duracao = Math.floor((Date.now() - this.inicio) / 1000);

    try {
      await fetch(HUB_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_id: this.jobId,
          status: 'falha',
          duracao,
          erro: erro.message,
          timestamp: new Date().toISOString()
        })
      });
    } catch (e) { /* Ignora */ }
  }
}

// ============================================================================
// EXEMPLO DE USO
// ============================================================================

async function exemploNovoJob() {
  const hub = new HubSotec({
    jobId: 'job007',
    nome: 'ETL SBM - Extração e Transformação',
    responsavel: 'breno.rio@grupobrmed.com.br'
  });

  await hub.notificarInicio();

  try {
    console.log('Processando...');
    const registros = 1000

    await hub.notificarSucesso(registros);
  } catch (erro) {
    await hub.notificarFalha(erro as Error);
    throw erro;
  }
}