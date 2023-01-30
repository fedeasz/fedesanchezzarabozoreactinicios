import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";
import { Link } from "react-router-dom";









function NavBar (props){
    const Links = [
        {title: "ORGANICOS", url:"/ORGANICOS"},
        {title: "INDUSTRIALIZADOS", url:"/INDUSTRIALIZADOS"},
    ]



    return (
        <nav className="navbar" >
            <div className="logo">
                <img src="./imagenes/logo page.jpg" alt=""/>
            </div>
            <ul>
                <NavItem href="/"></NavItem>
                <Link to="/ORGANICOS">ORGNICOS</Link>
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