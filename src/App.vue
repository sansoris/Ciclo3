<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- Titulo 1 del componenente de app -->
    <h1>{{tituloApp}}</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div v-if= "mostrarNombre" >
        <h2>{{usuario.nombre}} </h2>
      </div>
      <div v-else>
        <h2> No se puede mostrar el nombre </h2>
      </div>
      <h2>{{usuario.apellido}} </h2>
      <h2>{{usuario.edad}} </h2>
    <prueba/>


  </div>
 
</template>

<script>
  import prueba from './components/Prueba.vue'

export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  // también se pueden trabajar los marcadores y directivas d
  // Se pueden tener data, como función que retorna lo que se desee entre llaves
  
  data(){
    return{
        tituloApp:" Este es el título 1 del componente App.vue",
        usuario:{
            nombre: "María",
            apellido: "Rodríguez",
            edad: 45
        }, 
        mostrarNombre: false
    }
  },
  components:{
    prueba
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
