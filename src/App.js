import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card";
import Botones from './componentes/Botones/Botones';
import NavBar from './componentes/Navbar/NavBar';
import Saludo from './componentes/Itemlistcontainer/ItemsGreeting';
import Flex from './componentes/Flex/Flex';


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
            <Saludo />
            <Card />
        </header>
      <div/>
    </div>
      <Flex>
            <Card img="./imagenes/i1.PNG" Nombre="MIEL 100% PURA" precio="500" detail="organica" />
            <Card img="./imagenes/i2.jpg"Nombre="JALEA" precio={700} detail="organica" />
            <Card img="./imagenes/propoleo.jpg" Nombre="PROPOLEO" precio="500" detail="organica" />
      </Flex>
      
      <button onClick={comprado}>FINALIZAR COMPRAR</button>
  </div>
    
  );
}

export default App;
