import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card";
import Botones from './componentes/Botones/Botones';
import NavBar from './componentes/Navbar/NavBar';
/*import Saludo from './componentes/Itemlistcontainer/ItemsGreeting';*/
import Flex from './componentes/Flex/Flex';
import ItemCount from './componentes/contador/ItemCount';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';


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
        <header className="App-header" >
            <NavBar/>
            {title}
            <br></br>
            {title2}
            <Card />
        </header>
      <div/>
    </div>
      <ItemsListContainer/>
      <Botones/>
      <ItemCount stock={150}/> 
      <button>Agregar al Carrito</button>   
      <button onClick={comprado}>FINALIZAR COMPRAR</button>
  </div>
    
  );
}

export default App;
