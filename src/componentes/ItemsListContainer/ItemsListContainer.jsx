import Card from "../Card";
import Flex from "../Flex/Flex";
import {useState, useEffect } from "react";

function ItemListContainer(){
    return(
        <Flex>
            <Card img="./imagenes/i1.PNG" Nombre="MIEL 100% PURA" precio="500" detail="organica" />
            <Card img="./imagenes/i2.jpg"Nombre="JALEA" precio={700} detail="organica" />
            <Card img="./imagenes/propoleo.jpg" Nombre="PROPOLEO" precio="500" detail="organica" />
      </Flex>
    )
}
export default ItemListContainer;



/*function Saludo (props){


return(
    <div>
    <h1>¡¡Bienvenido a nuesto E-commerce Oficial!!</h1>
    </div>
);


}



export default Saludo;*/