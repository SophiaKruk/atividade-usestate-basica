import { useState } from "react";


function App() {
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);


  function aumentar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }


  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }


  return (
    <div className="container">
      <h1>Meu Contador</h1>


      <p>Valor atual: {contador}</p>


      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Voltar um</button>


      <hr />


      <h2>Missão 2 - Mostrar e esconder um aviso</h2>


      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>


      {visivel && (
        <p className="aviso">
          O aviso está visível.
        </p>
      )}


      <hr />


      <h2>Missão 3 - Saudação com campo de texto</h2>


      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />


      <p>Olá, {nome || "visitante"}!</p>


      <hr />


      <h2>Desafio Final - Cartão de boas-vindas</h2>


      <div className="cartao">
        <h3>Cartão de boas-vindas</h3>


        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />


        <button
          onClick={() => setMostrarSaudacao(!mostrarSaudacao)}
        >
          {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
        </button>


        {mostrarSaudacao && (
          <p>
            Olá, {nome || "visitante"}!
          </p>
        )}
      </div>
    </div>
  );
}


export default App;
