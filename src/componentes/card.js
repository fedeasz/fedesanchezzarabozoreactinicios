function card() {

    const producto = {
        precio: 500,
        nombre: "Miel",
        Descripcion: "100 % pura",
      };


    return( <div>
    <h3>{producto.nombre}</h3>
    <br></br>
    <h3>{producto.precio}</h3>
    <small>{pproducto.descripcion}</small>
    <button>click me</button>
  </div>
    );
}

export default card;