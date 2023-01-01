function NavBar(props){
    return(
       <header> 
        <nav>
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
            <span>Carrto</span>
        </nav>
       </header> 
    )
}

export default NavBar;