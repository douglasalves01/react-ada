# [Frontend I (React)] Atividades Aula 2

# Atividade 1 - Saudação personalizada

Você, como desenvolvedor experiente na `**ReactComponents**`, foi encarregado de aprimorar a experiência do usuário em nossa aplicação React. Queremos proporcionar aos usuários uma saudação personalizada que leve em consideração o horário do dia e exiba informações específicas sobre eles.

**Tarefa:**

1. **Variáveis do Usuário:**
    - Crie duas variáveis: **`nome`** e `**curso**`. Atribua um nome fictício e o curso à sua escolha.
2. **Função de Saudação Dinâmica:**
    - Crie uma função chamada **`Saudacao`** que determine a saudação com base no horário do dia. Utilize condicionais para definir a saudação como "Bom dia", "Boa tarde" ou "Boa noite".
3. **JSX com Expressões JavaScript:**
    - Utilize JSX para criar um componente que exiba uma mensagem de boas-vindas dinâmica.
    - Inclua o resultado da `**saudacao**` e as variáveis **`nome`** e **`curso`** na mensagem.
4. **Frase com o nome do curso**
    - Adicione um parágrafo adicional com o nome do curso que a pessoa está realizando.
5. **Estilização (Opcional):**
    - Se desejar, adicione um pouco de estilização ao seu componente para torná-lo visualmente atraente.

# Atividade 2 - Criando um card de produto

Você foi contratado para desenvolver um componente de "Card de Produto" para um site de comércio eletrônico. O design do card já está pronto, mas precisa ser transformado em um componente React reutilizável que pode exibir diferentes produtos em toda a plataforma.

![cardProduto.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/c312315b-0d70-4eba-b85f-7d2a652db182/cardProduto.png)

**Tarefa:**

1. **Crie um novo componente chamado `ProductCard`.**
    - Este componente deve receber as seguintes props:
        - `productImage` (string): URL da imagem do produto
        - **`productName`** (string): Nome do produto.
        - **`productDescription`** (string): Descrição breve do produto.
        - **`productPrice`** (number): Preço do produto.
2. **Implemente o JSX:**
    - Utilize JSX para estruturar o conteúdo do card.
    - Exiba o nome, descrição e preço do produto dentro do card.
3. **Estilização:**
    - Adicione estilos ao componente para garantir uma apresentação atraente.
    - Os estilos devem ser flexíveis o suficiente para lidar com diferentes tamanhos de descrição ou nomes de produtos.

# Atividade 3 - Evoluindo o que já estava ótimo

A equipe de desenvolvimento do projeto de comércio eletrônico ficou impressionada com o seu componente **`ProductCard`**, mas agora eles solicitaram a implementação de PropTypes para garantir uma integração mais segura e um código mais robusto.

**Tarefa:**

1. **Instalação de PropTypes:**
    - Instale a biblioteca **`prop-types`** no seu projeto, caso ainda não esteja instalada.
2. **Importação de PropTypes:**
    - Importe a biblioteca **`prop-types`** no seu arquivo **`ProductCard.js`**.
3. **Implementação de PropTypes:**
    - Utilize PropTypes para definir os tipos esperados das props (**`productName`**, **`productDescription`**, **`productPrice`**) no seu componente **`ProductCard`**.
4. **Validação:**
    - Adicione a validação das props para garantir que apenas os tipos corretos sejam passados ao componente.
5. **Teste:**
    - Teste seu componente, passando propositalmente props de tipos incorretos para verificar se as mensagens de erro de PropTypes são geradas corretamente.

# Atividade [Entrega] - We 💚 movie 🎥

Você está envolvido em um projeto para criar um catálogo de filmes online. Seu objetivo é desenvolver uma aplicação React que exiba informações detalhadas sobre diferentes filmes. Além disso, a equipe de qualidade solicita que você utilize PropTypes para validar as propriedades dos seus componentes.

**Tarefas:**

1. **Componente de Filme (`MovieCard`):**
    - Crie um componente **`MovieCard`** que represente um card de filme.
    - O componente deve receber as seguintes props:
        - **`id`** (number): ID único do filme.
        - **`title`** (string): Título do filme.
        - **`genre`** (string): Gênero do filme.
        - **`releaseYear`** (number): Ano de lançamento do filme.
        - **`rating`** (number): Classificação do filme.
    - Utilize PropTypes para validar as props e garantir que apenas os tipos corretos sejam aceitos.
2. **Componente de Lista de Filmes (`MovieList`):**
    - Crie um componente **`MovieList`** que represente a lista de filmes na aplicação.
    - O componente deve receber a seguinte prop:
        - **`movies`** (array): Uma lista de objetos representando os filmes.
    - Utilize PropTypes para validar que **`movies`** é uma array e que cada item na array tem a estrutura correta (de acordo com as props do **`MovieCard`**).
3. **Integração no Aplicativo Principal:**
    - Crie um aplicativo principal (**`App.js`**) que utilize os componentes **`MovieCard`** e **`MovieList`**.
    - Passe props fictícias para os componentes para simular dados de filmes.
4. **Estilização:**
    - Adicione estilos aos seus componentes para garantir uma apresentação visual atraente.
    - Certifique-se de que a aplicação seja responsiva e funcione bem em diferentes dispositivos.
5. **Bônus (Opcional):**
    - Adicione funcionalidades extras, como pesquisa por título, filtro por gênero ou uma funcionalidade de favoritos.
