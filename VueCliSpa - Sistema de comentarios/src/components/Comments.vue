<template>
  <div class="container">
    <h1>Comentários</h1>
    <hr />

    <!-- Escutar o evento -->
    <FormToDo v-on:add-todo="addComment" />

    <div class="list-group">
      <p v-if="comments.length <= 0">Sem comentários...</p>
      <!-- loop for -->
      <div v-else class="list-group-item comment" v-for="(comment, index) in allComments" v-bind:key="index">
        <span class="comment__author">Author: <strong>{{ comment.name }}</strong></span>
        <p>{{ comment.message }}</p>
        <div>
          <!-- .prevent é um modificador que muda o comportamento default ao clicar me um link com # (subir a tela)-->
          <a v-on:click.prevent="removeComment(index)" href="#" title="Excluir">Excluir</a>
        </div>
      </div><!-- comment -->
    </div><!-- list-group -->
    <hr />
  </div><!-- container -->
</template>


<script>
import FormToDo from './FormToDo.vue';

export default {
  components: {
    FormToDo
  },
  data() {
    return {
      comments: []
    }
  },
  methods: {
    addComment(comment_event_emit) {
      this.comments.push(comment_event_emit);
      },
      removeComment(index) {
        // Splice, remove da posição no range de 1 para frente. 1 fica nele mesmo
        this.comments.splice(index, 1);
      }
    },
  // Manipula a parte visual
  // Customizar o que vai para a interface!
  // Nada de lógica no template!, VUE 10/10
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment, // Retorna as proprias propriedades
        name: comment.name.trim() == '' ? 'Anônimo' : comment.name // Vamos customizar essa propiedade
      }))
    }
  },

  // Fica ouvindo alterações
  watch: {
    // MESMO NOME DA LISTA DE COMENTARIOS, POREM COMO FUNCAO
    comments(valor) {
      console.log('Alterações para salvar no localstorage!' + valor);
    }
  }
}
</script>
