// http modulo de navegación y servidor web
// protocolo básico para el funcionamiento de la internet 
// comunicación desde local hacia el servidor

const http= require ('http');
const servidor = http.createServer ((peticion, respuesta) =>{
    respuesta.writeHead(200,{'Content-Type': 'text/html'});
    respuesta.write('<!doctype html><html><head></head><body><h1>Sitio en desarrollo 2 </h1></body></html>');
    respuesta.end();
    })
servidor.listen(8081, function(){console.log('El servidor esta listo en el puerto '+this.address().port)});
