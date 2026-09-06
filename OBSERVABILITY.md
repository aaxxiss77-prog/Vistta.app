# Observabilidade

## Estado atual

O frontend possui `ErrorBoundary` e `console.error` para falhas de renderização, autenticação e listeners. As Functions retornam `HttpsError` e dependem dos logs padrão do Firebase.

## Ausente

- Logs estruturados com correlação por operação.
- Alertas de erro e latência.
- Monitoramento de taxa de falha das Functions.
- Rastreamento de operações de negócio.

Ao implementar, não registrar senhas, tokens, CPF, receitas ou outros dados pessoais desnecessários. Use IDs técnicos, empresa anonimizada quando possível, código do erro, duração e resultado.
