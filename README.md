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
- [ ] ID1: O aluno configurou corretamente o ambiente de desenvolvimento e criou a API utilizando NestJS, com rotas e controladores que seguem a arquitetura modular.
- [ ] ID2: O aluno aplicou boas práticas de organização da lógica de negócios, garantindo que os services contenham a lógica de negócio e sejam chamados pelos controladores, separando responsabilidades corretamente.
- [ ] ID3: O aluno utilizou providers e configurou adequadamente a injeção de dependência no NestJS, garantindo uma arquitetura modular e escalável.
- [ ] ID4: O aluno demonstrou a habilidade de criar e manipular rotas HTTP, manipulando parâmetros de rota, query e body, lidando corretamente com requisições e respostas.
- [ ] ID5: O aluno aplicou boas práticas de tratamento de erros, utilizando filtros globais e personalizando as mensagens de erro para garantir respostas claras e consistentes.
- [ ] ID6: O aluno criou classes DTO (Data Transfer Objects) para garantir a validação e consistência dos dados em diferentes endpoints, utilizando pipes para validar entradas de dados.
- [ ] ID7: O aluno aplicou corretamente pipes de validação no NestJS, verificando entradas inválidas e assegurando a integridade dos dados transmitidos

RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM.

- [ ] ID8: O aluno modelou corretamente os dados da aplicação, definindo entidades, suas relações e campos necessários, refletidos em um Diagrama de Entidade-Relacionamento (ERD).
- [ ] ID9: O aluno configurou e conectou a API a um banco de dados relacional (PostgreSQL, MySQL, etc.) utilizando Prisma ou TypeORM.
- [ ] ID10: O aluno criou e aplicou migrações de banco de dados para garantir a consistência dos dados entre desenvolvimento e produção.
- [ ] ID11: O aluno implementou corretamente as operações CRUD (Create, Read, Update, Delete) para pelo menos uma entidade no projeto, utilizando NestJS.

RA3 - Realizar testes automatizados para garantir a qualidade da API.

- [ ] ID12: O aluno implementou testes automatizados (unitários ou de integração) utilizando Jest, validando funcionalidades críticas da API.
- [ ] ID13: O aluno garantiu a cobertura de testes para, pelo menos, as principais rotas e serviços da API, incluindo operações CRUD.

RA4 - Gerar a documentação da API e realizar o deploy em um ambiente de produção.

- [ ] ID14: O aluno integrou corretamente o Swagger à API, gerando a documentação completa e interativa dos endpoints, parâmetros e respostas da API, com exemplos de requisições e respostas.
- [ ] ID15: O aluno realizou o deploy da API em uma plataforma de hospedagem na nuvem (ex.: Render.com, Heroku, Vercel, etc.), garantindo que a API estivesse acessível publicamente.
- [ ] ID16: O aluno garantiu que a API funcionasse corretamente no ambiente de produção, incluindo a documentação Swagger e o banco de dados.
- [ ] ID17: O aluno realizou a configuração correta de variáveis de ambiente usando o ConfigModule do NestJS.
- [ ] ID18: O aluno implementou corretamente o versionamento de APIs REST no NestJS, assegurando que diferentes versões da API pudessem coexistir.

RA5 - Implementar autenticação, autorização e segurança em APIs utilizando JWT, Guards, Middleware e Interceptadores.

- [ ] ID19: O aluno configurou a autenticação na API utilizando JWT (JSON Web Tokens).
- [ ] ID20: O aluno implementou controle de acesso baseado em roles e níveis de permissão, utilizando Guards para verificar permissões em rotas específicas.
- [ ] ID21: O aluno configurou e utilizou middleware para manipular requisições antes que elas chegassem aos controladores, realizando tarefas como autenticação, logging ou tratamento de CORS.
- [ ] ID22: O aluno implementou interceptadores para realizar logging ou modificar as respostas antes de enviá-las ao cliente.
