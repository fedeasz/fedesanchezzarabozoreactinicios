const Productos = [
{
    "id": 1,
    "Nombre": "Miel 100 % pura",
    "Precio": "$900",
    "Stock": 100,
    "Img": "../imagenes/i1.PNG" ,
    "Detalle": "Envase Plastico por 1KG",
    "Categorias":"Organico"
  }, { 
    "id": 2,
    "Nombre": "Jalea",
    "Precio": "$700",
    "Stock": 185,
    "Img": "../imagenes/i2.jpg",
    "Detalle": "Envase vidrio por 1KG",
    "Categorias":"Organico"
  }, {
    "id": 3,
    "Nombre": "Propoleo",
    "Precio": "$600",
    "Stock": 154,
    "Img": "../imagenes/propoleo.jpg",
    "Detalle": "Bolsa Plastica por 1KG",
    "Categorias":"Organico"
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
        },2000);
    }) ;   
};

const getcosas = (idURL) => {
  return new Promise((resolve , reject)=> {
    const reqItem = Productos.find((Item)=>
    {
      return Item.id === parseInt(idURL);
    });

    setTimeout(()=> {
      if(reqItem) resolve(reqItem);
      else reject("No se encontro el producto");
      },2000);
    });
  }

  const getcosasByCategorias = (CategoriasURL) => {
    return new Promise((resolve, reject) => {
      let reqItems=Productos.filter((Item)=>Item.Categorias === CategoriasURL);
      setTimeout(() => {
        resolve(reqItems);
      }, 2000);

    });
  } ;

export default obtenerProductos;

export { getcosas, getcosasByCategorias};