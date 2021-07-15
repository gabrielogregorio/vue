

<template>
 <!--
  w-1/2 => ocupar metade do conteudo disponível
  mx-auto = centralizar no eixo horizontal
  my-20 => margin de 20 no eixo vertical
  text-3xl = Aumentar Fonte
  font-semibold => font-semibold
  text-blue-500 => cor
  mb-5 => Margin botton
 -->
  <div class="w-1/2 mx-auto my-20">

  <button class="bg-red-500 p-3 text-white" v-on:click="carregarLista()">
    ReloadArticles
  </button>

    <h1 class="text-3xl font-semibold text-blue-500">{{tituloBlog}}</h1>

    <article v-for="article in listaArtigos" v-bind:key="article" class="my-10 text-gray-600">
      <h2 class="text-5xl font-semibold mb-5">{{article.title}}</h2>
      <p class="mb-5">{{article.text}}</p>
      <p class="text-blue-700">Ler mais</p>
    </article>
  </div>
</template>

<script>

import axios from 'axios';


  export default {

    data() {
      return {
        listaArtigos: [],
        tituloBlog: "Meu blog!"
      }
    },

    created() {
      this.carregarLista();
    },

    methods: {
      carregarLista() {
          this.listaArtigos = [
            {
              "title":"Google é multado em R$ 3 bi por não negociar pagamento de notícia na França",
              "text": "Todos os países da UE tinham o prazo até o meio de 2021 para se adequar. O Google afirmou que iria pagar para que notícias selecionadas de ..."
            },
            {
              "title": "Serviço do Google separa joio do trigo para leitores de ...",
              "text": "Serviço do Google separa joio do trigo para leitores de notícias. Feito por jornalistas profissionais, o Destaques já tem mais de 45 veículos de ..."
            },
            {
              "title": "Google Camera 8.3 é lançada com novo design baseado no ...",
              "text": "Dessa forma, se você quiser testar a nova versão do aplicativo, terá que instalar o novo Android 12 Beta 3 em um celular Pixel do Google, pois o ..."
            }
        ]
      }
    }

  }
</script>


<style>

</style>
