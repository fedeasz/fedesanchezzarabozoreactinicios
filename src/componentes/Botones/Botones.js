import React from "react";
import "./Botones.css";








function Botones (props){

    //React.useState()
    let [colorState, setColorState]= React.useState ("black") 

    const styleButton = {
        padding: props.paggding,
        backgroundColor: colorState,
    };

    function handleClick(evt){
        setColorState = "red";
        alert("Se agrego al carrito correctamente");
    }

    return(
        <button onClick= {handleClick} styleButton={styleButton} className ="btn">{props.children}COMPRAR</button>
    );

}


export default Botones;
