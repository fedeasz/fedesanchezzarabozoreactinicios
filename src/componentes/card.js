import Botones from "./Botones/Botones";

function Card (props) {



    return(
  
        <div>
           <h3>{props.Nombre}</h3>
           <br></br>
           <img height="220px" src={props.img} alt={props.Nombre}/>
           <h3>{props.precio}</h3>
           <small>{props.detail}</small>
           <br></br>
           <Botones />
        </div>
 
    );
}

export default Card;
