import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card";
import Botones from './componentes/Botones/Botones';
import NavBar from './componentes/Navbar/NavBar';

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
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            {title}
            <br></br>
            {title2}
            <NavBar/>
        </header>
      <div/>
      <div style={miEstilo} className='catalogo'>
            <Card img="./imagenes/i1.PNG" Nombre="MIEL 100% PURA" precio="500" detail="organica" />
            <Card img="./imagenes/i2.jpg"Nombre="JALEA" precio={700} detail="organica" />
            <Card img="./imagenes/propoleo.jpg" Nombre="PROPOLEO" precio="500" detail="organica" />
      </div>
      <button onClick={comprado}>COMPRAR</button>
      <Botones />
      </div>
    </div>
  );
}

export default App;
