# Checklist de homologação

Executar em projeto Firebase separado da produção, com pelo menos uma conta admin, uma conta vendedor e duas empresas:

- [ ] Cadastro e configuração inicial.
- [ ] Login, logout, refresh e sessão expirada.
- [ ] Recuperação e redefinição de senha.
- [ ] Google login, cancelamento e domínio autorizado.
- [ ] Admin acessa financeiro, contas e usuários.
- [ ] Vendedor não lê contas/usuários nem executa lançamentos de caixa.
- [ ] Empresa A não acessa dados da empresa B.
- [ ] Produto, cliente, orçamento e OS: criar, editar, excluir conforme papel.
- [ ] Venda com estoque suficiente.
- [ ] Venda concorrente com estoque igual a 1.
- [ ] Preço adulterado no payload é ignorado pelo backend.
- [ ] Caixa aberto, lançamento autorizado e fechamento.
- [ ] Regras publicadas e testadas no Emulator Suite.
- [ ] Backup restaurado em projeto separado.
- [ ] Logs sem senha, token ou dados pessoais desnecessários.
- [ ] Teste mobile e desktop dos fluxos críticos.
