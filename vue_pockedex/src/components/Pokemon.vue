<template>
  <div id="pokemon">
    <div class="card">
      <div class="card-image">
        <figure>
          <img :src="currentImg" alt="">
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{name | funcUppercase}}</p>
            <p class="subtitle is-6">{{pockemon.type}}</p>
          </div>
        </div>

        <div class="content">
          <button @click="mudarSprite" class="button is-medium is-fullwidth">Trocar </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    created() {
      axios.get(this.url).then(res => {
        this.pockemon.type = res.data.types[0].type.name;
        this.pockemon.front = res.data.sprites.front_default;
        this.pockemon.back = res.data.sprites.back_default;
        this.currentImg = this.pockemon.front;
      })
    },
    methods: {
      mudarSprite() {
        this.isFront = !this.isFront;

        if(this.isFront) {
          this.currentImg = this.pockemon.front;
        } else {
          this.currentImg = this.pockemon.back;
        }
      }
    },
    data() {
      return {
        isFront: true,
        currentImg: '',
        pockemon: {
          type: '',
          front: '',
          back: ''
        }
      }
    },
    props: {
      id: Number,
      name: String,
      url: String
    },
    filters: {
      funcUppercase(value) {
        return value[0].toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style scoped>
  #pokemon {
    margin: 5px 0;
  }
</style>
