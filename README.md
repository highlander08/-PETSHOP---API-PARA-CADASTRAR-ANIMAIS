# API GraphQL de Pets com NestJS

Neste projeto, eu demonstro como construir uma API GraphQL utilizando **NestJS**, com integração de banco de dados para gerenciar dados de **Pets** e **Donos**. A API inclui a criação de tipos GraphQL, consultas, mutações, validação e a implementação de relacionamento entre **Pet** e **Owner**.

## Tópicos Abordados

### 1. **Gerar o Módulo de Pets**
A primeira coisa que fiz foi criar o módulo **Pets** utilizando o NestJS CLI. Isso me ajudou a organizar toda a lógica de negócios relacionada aos pets na API.

### 2. **Code First vs Schema First**
- **Code First**: Eu optei pelo modelo **Code First**, onde os tipos GraphQL são definidos diretamente no código. Isso facilitou a integração com a lógica de negócios.
- **Schema First**: Caso fosse necessário, poderia usar o modelo **Schema First**, onde o schema GraphQL é definido antes de implementarmos a lógica, criando o arquivo `.graphql`.

### 3. **Importação do Módulo GraphQL**
Para integrar o GraphQL à minha aplicação NestJS, eu configurei e importei o módulo **GraphQL**. Esse passo é essencial para que a API GraphQL funcione corretamente.

### 4. **Criando o Tipo de Objeto Pet**
Eu criei o tipo de objeto **Pet** no código. Esse tipo descreve como os dados de um pet devem ser estruturados e retornados pela API.

### 5. **Escrevendo a Primeira Consulta no Resolver**
A partir disso, escrevi meu primeiro resolver, responsável por processar a consulta GraphQL e retornar os dados de pets de acordo com a solicitação.

### 6. **Testando a Nova Consulta**
Depois de implementar a consulta no resolver, realizei os testes para garantir que a consulta estivesse funcionando corretamente e retornasse as informações dos pets como esperado.

---

## PARTE II: Integração com Banco de Dados

### 7. **Entidade Pet no Banco de Dados**
Criei a entidade **Pet** no banco de dados usando o TypeORM. Isso me permitiu mapear os dados de um pet na base de dados relacional.

### 8. **Atualizando o PetsService para Utilizar o Banco de Dados**
Modifiquei o **PetsService** para que ele utilizasse o banco de dados, utilizando o TypeORM para manipular as entidades de **Pet** e realizar operações de CRUD (criar, ler, atualizar e deletar) de forma persistente.

### 9. **Implementação de createPet**
Implementei a funcionalidade de criação de um novo pet no banco de dados. Isso envolve receber os dados de entrada, validar as informações e persistir os dados no banco de dados.

### 10. **Escrevendo um Tipo de Entrada (Input Type)**
Criei um **Input Type** para estruturar os dados que serão enviados pelo cliente para criar um novo pet. Esse tipo é essencial para garantir que os dados estejam no formato correto.

---

## PARTE III: Mutações

### 11. **Configuração de Validação**
Configurei a validação de entrada para garantir que os dados fornecidos sejam válidos antes de serem salvos no banco de dados. Para isso, utilizei a biblioteca **class-validator**.

### 12. **Implementando a Consulta findOne**
Implementei a consulta **findOne** para buscar um único pet no banco de dados com base no seu **ID**. Agora, é possível buscar informações detalhadas de um pet específico.

### 13. **Como Gerar Automaticamente Todo o Boilerplate**
Aprendi como automatizar a geração de código básico usando o NestJS CLI. Isso me ajudou a acelerar o desenvolvimento de resolvers, entidades e serviços, economizando tempo e esforço.

### 14. **Entidade Owner no Banco de Dados**
Criei a entidade **Owner** no banco de dados para mapear as informações do dono de cada pet. Isso foi fundamental para o relacionamento entre **Pet** e **Owner**.

### 15. **Implementando o Relacionamento Pet/Owner**
Implementei o relacionamento entre **Pet** e **Owner**, garantindo que cada pet tenha um dono associado. Isso também permite realizar consultas para obter dados relacionados.

### 16. **Capacidade de Adicionar Informações do Dono Junto com a Consulta do Pet**
Modifiquei a consulta de **Pet** para incluir as informações do **Owner**. Agora é possível obter os dados completos do pet e seu dono em uma única consulta.

### 17. **Implementando a Consulta para Obter o Dono do Pet**
Por fim, implementei uma consulta específica para retornar as informações sobre o **dono** de um pet, usando o ID do pet para buscar os dados do dono.

---

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/highlander08/-PETSHOP---API-PARA-CADASTRAR-ANIMAIS.git

2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   
3. Instale as dependências:
   ```bash
   npm install

4. Execute a aplicação:
   ```bash
   npm run start:dev

Testando a API: 

```endpoint
http://localhost:3000/graphql

```graphql
query {
  pets {
    name
    id
    owner {
      name
    }
  }
}






