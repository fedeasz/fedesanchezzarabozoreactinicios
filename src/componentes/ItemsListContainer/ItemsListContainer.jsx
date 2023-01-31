import { useState , useEffect } from "react";
import obtenerProductos from "../../services/mockServices";
import { getcosas } from "../../services/mockServices";
import { getcosasBycategorias } from "react-router-dom";
import Flex from "../Flex/Flex";
import Item from "./Item.js";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";

 

function ItemListContainer() {
    const [Productos,setProductos] = useState([]);
    let{categoriasid} =useParams ();

    /*console.log("viendo itemslist");*/

    useEffect(() => { 
        if(!categoriasid) {
        obtenerProductos().then((respuesta)=> {
             setProductos (respuesta);  
        }).catch((error) => alert (error));
        }
        else{
            getcosasBycategorias(categoriasid).then((respuesta)=> {  
                setProductos(respuesta);
            });
        }
    }, [categoriasid]); 
          
        return(
            <Flex>
                {Productos.map((itemIterado)=>{
                    return ( <Item id={itemIterado.id} key={itemIterado.id}  item= {itemIterado}/>
                    );
                })}     
            </Flex>

    );
};
export default ItemListContainer;





       