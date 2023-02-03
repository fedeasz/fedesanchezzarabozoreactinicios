import React from "react";
import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";
import "../Botones/Botones.css";




function Item (props) {
    const { Nombre, Img, Precio,Detalle,Categorias, id} = props.item; 
    return(
  
        <div>
            <div>
                <img height="220px" src={Img} alt={Nombre}/>
            </div>
            <div>
                <h3>{Nombre}</h3>
            </div>

            <Link to={`/detalle/${id}`}>
               <Botones className="btn">VER MAS</Botones>
            </Link>
            <br></br>
        </div>    

    );
}
export default Item;
