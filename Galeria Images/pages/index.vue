<!-- Please remove this file from your project -->
<template>
  <main class="bg-gray-100">
    <section class="mx-auto bg-gradient-to-r from-blue-800 to-green-400 ">
      <h1 class="text-center text-gray-100 text-2xl py-10">Galeria</h1>
    </section>

    <section class="container mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:p-8">
      <div v-for="item in lista" v-bind:key="item.id" class="flex items-center justify-center w-full h-100;">
        <img :src="item.img"/>
      </div>
    </section>
  </main>
</template>


<script>
export default {
  data() {
    return {
      lista: []
    }
  },

  created() {
    this.carregarItens();
  },
  methods: {
    carregarItens() {
      this.lista = [
        {img: 'images/img1.webp', id: 1},
        {img: 'images/img2.webp', id: 2},
        {img: 'images/img3.webp', id: 3},
        {img: 'images/img4.webp', id: 4},
        {img: 'images/img5.webp', id: 5},
        {img: 'images/img6.webp', id: 6},
        {img: 'images/img7.webp', id: 7},
        {img: 'images/img8.webp', id: 8},
        {img: 'images/img9.webp', id: 9},
        {img: 'images/img10.webp', id: 10},
        {img: 'images/img11.webp', id: 11},
        {img: 'images/img12.webp', id: 12},
        {img: 'images/img13.webp', id: 13},
        {img: 'images/img14.webp', id: 14},
        {img: 'images/img15.webp', id: 15},
        {img: 'images/img16.webp', id: 16},
        {img: 'images/img17.webp', id: 17},
        {img: 'images/img18.webp', id: 18},
        {img: 'images/img19.webp', id: 19},
        {img: 'images/img20.webp', id: 20},
        {img: 'images/img21.webp', id: 21},
        {img: 'images/img22.webp', id: 22},
        {img: 'images/img23.webp', id: 23}
      ]
    }
  }

}
</script>
