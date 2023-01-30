import React from "react";
import { Link } from "react-router-dom";


import Botones from "../Botones/Botones";

function Item (props) {
    const {title, Img, precio,detail} = props.item; 
    return(
  
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <img height="220px" src={Img} alt={title}/>
            </div>
            <div>
                <h3> {precio}</h3>
                <small>{detail}</small>
           </div>
           <Link to="/Detalles/id">
               
           </Link>
           <br></br>
           <Botones/>
        </div>
 
    );
}
export default Item;
