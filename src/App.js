import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Bienvenidos a nuestro E-comerce";
  const title2 = "Catalogo";
  const producto = {
    precio: 500,
    nombre: "Miel",
    Descripcion: "100 % pura",
  };

  const cardproducto = (
    <div>
      <h3>{producto.nombre}</h3>
      <br></br>
      <h3>{producto.precio}</h3>
    </div>
  );
  function comprado(){
    alert("Usted ha adquirido el producto")
  }

  const miEstilo = {
    backgroundColor: "orange",
    margin: "30px",
    padding:"50px",
    textAlign: "center",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {title}
          <br></br>
          {title2}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        {cardproducto}
      </header>
      <div style={miEstilo} className='catalogo'>{cardproducto}</div>
      <button onClick={comprado}>COMPRAR</button>
    </div>
  );
}

export default App;
