import React from "react";
import "./Botones.css";


export default function Botones (props){

    /*React.useState()*/
    const [colorState, setColorState]= React.useState ("black")


    return(
        <button onClick= {props.onclick}  className ="btn">{props.children}</button>
        
    );

}

    



    