# Checklist de produção

## Pronto no código

- [x] Frontend e Functions compilam.
- [x] `.env` não é versionado e `.env.example` existe.
- [x] Regras JSON válidas.
- [x] Autenticação e recuperação de senha implementadas.
- [x] Venda server-side com estoque transacional e idempotência.
- [x] Leitura de dados administrativos restringida.
- [x] Documentação técnica atualizada.

## Atenção

- [ ] Configurar API key por domínio.
- [ ] Configurar Authorized domains e providers.
- [ ] Confirmar Node 20 no deploy.
- [ ] Revisar vulnerabilidades de dependências sem `--force`.
- [ ] Reduzir bundle ou aceitar formalmente o aviso.
- [ ] Configurar lint e testes automatizados reais.

## Bloqueia lançamento

- [ ] Homologação com duas empresas e papéis diferentes.
- [ ] Teste de concorrência de venda/estoque.
- [ ] Backup e restauração comprovados.
- [ ] Revisão final das Rules publicadas.
- [ ] Definição de retenção e responsável por privacidade.
