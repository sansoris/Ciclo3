<template>
    <div id= "app2">
        <h1>{{titulo2}} </h1>
        <!-- "El ejemplo de operacion" -->
        <h1>{{2+2}}</h1>
        <!-- Mostrando el array -->
        <h1>{{frutas[1]}} </h1>
        <!-- mostrando una lista se requiere el nombre de la llave (key) -->
        <div>
            <ul>
                <li v-for="fruta in frutas" v-bind:key="fruta">
                       {{fruta}} 
                </li>
            </ul>
        </div>
        <div>
            <button type="button" v-on:click="saludar" >
                CLICK AQUÍ
            </button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            titulo2:"Este es el título 2 de componente prueba.vue",
            // Ejemplo de array
            frutas:[
                "Manzanas", 
                "Pera",
                "Naranja",
                "Uva"
            ]
        }
    },
    methods:{
        saludar(){
            alert("Hola cómo estas?");
        }
    }
}
</script>
<style>

</style>