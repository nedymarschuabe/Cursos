import './App.css';
import Outralista from './components/Outralista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <Outralista itens={meusItens} />
      <Outralista itens={[]} />
    </div>
  );
}

export default App;
