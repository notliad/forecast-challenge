# Desafio técnico para Hurb - mini site de previsão do tempo

[[English](README.en.md) | [Português](README.md)]

## Descrição do projeto

Consiste de um mini site onde as informações do tempo e clima serão mostradas divididas entre os dias de hoje, amanhã e depois de amanhã.
As informações de hoje são mais detalhas, mostrando velocidade de vento, humidade e pressão.
Ao abrir a página a localização do usuário será carregada, mostrando as informações locais do tempo.
O usuário poderá visualizar o clima de outras cidades inserindo o nome no input exibido.

## Executando o projeto

- `git clone` (Clonar o projeto do repositório)
- `cd forecast-challenge` (Ir para a pasta do projeto)
- `yarn install` (Instalar as dependências)
- `yarn start` (Executar o projeto)

Para executar o projeto utilizando Docker:

- `git clone`
- `cd forecast-challenge`
- `docker-compose up dev -d` (Para ambiente de desenvolvimento)
- `docker-compose up prod -d` (Para ambiente de produção:)

O ambiente de desenvolvimento está configurado para a porta `3000` e o de produção `8080`

Se existir algum problema na execução de um após o outro, utilize o comando `--build` antes do `-d` para evitar conflito entre os ambientes.

## Features

Além dos requisitos pedidos pelo desafio, ao utilizar o site, notei que algumas melhorias poderiam ser implementadas.

- Ao inserir uma cidade, o input é auto completado pelo estado e país da cidade escolhida, dando um feedback ao usuário que a cidade inserida é a que ele esperava.
- Além das temperaturas, as outras unidades apresentadas também são convertidas para o sistema imperial, mantendo o padrão entre os valores.

## Missing

### Bing

A imagem de fundo é estática, apenas para ilustrar que poderia ter sido implementada, mas o problema enfrentado foi que a API do Bing exige CORS, no entando isso poderia ter sido contornado de duas maneiras:

- Utilizar ferramentas online que fazem essa requisição ao invés do app, mas isso pode inserir alguma falha de segurança, então escolhi não usar esse método.
- Implementar um pequeno backend em por exemplo, NodeJs, que serviria de ponte para essa requisição, mas devido ao escopo do desafio não utilizei esse método.

### Erros de requisição

Apesar de ser obrigatório, o projeto não possui nenhum tratamento de erro visual.

## Desenvolvimento

- O projeto foi criado com o `create-react-app`.
- A estilização foi feita em `styled-components`.
- Os testes englobam somente a renderização de divs pai e divs de carregamento.

A aplicação da fonte Nunito foi escolha pessoal, e decidi também não utilizar a tela inteira verticalmente. Escolhi um visual mais parecido com um widget, devido que as informações são relativamente poucas.

A responsividade foi feita horizaltamente, diminuindo o tamanho dos ícones e fontes.

Mesmo o escopo sendo simples, o projeto foi desenvolvido pensando em sua esacalabilidade, a estrutura das pastas, as importações, os serviços de requisições separados, a componentização. Todos pensando com o propósito de se for necessário adicionar páginas ou features o trabalho será facilitado.
