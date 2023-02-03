import React from "react";
import Item from "./Item";



function ItemList (props) {
    
    

    return(
    <>
    {props.Productos.map((itemIterado)=>
        
        {
        return ( <Item id={itemIterado.id} key={itemIterado.id}  item= {itemIterado}/>
        );
    })} 
   
    
     </>)}

    
export default ItemList;
