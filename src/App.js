import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImgInicio from './componentes/ImgInicio/ImgInicio';
import Botones from './componentes/Botones/Botones';
import NavBar from './componentes/Navbar/NavBar';
/*import Saludo from './componentes/Itemlistcontainer/ItemsGreeting';*/
import Flex from './componentes/Flex/Flex';
/*import ItemCount from './componentes/contador/ItemCount';*/
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import { Bboxicons } from 'boxicons';
import Routes from './Navegacion/Routes';
import Venta from './Pages/Venta';
import Inicio from './Pages/Inicio';



function App () {
  return(
    <div>
      <div>
       <NavBar />
       
      </div>
      
    </div>  
  )
  
}
 
  export default App;
