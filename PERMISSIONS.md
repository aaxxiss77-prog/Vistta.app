# Permissões

## Modelo atual

- `admin`: financeiro, contas, usuários, fornecedores e operações administrativas.
- `vendedor`: PDV, clientes, produtos, categorias, orçamentos e ordens permitidas pelas Rules.

A autorização é aplicada nas Realtime Database Rules e nas Cloud Functions. A sidebar apenas reflete o papel e não é a fronteira de segurança.

## Controles server-side

- Isolamento por `users/{uid}/empresaId`.
- Leitura de `contas` e `usuarios` restrita a admin.
- Lançamento de caixa restrito a admin.
- Fechamento de caixa restrito ao operador ou admin.
- Venda usa estoque, preço e custo do banco no backend.

## Limitação

Ainda não existe matriz granular por ação (`visualizar`, `criar`, `editar`, `excluir`, `aprovar`, `exportar`, `imprimir`). Isso deve ser implementado apenas quando os papéis e o modelo comercial forem definidos.
