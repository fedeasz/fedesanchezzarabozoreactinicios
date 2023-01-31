import React from "react";
import { Link } from "react-router-dom";


import Botones from "../Botones/Botones";

function Item (props) {
    const {title, Img, precio,detalle,categorias} = props.item; 
    return(
  
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <img height="220px" src={Img} alt={title}/>
            </div>
            <div>
                <h3>{categorias}</h3>
            </div>
            <div>
                <h3> {precio}</h3>
                <small>{detalle}</small>
           </div>
           <Link to={"/detalles/${id]"}>
               
           </Link>
           <br></br>
           <Botones/>
        </div>
 
    );
}
export default Item;
