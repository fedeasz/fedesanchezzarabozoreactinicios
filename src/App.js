
import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
/*import Botones from './componentes/Botones/Botones';*/
import NavBar from './componentes/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './componentes/ItemsListContainer/ItemDetailConteiner';
import NotFound from './Pages/PagNOT';
import { CartProvider } from './storage/cartContext';



function App () {
  function logoutSession (){
    console.log("saliste");
  }
  function logInSession (username){
    alert(`Bienvenido:${username}`);
  }

  return(
    <div className='App'>s
      <header>
        <nav>

          <BrowserRouter>
            <CartProvider >
              <NavBar  onLogin={logInSession} onLogout={logoutSession}/>
                <Routes>               
                  <Route path="/" element= {<ItemListContainer/>} />
                  <Route path="/detalle/:Itemid" element= {<ItemDetailContainer/>} />
                  <Route path="/Categorias/:Categoriasid" element= {<ItemListContainer/>} />
                  <Route path="*" element= {<h2><NotFound/></h2>} />
                </Routes>
            </CartProvider>   
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

/*"/categoria/:categoriaid"*/