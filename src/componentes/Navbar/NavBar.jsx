import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";
import { Link } from "react-router-dom";









function NavBar (props){
    



    return (
        <nav className="navbar" >
            <div className="logo">
            <NavItem to="/"><img src="../imagenes/logo page.jpg" alt=""/></NavItem>
            </div>
            <ul>
                
                <Link to="/detalle">ORGANICOS</Link>
                <Link to="/INDUSTRIALIZADOS">INDUSTRIALIZADOS</Link>
                <Link to="/Cart">Cart</Link>
                <span className="item__Total">0</span>
            </ul>
            
           
            
                
            
        </nav>
        
    ); 
}

export default NavBar;

/*<BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Inicio/>} />
                    <Route path="/Productos Oraganicos" element= {<Venta/>} />
                    <Route path="/Productos Industrializados" element= {<Venta/>} />
                </Routes>
            </BrowserRouter>*/