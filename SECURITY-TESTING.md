# Teste de segurança

## Validado por inspeção e build

- Frontend não decide sozinho a autorização.
- Regras isolam dados pela empresa do usuário.
- Collections administrativas têm leitura restrita.
- Functions exigem autenticação e validam empresa.
- Preço/custo enviados pelo cliente não são fonte de verdade.
- Venda usa transação de estoque e chave de idempotência.
- Senhas não são gravadas em banco, storage local ou logs identificados.

## Não validado

- Teste ativo com duas empresas no Firebase Emulator ou homologação.
- Tentativas reais de adulterar `empresaId`.
- Concorrência com dois usuários e estoque unitário.
- Regras publicadas no projeto Firebase de produção.
- Abuse/rate limiting em Auth e Callable Functions.

Esses cenários são bloqueadores de homologação, não devem ser marcados como aprovados apenas pelo build.
