# Testes

Validações executadas nesta auditoria:

- `npm run build`: OK.
- `npm run build --prefix functions`: OK.
- `npm run build:all`: OK.
- Diagnósticos TypeScript dos arquivos alterados: sem erros.
- Referências aos arquivos removidos: nenhuma.

Não há suíte automatizada nem script de lint no repositório. Ainda é necessário executar manualmente login, reset de senha, cadastro, permissões, CRUD, venda concorrente, caixa, mobile, domínio de produção e regras com contas de papéis diferentes.

`npm audit` também deve ser acompanhado em cada atualização: no estado atual há 12 vulnerabilidades transitivas no frontend e 11 moderadas nas Functions. Não foi usado `npm audit fix --force`.
