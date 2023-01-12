import "./Nav.css";
function NavBar(props){
    return(
       <header > 
        <nav className= "Nav">
            <ul>
                <li>
                <a href="/" />
                <img src="./imagenes/logo page.jpg"/>
                </li>
                <li>
                <a href="/">PRODUCTOS ORGANICOS</a>
                </li>
                <li>
                <a href="/">PRODUCTOS INDUSTRIALIZADOS</a>
                </li>
            </ul>
            <cartWidget></cartWidget>
            <span>Carrito</span>
        </nav>
       </header> 
    )
}

export default NavBar;