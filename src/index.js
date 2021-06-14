// ************************************************
// index.js
// ************************************************

// adição de recursos necessários ao funcionamento da app
// ********************************************************
// criar o objeto React (cor preta) que extende de 'react'
import React from 'react';
// criar o objeto ReactDOM (cor preta) que extende de 'react-dom'
import ReactDOM from 'react-dom';
// incluir o ficheiro css
import './index.css';
// criar o objeto App (cor preta) que extende de './App'
import App from './App';
import reportWebVitals from './reportWebVitals';


// toda a app React precisa de 'renderizar' um conteúdo para o browser
ReactDOM.render(
  // aqui, o código da linha 8 só é preciso por causa desta instrução seguinte
  // a opção StrictMode só funciona em modo Developer
  // mostra os erros detalhados no ecrã
  <React.StrictMode>
    {/* daqui para cima estávamos a escrever javaScript.
      Por isso, as linhas de comentário são  iniciadas por // ou por /*
      Mas, aqui, estamos a escrever em JSX - JavaScript and XML
      Logo, as linhas de comentário são incluídas em {} com os símbolos de /*
  */}
    <App /> {/* <----   código a ser executado e enviado para o Browser
                        tecnicamente, chamar-lhe-emos de 'componente'
                         */}
  </React.StrictMode>,
  document.getElementById('root') // <--- onde o Render irá atuar
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
