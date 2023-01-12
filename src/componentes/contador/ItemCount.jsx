import "./ItemCount.css";
import {useState} from 'react';

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
        Agregar al carrito
        <button disabled={ count=== 0} onClick={handleSubctrac}>-</button>
        <p>{count}</p>
        <button disabled={ count ===props.stock} onClick={handleAdd}>+</button>
    </div>
  )
}

export default ItemCount

