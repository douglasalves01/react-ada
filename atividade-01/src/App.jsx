import Saudacao from "./components/Saudacao";
function App() {
  const nome = "Douglas";
  const curso = "Engenharia de Software";
  return (
    <>
      <Saudacao nome={nome} curso={curso}></Saudacao>
    </>
  );
}

export default App;
