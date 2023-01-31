import React from "react";
import ItemCount from "../contador/ItemCount";


function ItemDetail ({ title, img, detalle, precio, categorias}){
    
    return(
        <div>
            <div>
                <img src="" alt="">{img}</img>
            </div>
            <div>
                <h1>{title}</h1>
                <h4>$ {precio}</h4>
                <p>{detalle}</p>
                <p>{categorias}</p>
            </div>
            <ItemCount/>
        </div>
    )
}



export default ItemDetail;