import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getcosas} from "../../services/mockServices";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../../storage/cartContext";


function ItemDetailContainer(){
    const[cosas , setcosas] = useState({title : "LOADING..."});

    let params = useParams ();

    const {AddToCart} = useContext(cartContext);

    function handleAddToCart (count){
        AddToCart({...cosas,count: count});
       
    }
    

    useEffect (() =>{
        getcosas(params.Itemid) 
            .then((respuesta)=>{
        setcosas(respuesta);
        })
        .catch((error)=> alert(error));
    }, []);
    
    return(
        <ItemDetail
         onAddToCart={handleAddToCart}
         title={cosas.title}
         Nombre={cosas.Nombre}
         Img={cosas.Img} 
         Detalle={cosas.Detalle}
         Precio={cosas.Precio}
         Categorias={cosas.Categorias}
        />
    );
}
 export default ItemDetailContainer;
