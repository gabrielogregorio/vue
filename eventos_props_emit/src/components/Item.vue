<template>
  <div>
    <!-- Adição dinamica de classes -->
    <div :class="{'selected':produto.selected, 'item':true}">
      <!-- filter para processar o nome -->
      <h4 @click="mudarCor($event, produto.id)">{{ produto.name | processarNome }}</h4>
      <button class="button" @click="emitirEvento($event, produto.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() { return {} },
  filters: {
    processarNome(value) {
      return value.toUpperCase();
    }
  },
  props: {
    produto: Object
  },
  methods: {
    mudarCor($event, id) {
      this.$emit('marcarItem', {id})
    },

    emitirEvento($event, id) {
      // Da para emitir até métodos desse componente para o componente pai
      this.$emit("nomeEvento", {component:this, id });
    }
  }
}
</script>

<style scoped>

div {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
}

.item {
  max-width: 500px;
  width: 100%;
  display: flex;
}

.item h4 {
  flex: 1;
  cursor: pointer;
  padding: 5px;
}

.item .button {
  background: transparent;
  border: 0;
  outline: none;
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #ff3030;
}

.selected {
  background: #ffdd00;
}
</style>