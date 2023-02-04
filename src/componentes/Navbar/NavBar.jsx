import { useContext } from "react";
import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";
import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";   
import { cartContext } from "../../storage/cartContext";
import CartWidget from "./CartWidget";


function NavBar (props) {
    const context =useContext(cartContext);
    
    
    context.test();

    function handleSubmit(evt){
        evt.preventDefault();
        let user = evt.target.elements[0].value;
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
                <Link to="/Cart">
                    <CartWidget/>
                </Link>
                
                <Botones onClick={props.onLogout}>Log Out</Botones>
                <form onSubmit={handleSubmit}>
                    Iniciar Sesion
                    <input name="user"></input>
                </form>
            </ul>
            
           
            
                
            
        </nav>
        
    ); 
}

export default NavBar;

