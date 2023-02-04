import { createContext } from 'react';



/*Crear el contexto*/
export const userContext = createContext({user: "Anonimo"});

/*inicializar el provider*/

function UserProvider(props){
 /*Lo que me provee el context que esta personalizado*/
    return(
        <userContext.Provider value={{user : "Federico"}}>
            {props.children}
            {/*Renderizamos el componente clidren con lo values */}
        </userContext.Provider>
         
    )
}
/*const UserProvider =userContext.Provider*/    


export {UserProvider}

