import { useState , useEffect } from "react";
import obtenerProductos from "../../services/mockServices";
import { getcosasByCategorias }from "../../services/mockServices";
import Flex from "../Flex/Flex";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

 

function ItemListContainer () {
    const [Productos,setProductos] = useState([]);
    let{Categoriasid} =useParams ();

    /*console.log("viendo itemslist");*/

    useEffect(() => { 
        if(!Categoriasid) {
        obtenerProductos().then((respuesta)=> {
             setProductos (respuesta);  
        }).catch((error) => alert (error));
        }
        else{
            getcosasByCategorias(Categoriasid).then((respuesta)=> {  
                setProductos(respuesta);
            });
        }
    }, [Categoriasid]); 
    
          
        return(
            <Flex>
               <ItemList Productos={Productos}/>
            </Flex>

    );
};
export default ItemListContainer;





       