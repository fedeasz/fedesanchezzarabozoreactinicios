import React from "react";
import ItemCount from "../contador/ItemCount";
import { Form, Link } from "react-router-dom";




function ItemDetail ({ Nombre, Img, Detalle, Precio, Categorias,id}){
    
    return(
        <div>
            <div>
            <img height="220px" src={Img} alt={Nombre}/>
            </div>
            <div>
                <h1>{Nombre}</h1>
                <h4>$ {Precio}</h4>
                <h4>{Detalle}</h4>
                <h4>{Categorias}</h4>

                
            </div>
            
            <ItemCount/>
            id={id}
        </div>
    )
}



export default ItemDetail;