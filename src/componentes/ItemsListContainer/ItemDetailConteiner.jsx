import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getcosas} from "../../services/mockServices";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(){
    const[cosas , setcosas] = useState({title : "LOADING..."});

    let params = useParams ();

    useEffect( () =>{
        getcosas(params.itemid)
            .then((respuesta)=>{
        setcosas(respuesta);
        })
        .catch((error)=> alert(error));
    },[]);
    
    return(
        <ItemDetail
        title={cosas.title}
        img={cosas.img}
        detalle={cosas.detalle}
        precio={cosas.precio} />
    );
}
 export default ItemDetailContainer;
