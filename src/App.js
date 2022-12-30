import logo from './logo.svg';
import './App.css';
import card from "./componentes/card"

function App() {
  const title = "Bienvenidos a nuestro E-comerce";
  const title2 = "Catalogo"
  


  function comprado() {
    alert("Usted ha adquirido el producto")
  };

  const miEstilo = {
    backgroundColor: "orange",
    margin: "30px",
    padding:"50px",
    textAlign: "center",
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {title}
            <br></br>
            {title2}
            <card />
        </header>
      <div/>
      <div style={miEstilo} className='catalogo'></div>
      <button onClick={comprado}>COMPRAR</button>
      </div>
    </div>
  );
}

export default App;
