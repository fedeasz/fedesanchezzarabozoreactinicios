const Productos = [
{
    "id": 1,
    "Nombre": "Miel 100 % pura",
    "Precio": "$900",
    "Stock": 100,
    "Img": "../imagenes/i1.PNG" ,
    "Detalle": "DUY"
  }, {
    "id": 2,
    "Nombre": "Jalea",
    "Precio": "$700",
    "Stock": 185,
    "Img": "../imagenes/i2.jpg",
    "Detalle": "0PWQ3KZ"
  }, {
    "id": 3,
    "Nombre": "Propoleo",
    "Precio": "$600",
    "Stock": 154,
    "Img": "../imagenes/propoleo.jpg",
    "Detalle": "051H0AY"
  },
];




const obtenerProductos = () => {
    return new Promise((resolve, reject) =>{
        console.log("Conectando con Database");

        let error= false;

        setTimeout(()=>{
            if (error)
                reject("Usuario no encontrado");
            else
                resolve(Productos);
        },3000);
    }) ;   
};

export default obtenerProductos;