import React from "react";
import "./Nav.css";
function NavBar(props){
    return (
        <nav >
            <a href="#"></a>
            <div className="logo">
                <img src="./imagenes/logo page.jpg" alt=""/>
            </div>
            <ul>
                <li>
                    <a href="/">INICIO</a>
                </li>
                <li>
                    <a href="/">PRODUCTOS ORGANICOS</a>
                </li>
                <li>
                    <a href="/">PRODUCTOS INDUSTRIALIZADOS</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name= "cart"></box-icon>
                <span className="item__Total">0</span>
            </div>
        </nav>
        
    ); 
}

export default NavBar;

