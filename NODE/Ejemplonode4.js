// modulo de archivos  txt
// parametros: ruta, nombre del archivo, lo que se va a escribir
// el salto de linea al final de cada elemento
// funcion anonima
// node es asíncrona
// => simbolo de function anonima en js actual


const fs= require('fs');
fs.writeFile('./prueba.txt','Cartagena\nBogotá\nPreira\n', error=>{
    if (error){
        console.log('error');
    }else{
        console.log('Archivo creado');
    }
});
console.log('Final del programa');