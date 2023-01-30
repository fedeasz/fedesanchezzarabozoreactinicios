import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
/*import Botones from './componentes/Botones/Botones';*/
import NavBar from './componentes/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ItemCount from './componentes/contador/ItemCount';
import ItemListContainer from './componentes/ItemsListContainer/ItemsListContainer';

/*import { Bboxicons } from 'Bboxicons';*/

/*import Venta from './Pages/Venta';
import Inicio from './Pages/Inicio';*/




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
              <Route path="/ORGANICOS" element= {<ItemListContainer/>} />
              <Route path="/INDUSTRIAlIZADOS" element= {<ItemListContainer/>} />
              <Route path="*" element= {<h2>Pagina no encontrada</h2>} />
            </Routes>
        </BrowserRouter>
        </nav> 
      </header>
      
      <div>
        
      </div>
      <div>
        <ItemCount/>
      </div>
      <footer>
        PErritos
      </footer>
    </div>  
  );
}
 
export default App;
