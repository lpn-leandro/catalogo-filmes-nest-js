## Título ou Nome da Aplicação/API: 
Catalogo de Filmes

## Identificação/Autor: 
Leandro Pires Nunes

## Descrição do Projeto: 
Aplicação para listagem de filmes para a assistir e assistidos.

## Link para a API em Produção: 
URL para acessar a API publicada em uma plataforma de hospedagem na nuvem.

## Instruções de Execução: 
passos detalhados para configurar e executar a API localmente

## Instalação: 
Passos básicos para instalar as dependências.

## Pré-requisitos: 
Indicar versões específicas de Node.js, NPM ou outras ferramentas necessárias para rodar o projeto.

## Execução: 
Comandos para rodar a API localmente.

## Configuração do Banco de Dados: 
Orientações para configurar o banco de dados.

## Variáveis de Ambiente: 
Instruções sobre variáveis de ambiente necessárias (incluindo exemplo de arquivo .env).

## Diagrama de Entidade-Relacionamento (ERD): 
imagem ou link para o diagrama que mostra as entidades e relações no banco de dados.

## Documentação Swagger: 
link para acessar a documentação dos endpoints gerada pelo Swagger.

## Checklist de Funcionalidades: 
uma lista de funcionalidades marcadas como concluídas (ou não) durante o desenvolvimento.

## Checklist

RA1 - Projetar e desenvolver uma API funcional utilizando o framework NestJS.
- [x] ID1: O aluno configurou corretamente o ambiente de desenvolvimento e criou a API utilizando NestJS, com rotas e controladores que seguem a arquitetura modular.
- [x] ID2: O aluno aplicou boas práticas de organização da lógica de negócios, garantindo que os services contenham a lógica de negócio e sejam chamados pelos controladores, separando responsabilidades corretamente.
- [x] ID3: O aluno utilizou providers e configurou adequadamente a injeção de dependência no NestJS, garantindo uma arquitetura modular e escalável.
- [x] ID4: O aluno demonstrou a habilidade de criar e manipular rotas HTTP, manipulando parâmetros de rota, query e body, lidando corretamente com requisições e respostas.
- [x] ID5: O aluno aplicou boas práticas de tratamento de erros, utilizando filtros globais e personalizando as mensagens de erro para garantir respostas claras e consistentes.
- [x] ID6: O aluno criou classes DTO (Data Transfer Objects) para garantir a validação e consistência dos dados em diferentes endpoints, utilizando pipes para validar entradas de dados.
- [x] ID7: O aluno aplicou corretamente pipes de validação no NestJS, verificando entradas inválidas e assegurando a integridade dos dados transmitidos

RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM.
- [ ] ID8: O aluno modelou corretamente os dados da aplicação, definindo entidades, suas relações e campos necessários, refletidos em um Diagrama de Entidade-Relacionamento (ERD).
- [ ] ID9: O aluno configurou e conectou a API a um banco de dados relacional (PostgreSQL, MySQL, etc.) utilizando Prisma ou TypeORM.
- [ ] ID10: O aluno criou e aplicou migrações de banco de dados para garantir a consistência dos dados entre desenvolvimento e produção.
- [ ] ID11: O aluno implementou corretamente as operações CRUD (Create, Read, Update, Delete) para pelo menos uma entidade no projeto, utilizando NestJS.