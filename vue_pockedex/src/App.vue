<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="is-size-2">Pokedex</h1>
      <input class="input is-rounded" type="text" name="busca" id="busca" v-model="busca">
      <button class="button is-fullwidth is-success" id="buscaBtn">Buscar</button>
      <div v-for="(pokemon) in resultadoBusca" :key="pokemon.url">
        <Pokemon :name="pokemon.name" :url="pokemon.url" :id="pokemon.url"/>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import Pokemon from './components/Pokemon.vue';

export default {
  name: 'App',
  components: {
    Pokemon
  },

  data() {
    return {
      pockemons: [],
      busca: ''
    }
  },
  created() {
    // quando a pagina for carregada
    axios.get ('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').then(res => {
      console.log(res.data.results);
      this.pockemons = res.data.results;
    })
  },

  computed: {
    resultadoBusca() {
      if(this.busca == '') {
        return this.pockemons;
      }
      return this.pockemons.filter(pokemon => pokemon.name == this.busca);
    }
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

#buscaBtn {
  margin: 10px 0;
}
</style>
