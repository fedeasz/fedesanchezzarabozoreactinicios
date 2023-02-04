import React from "react";
import "./ItemCount.css";
import {useState} from 'react';





function ItemCount({onAddtoCart}) {

    const [count, setCount] = useState (0);
    
    function handleAdd () {
        setCount (count + 1);
    }
    function handleSubctrac (){
        setCount (count - 1); 
    }
  return (
    <div className="contador">
      <small>Agregar al Carrito</small>
      <div>
        <button className="btn1" onClick={handleSubctrac}>-</button>
        <span>{count}</span>
        <button className="btn1" onClick={handleAdd}>+</button>
      </div>
      <div>
        <button onClick={()=>onAddtoCart(count)}>Agregar al Carrtio</button>
      </div>
    </div>
  )
}

export default ItemCount

