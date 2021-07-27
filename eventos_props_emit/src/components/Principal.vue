<template>
  <div>
    <h1>{{titulo}}</h1>
    <h2>{{descricao}}</h2>
    <!-- two way data binding -->
    <input type="descricao" v-model="descricao">
  </div>
</template>

<script>
export default {
  data() { return {} },

  props: {
    titulo: String,
    descricao: String
  }
}
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
}

h1, h2 {
  width: 100%;
  text-align: center;
  font-weight: 700;
} 

h1 {
  font-size: 2.2rem;
  padding: 10px 0;
}

h2 {
  font-size:1.6rem;
  padding: 10px 0;
}

input {
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: transparent;
  padding: 5px;
  font-weight: 400;
}

input:focus {
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
}
</style>