const fs= require('fs');
fs.readFile('./prueba.txt', (error, datos)=>{
    if (error){
        console.log('Error al leer el archivo');
    }else{
        console.log(datos.toString());
    }
});
console.log('Final del programa');