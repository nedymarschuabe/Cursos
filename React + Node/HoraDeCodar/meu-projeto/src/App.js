import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {
  const name = 'Matheus'


  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Olá, {name}</p>
      <HelloWorld/>
      <Frase/>
    </div>
  );
}

export default App;
