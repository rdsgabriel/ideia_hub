/**
 * INTEGRAÇÃO SIMPLES PARA PROJETOS LEGADOS - HUB SOTEC
 *
 * Basta adicionar 2 linhas no seu script existente:
 * - Uma no final se der sucesso
 * - Uma no catch se der erro
 */

// ============================================================================
// TYPESCRIPT / NODE.JS
// ============================================================================

const HUB_API = 'https://hub.sotec.brmed.com/api/log';

async function notificar(jobId: string, status: 'sucesso' | 'falha', duracao?: number) {
  try {
    await fetch(HUB_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job_id: jobId, status, duracao, timestamp: new Date().toISOString() })
    });
  } catch (e) { /* Ignora erro */ }
}

// Exemplo de uso:
async function meuScriptLegado() {
  const inicio = Date.now();

  try {
    console.log('Executando...');

    await notificar('convocacao-modec', 'sucesso', Math.floor((Date.now() - inicio) / 1000));
  } catch (erro) {
    await notificar('convocacao-modec', 'falha', Math.floor((Date.now() - inicio) / 1000));
    throw erro;
  }
}

// ============================================================================
// PYTHON
// ============================================================================
/*
import requests
import time

HUB_API = 'https://hub.sotec.brmed.com/api/log'

def notificar(job_id, status, duracao=None):
    try:
        requests.post(HUB_API, json={'job_id': job_id, 'status': status, 'duracao': duracao}, timeout=3)
    except:
        pass  # Ignora erro

# Exemplo de uso:
if __name__ == '__main__':
    inicio = time.time()

    try:
        # === SEU CÓDIGO AQUI ===
        print("Executando...")
        # =======================

        notificar('convocacao-sbm', 'sucesso', int(time.time() - inicio))
    except Exception as e:
        notificar('convocacao-sbm', 'falha', int(time.time() - inicio))
        raise
*/

// ============================================================================
// BASH / CURL (para cron jobs simples)
// ============================================================================
/*
#!/bin/bash

JOB_ID="backup-automatico"
HUB_API="https://hub.sotec.brmed.com/api/log"
INICIO=$(date +%s)

# SEU CÓDIGO AQUI
echo "Executando backup..."
# ... comandos do script ...

# Ao final:
FIM=$(date +%s)
DURACAO=$((FIM - INICIO))

curl -X POST $HUB_API \
  -H "Content-Type: application/json" \
  -d "{\"job_id\":\"$JOB_ID\",\"status\":\"sucesso\",\"duracao\":$DURACAO}" \
  --max-time 3 --silent

# Em caso de erro, use status: "falha"
*/

export { notificar };
