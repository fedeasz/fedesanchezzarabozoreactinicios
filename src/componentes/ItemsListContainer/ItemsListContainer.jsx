import { useState , useEffect } from "react";
import obtenerProductos from "../../services/mockServices";
import Flex from "../Flex/Flex";
import Item from "./Item.js";
import "./ItemsListContainer.css";
 

function ItemListContainer() {
    const [Productos,setProductos] = useState([]);

    /*console.log("viendo itemslist");*/

    useEffect(() => { 
        obtenerProductos().then((respuesta)=> {
             setProductos (respuesta);  
        }).catch(error => alert (error))
        },[]);
          
        return(
            <Flex>
                {Productos.map((itemIterado)=>{
                    return ( <Item id={itemIterado.id} key={itemIterado.id}  item= {itemIterado}/>
                    );
                })}
               
            </Flex>

    );
}
export default ItemListContainer;





       