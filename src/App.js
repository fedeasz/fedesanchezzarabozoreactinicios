import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
/*import Botones from './componentes/Botones/Botones';*/
import NavBar from './componentes/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ItemCount from './componentes/contador/ItemCount';
import ItemListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './componentes/ItemsListContainer/ItemDetailConteiner';
import NotFound from './Pages/PagNOT';


function App () {
 

  return(
    <div className='App'>
      <header>
        <nav>
        <BrowserRouter>  
          <NavBar />
          <h1 className='h1'>Bienvenidos a  Honey Bee</h1>
          <div className='mosaico'>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>
            <img  src="../imagenes/logo page.jpg" alt="LOGO"/>

          </div>
            <Routes>
              <Route path="/" element= {<ItemListContainer/>} />
              <Route path="/detalle/:itemid" element= {<ItemDetailContainer/>} />
              <Route path="PI" element= {<ItemListContainer/>} />
              <Route path="*" element= {<h2><NotFound/></h2>} />
            </Routes>
        </BrowserRouter>
        </nav> 
      </header>
      
      <div>
        
      </div>
      <div>
       
      </div>
      <footer>
        PErritos
      </footer>
    </div>  
  );
}
 
export default App;
/*"/Detalle/:itemid"
"/categoria/:categoriaid"*/