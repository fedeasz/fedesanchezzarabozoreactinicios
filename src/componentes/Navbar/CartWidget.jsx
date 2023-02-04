import React, { useContext} from "react";
import { cartContext } from "../../storage/cartContext";

function CartWidget(){
    const contexto =useContext(cartContext)
     


    return(
        <>  
           <span>carrito</span>
           <span>{contexto.cart.length}</span>
          
        </>
    )
}


export default CartWidget;