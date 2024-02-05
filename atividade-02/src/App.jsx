import Card from "./components/Card";
import notebook from "./assets/images/notebook.jpg";
function App() {
  return (
    <div>
      <Card
        cardImage={notebook}
        cardName="Notebook"
        cardDescription="Para uso profissional"
        cardPrice={4000.0}
      />
    </div>
  );
}

export default App;
("");
