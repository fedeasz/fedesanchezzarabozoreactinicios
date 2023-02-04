import { createContext, useState } from 'react';



/*Crear el contexto*/
export const cartContext = createContext({});

/*inicializar el provider*/

function CartProvider(props){
    const [cart, setCart] = useState([]);


    const test = ( ) => console.log("test");




    function addToCart(item){
        /*let newCart = [...cart]
        newCart.push(item);
        setCart(newCart)*/

        let newCart = cart.map((item)=>item);
        newCart.pushy(item)
        setCart(newCart);
        }
 /*Lo que me provee el context que esta personalizado*/
    return(
        <cartContext.Provider value= {{ cart, test, addToCart}}>
            {/*Renderizamos el componente clidren con lo values */}
            {props.children}
        </cartContext.Provider>
         
    );
}
/*const UserProvider =userContext.Provider*/    


export {CartProvider};


    
