import React, { useState } from "react";
import ItemCount from "../contador/ItemCount";





function ItemDetail ({ Nombre, Img, Detalle, Precio, Categorias,id}){
    const [countIncart, setCountInCart]= useState(0);

    function handleAddToCart (count) {
        setCountInCart(count);
    }
    
    return(
        <div>
            <div>
            <img height="220px" src={Img} alt={Nombre}/>
            </div>
            <div>
                <h1>{Nombre}</h1>
                <h4> {Precio}</h4>
                <h4>{Detalle}</h4>
                <h4>{Categorias}</h4>              
            </div>
            {countIncart === 0 ?(
                <ItemCount onAddToCart={handleAddToCart}/>    
            ) : (
            <a href="/Cart">
                <button>Ir al Carrito</button>
            </a>
            )}
        </div>
    )
}



export default ItemDetail;