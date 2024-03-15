import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './service/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  async function handleSearch() {
    if(input === '') {
      alert("Preencha algum CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch{
      alert('Ops erro ao buscar')
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress} //busca com a tecla enter
        />

        <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          {Object.keys(cep.logradouro).length > 0 && (
            <div className="endereco">
              <span>{cep.logradouro}</span>
              {Object.keys(cep.complemento).length > 0 && (
                <span>Complemento: {cep.complemento}</span>
              )}
              <span>{cep.bairro}</span>
            </div>
          )}
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
      
    </div>
  );
}

export default App;
