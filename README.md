# QQTweet
QQTweet - Tweeter da Quero-Quero

## Resumo
- Projeto de avaliação de candidato para vaga de desenvolvedor da area Mercantil da Quero-Quero;
- Este projeto tem por finalidade avaliar seus conhecimentos e desenvoltura em desenvolvimento de aplicações com tecnologias Web;
- Nao existem respostas certas: implemente as soluções da forma que julgar melhor dentro dos requisitos e especificações;

## A proposta

A fim de integrar de forma dinâmica seus colaboradores, a Quero-Quero busca implementar uma versão _simplificada_ do Twitter, o _QQ Tweet_.

Sendo assim, a aplicação deve conter:

- Area de login, que permita um usuario _logar_ no sistema com seu _email e senha_ (esta deve ser a tela de entrada da aplicação, e unica tela de usuarios nao logados)
- Visão princpipal *por usuario*, onde deve exibir os _tweets_ de cada OUTRO usuário que seja _seguido_ (esta deve ser a tela principal do usuario logado)
- Na visao principal do usuário, deve haver uma caixa de pesquisa, onde seja possivel pesquisar outros usuários
- Ao pesquisar outros usuarios, deve haver um botao para que seja possivel _seguir_ as publicações desse usuario
- Na visão principal do usuario, deve existir uma caixa com um botao em que seja possivel ao usuario postar o seu _tweet_, de forma que ele fique visivel aos outros usuarios.
- Este _tweet_ deve ser _limitado a 140 caracteres alfanumericos_.
- Para reforçar a marca, deve ser exibido um logo (a sua escolha) em todas as telas da aplicação
- Em questão de layout, a empresa julga satisfatorio qualquer coisa similar do exemplo mais conhecido desse tipo de aplicação: o proprio [Twitter](http://twitter.com) (lembre-se: nao precisa ser igual, mas quanto mais proximo, melhor)

## Questoes tecnicas
- A aplicação deve ser constituida de 2 partes: front-end e back-end
- O backend deve ser desenvolvido em python ou nodejs
- O front-end deve ser desenvolvido em Angular (v5+) ou React
- Nao existe restrição de banco de dados, mas independente da engine de banco de dados utilizada, ela deve conter NO MINIMO as seguintes entidades: ```usuario```, ```tweet``` e ```seguidores``` (apesar do nome da entidade poder ser alterado)
- O cliente nao gosta de aplicações que "pisquem" ao mudar de tela, portanto, deve ser utilizado o modelo "Single Page Application"
- A resposta deve ser enviada em forma de [PR](https://help.github.com/en/articles/about-pull-requests) neste repositório
- Para que possamos ver a evolução do projeto, faça ```commits``` e ```pushes``` frequentes

## Lembretes e Dicas
- O avaliador nao tem como adivinhar como rodar seu projeto, ou instalar qualquer dependencia que você tenha definido, portanto, nao esqueça de definir o arquivo de gestao de dependencias da tecnologia utilizada (npm ou pip/pipenv)
- Se a complexidade do projeto se expandir alem de um simples ```npm install && npm run```, talvez seja necessario escrever as instruções em um ```INSTALL.md```
- Não esqueça que o "todo" tem tanta importancia quanto "detalhe", e que o avaliador irá levar em consideração ambos.
- Tenha calma, reflita sobre suas decisões, e se qualquer solução pareca complexa de explicar ou implementar, nao esqueça de documentar!

Boa  avaliação!