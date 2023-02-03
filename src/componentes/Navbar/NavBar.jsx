import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";
import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";









function NavBar (props){
    function handleSubmit(evt){
        evt.preventDefault();
        let user = evt.target.element[0].value;
        props.onLogin(user);
    }
 
   
    return (
        <nav className="navbar" >
            <div className="logo">
            <NavItem to="/"><img src="../imagenes/logo page.jpg" alt=""/></NavItem>
            </div>
            <ul>
                
                <Link to="/detalle">ORGANICOS</Link>
                <Link to="/INDUSTRIALIZADOS">INDUSTRIALIZADOS</Link>
                <Link to="/Cart">Cart
                    <span>carrito</span>
                </Link>
                
                <Botones onClick={props.onLogout}>Log Out </Botones>
                <form onSubmit={handleSubmit}>
                    Iniciar Sesion
                    <input name="user" />
                </form>
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