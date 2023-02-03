import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getcosas} from "../../services/mockServices";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(){
    const[cosas , setcosas] = useState({Title : "LOADING..."});

    let params = useParams ();

    useEffect( () =>{
        getcosas(params.Itemid)
            .then((respuesta)=>{
        setcosas(respuesta);
        })
        .catch((error)=> alert(error));
    },[]);
    
    return(
        <ItemDetail
        title={cosas.Nombre}
        img={cosas.Img} 
        detalle={cosas.Detalle}
        precio={cosas.Precio}
        />
    );
}
 export default ItemDetailContainer;
