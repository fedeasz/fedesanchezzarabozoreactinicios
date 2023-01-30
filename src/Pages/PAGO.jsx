

const GenerandoFactura = new Promise(  (resolve) =>{
    console.log("Generando su factura...")
    setTimeout( ()=>{
        resolve( );

    },3000);
});





console.log ("Productos Cargados");

GenerandoFactura.then((respuesta)=>{
    console.log("Facturando...", respuesta)
});
console.log("Factura Generada");