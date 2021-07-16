<template>
<div class="form-todo form-group">
  <p>
    <input v-model="name"  placeholder="nome" type="text" name="author" class="form-control" />
  </p>
  <p>
    <textarea v-model="comment" placeholder="Comentário" name="message" class="form-control"></textarea>
  </p>
  <button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
</div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      comment: ''
    }
  },
  methods: {
      addComment() {

      if (this.comment.trim() == '') {
        return;
      }

      // Emite um evento para todos que estiverem ouvindo
      this.$emit('add-todo', {
        name: this.name,
        comment: this.comment
      })

      this.name = '';
      this.comment = '';
    }
  }
}
</script>
