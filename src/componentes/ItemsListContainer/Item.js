import React from "react";
import { Form, Link } from "react-router-dom";
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
                <h1>{Detalle}</h1>
            </div>

            <Link to={`/detalle/${id}`}>
               <button className="btn">VER MAS</button>
            </Link>
            <br></br>
        </div>    

    );
}
export default Item;
