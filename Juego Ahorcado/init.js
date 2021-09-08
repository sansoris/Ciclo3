// para definir variables let o var que es mas moderno
// crear array de palabras

let palabras = ["computador", "software", "javascript","hardware"];

// escoger palabra al azar del array de palabras entre 0  y 3 
// al multiplicarlo por longitud del array

let aleatorio = Math.floor(Math.random()*palabras.length);

// document.write(aleatorio);

// palabra variable incognito para asignarle una palabra del array al azar
let palabraincognita = palabras[aleatorio];

// Colocar las lineas conforme a la cantidad de letras que tenga la palabra
let letrasincognitas = [];

// Se genera con un for con tres componentes

for(let i = 0; i<palabraincognita.length;i++){
    letrasincognitas[i] = "_";
}

// Ciclo del juego a. terminar con las letras de la palabra
// o se equivoque un numero de veces
// se coloca un contador de letras que va disminuyendo con jugadas
//  alert permite tomar una ventana pequeña para mensaje sencillo
// join va uniendo los caracteres con el elemento deseado
// con lo que se muestra el progreso del juego con ventana emergente

let cantidadletras = palabraincognita.length;
let intentos = 0;
while(cantidadletras>0 && intentos <5){
alert(letrasincognitas.join("  "));
// solicitar a usuario solicitar letra con input (prompt)

let letraingresada = prompt("Adivina la palabra o haz clcik en cancelar para finalizar")
if (letraingresada == null){
// el juego termina
    break;
}
else if (letraingresada.length !==1){
alert ("por favor digite solo una letra")
}else {
    for(i=0; i<palabraincognita.length; i++){
        if(palabraincognita[i]==letraingresada){
            letrasincognitas[i]= letraingresada
            cantidadletras --;
        }
        intentos ++;
}

}
}
if (cantidadletras ==0){
    alert(letrasincognitas.join(" "))
    alert ("ganaste");
}else{
    alert("Te esperamos en otra ocasión");
}