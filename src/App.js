import React from 'react';
import logo from './logo.svg';
import './App.css';
/*import Card from "./componentes/Card";*/
import Botones from './componentes/Botones/Botones';
import NavBar from './componentes/Navbar/NavBar';
/*import Saludo from './componentes/Itemlistcontainer/ItemsGreeting';*/
import Flex from './componentes/Flex/Flex';
/*import ItemCount from './componentes/contador/ItemCount';*/
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import { Bboxicons } from 'boxicons';
import Titulos from './componentes/Titulos/Titulos';


  function App() {
    
    
    

    function comprado() {
      alert("Usted ha adquirido el producto")
    };

  

    return (

    
          <div className="App">
              <NavBar/>
              <Titulos/>
              
              <ItemsListContainer/>
          <div/>
      </div>
        
       
         
      
      
    );
  }

  export default App;
