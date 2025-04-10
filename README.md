# Sistema de Organização de Filmes e Séries

Este projeto tem como objetivo o desenvolvimento de uma aplicação web voltada para cinéfilos e amantes de séries. A plataforma permitirá que os usuários organizem seus filmes e séries assistidos, avaliem com estrelas, escrevam resenhas pessoais e interajam com outros usuários através de curtidas, comentários e amizades. Além disso, o sistema permitirá que os usuários acompanhem o progresso de séries e compartilhem recomendações.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Requisitos Funcionais](#requisitos-funcionais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuições](#contribuições)

## Autores:

## Descrição do Projeto

O consumo de filmes e séries faz parte da rotina de milhões de pessoas ao redor do mundo. Com o aumento da oferta de conteúdo, surge a necessidade de uma plataforma que auxilie os usuários a organizar o que assistem, avaliar as obras, e compartilhar suas opiniões com outras pessoas. A aplicação permitirá que os usuários:

- Criem um perfil pessoal.
- Cadastrem filmes e séries assistidos, com avaliações e resenhas.
- Acompanhem o progresso de séries.
- Interajam com outros usuários por meio de comentários, curtidas e amizades.
- Busquem títulos de filmes e séries por nome com integração a uma API externa.

## Requisitos Funcionais

1. **Cadastro de usuário (RF01)**: O sistema deve permitir que novos usuários se cadastrem informando nome completo, nome de usuário, e-mail, senha e data de nascimento.
2. **Autenticação de usuário (RF02)**: O sistema deve permitir que os usuários façam login com e-mail e senha cadastrados, garantindo acesso seguro ao perfil pessoal.
3. **Edição de perfil (RF03)**: O sistema deve permitir que o usuário edite seu nome, nome de usuário, e-mail e senha a qualquer momento.
4. **Busca de filmes e séries por nome (RF04)**: O sistema deve permitir que o usuário busque filmes e séries digitando o nome no campo de busca, utilizando uma API externa para retornar os resultados.
5. **Adição de conteúdo ao perfil (RF05)**: O sistema deve permitir que o usuário adicione filmes e séries ao seu perfil a partir dos resultados da busca, criando uma postagem com título, ano, status (Assistido, Assistindo, Quero assistir), avaliação (0 a 5 estrelas) e resenha pessoal.
6. **Remoção de conteúdo do perfil (RF06)**: O sistema deve permitir que o usuário remova filmes ou séries do seu perfil a qualquer momento.
7. **Marcação de episódios assistidos (para séries) (RF07)**: O sistema deve permitir que o usuário atualize o progresso de uma série, criando uma postagem específica para isso, onde o usuário indica o episódio em que parou, com a data e o número do episódio.
8. **Avaliação por estrelas (RF08)**: O sistema deve permitir que o usuário atribua uma nota ao conteúdo assistido por meio de um sistema de 0 a 5 estrelas.
9. **Escrita de resenhas pessoais (RF09)**: O sistema deve permitir que o usuário escreva uma resenha textual opcional sobre cada filme ou série adicionada ao seu perfil.
10. **Comentários em resenhas e atualizações de progresso (RF10)**: O sistema deve permitir que os usuários comentem nas resenhas e nas atualizações de progresso feitas por outros usuários.
11. **Curtidas em resenhas e comentários (RF11)**: O sistema deve permitir que os usuários curtam resenhas e comentários publicados por outros usuários.
12. **Adicionar e remover amigos (RF12)**: O sistema deve permitir que os usuários enviem e aceitem solicitações de amizade, podendo também remover amigos a qualquer momento.
13. **Seguir outros usuários (RF13)**: O sistema deve permitir que o usuário siga outros perfis para acompanhar suas resenhas, atividades recentes e listas atualizadas.
14. **Visualização do perfil de outros usuários (RF14)**: O sistema deve permitir que qualquer usuário visualize o perfil público de outro usuário, incluindo sua lista de filmes e séries, resenhas e notas atribuídas.
15. **Conquistas e gamificação (RF15)**: Criar badges ou conquistas (ex: “Maratonou uma temporada em um dia”, “Escreveu 10 resenhas”, “Alcançou 100 curtidas”) para engajar mais os usuários.
16. **Feed de postagens (RF16)**: O sistema deve exibir um feed de postagens no perfil do usuário, onde serão listadas todas as avaliações e atualizações de séries feitas pelo próprio usuário. Essas postagens deverão ser organizadas por data.

## Tecnologias Utilizadas

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: 
- **Banco de Dados**: 
- **API Externa**: 
- **Autenticação**: 
- **Gamificação**: 

## Como Executar o Projeto

Para executar o projeto em sua máquina local, siga os seguintes passos:

### Pré-requisitos

- 

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
