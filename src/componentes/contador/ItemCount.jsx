import React from "react";
import "./ItemCount.css";
import {useState} from 'react';



/*function ItemCount({texto,BotonSuma, manejarClic}){
  return(
    <button className={BotonSuma ? "boton-click" : "boton-restar"} 
      onClick={manejarClic}>
      {texto}
    </button>
  )
}*/

function ItemCount(props) {

    const [count, setCount] = useState (0);
    
    function handleAdd () {
        setCount (count + 1);
    }
    function handleSubctrac (){
        setCount (count - 1); 
    }
  return (
    <div className="contador">
        <button disabled={ count ===props.stock} onClick={handleAdd}>+</button>
        <p>{count}</p>
        <button disabled={ count=== 0} onClick={handleSubctrac}>-</button>
    </div>
  )
}

export default ItemCount

