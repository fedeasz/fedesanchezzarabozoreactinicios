import React from "react";
import "./Nav.css";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Inicio from "../../Pages/Inicio";
import Venta from "../../Pages/Venta";







function NavBar(props){
    return (
        <nav >
            <div className="logo">
                <img src="./imagenes/logo page.jpg" alt=""/>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Inicio/>} />
                    <Route path="/Productos Oraganicos" element= {<Venta/>} />
                    <Route path="/Productos Oraganicos" element= {<Venta/>} />
                   


                </Routes>
            </BrowserRouter>
           
            <div className="cart">
                <box-icon name= "cart"></box-icon>
                <span className="item__Total">0</span>
            </div>
        </nav>
        
    ); 
}

export default NavBar;

