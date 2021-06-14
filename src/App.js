// ***********************************************
// app.js
// ***********************************************



import logo from './logo.svg';
import './App.css';



/**
 * isto é um COMPONENTE
 * neste caso particular, é designado 'componente simples' pq é uma função
 * os componentes são formas de distribuir o código por diferentes 'objetos'
 * algo que conhecemos muito bem de POO
 * @returns 
 */
function App() {
  // se o componente for do tipo FUNÇÃO obrigatoriamente tem um RETURN
  return (
    // só devolve UM elemento
    <div className="App">
      {/* no JSX não se pode usar 'class' para referenciar uma classe de CSS
          pois esse nome é reservado
          Por isso, temos de usar 'className', e depois o React faz a transformação */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* o acesso a variáveis, objetos, etc é SEMPRE feito entre {}
            Equivalente ao que fazemos em Razor, com @NomeVar */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// um componente só é acessível se for EXPORTADO
export default App;
