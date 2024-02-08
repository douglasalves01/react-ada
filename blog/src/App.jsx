import CommentList from "./components/CommentList";

const App = () => {
  const comments = [
    { author: "João", content: "Ótimo post!" },
    { author: "Maria", content: "Adorei ler isso." },
    { author: "Pedro", content: "Muito informativo." },
  ];

  return (
    <div className="app">
      <h1>Minha Postagem</h1>
      <p>Aqui está o conteúdo da minha postagem...</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
