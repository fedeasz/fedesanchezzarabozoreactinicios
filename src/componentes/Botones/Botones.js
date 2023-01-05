import "./Botones.css"








function Botones (props){

    function handleClick(evt){
        alert("Se agrego al carrito correctamente");
        
    }

    return(
        <button onClick= {handleClick} className ="btn">{props.text}COMPRAR</button>
    )

}


export default Botones;
