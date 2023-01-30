import React from "react";
import "./Botones.css";


function Botones (props){

    /*React.useState()*/
    let [colorState, setColorState]= React.useState ("black")

    

    function handleClick(evt){
        setColorState = "red";
        alert("Se agrego al carrito correctamente");
    }

    return(
        <button onClick= {handleClick}  className ="btn">{props.children}VER MAS</button>
        
    );

}

    


export default Botones;
