<template>
  <div>
    <input type="text" name="email" id="email" placeholder="Digite seu e-mail">
    <input type="text" name="name" id="name" placeholder="Seu nome">
    <button>teste</button>
    <h1>{{parametro}}</h1>
  </div>
</template>


<script>
export default {
  created() {
    //console.log('Parametro para essa página', this.$route.params.idV);
    //this.parametro = this.$route.params.idV;
  },
  data() {
    return {
      parametro: ''
    }
  }
}
</script>
