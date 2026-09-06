# Backup e restauração

## Estado atual

O repositório não contém rotina automática de backup nem teste de restauração. O Realtime Database precisa de uma política operacional configurada no Firebase/Google Cloud.

## Procedimento recomendado

1. Exportar o Realtime Database do projeto de homologação ou produção por rotina agendada e com acesso administrativo restrito.
2. Armazenar os arquivos em local separado, criptografado e com retenção definida pelo responsável do produto.
3. Registrar data, projeto, operador e resultado sem incluir dados sensíveis em logs públicos.
4. Restaurar em um projeto separado, nunca diretamente em produção.
5. Validar usuários, empresas, produtos, clientes, vendas e caixas.
6. Comparar totais e amostras com o ambiente de origem.
7. Registrar o teste e só então considerar o backup operacional.

## Bloqueio atual

A frequência, retenção, localização, responsáveis e teste real de restauração ainda precisam ser definidos pelo operador do Firebase. Até isso ocorrer, backup/restauração está **NÃO VALIDADO**.
