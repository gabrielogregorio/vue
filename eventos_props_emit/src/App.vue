<template>
  <div class="container">
    <Header />
    <Principal :titulo="titulo" :descricao="descricao"/>

    <div class="itens">
      <div v-for="(produto, indice) in orderProdutos" v-bind:key="indice">
        <Item :produto="produto" @nomeEvento="deleteProduto" @marcarItem="marcarItem"/>
      </div>
    </div><!-- itens -->
 
    <div class="add-item">
      <p v-show="erro != ''">{{ erro }}</p>
      <div class="input-button">
        <input @keyup="cadastrarProduto($event)" class="input" type="text" placeholder="Digite o nome do item" v-model="nomeNovoItem">
        <button class="" @click="cadastrarProduto">Adicionar</button>
      </div><!-- input-button -->
    </div><!-- "add-item -->
    <div class="esticar"></div>

    <Footer />
  </div><!-- container -->
</template>

<script>
import Principal from './components/Principal.vue'
import Item from './components/Item.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import _ from 'lodash';


export default {
  name: 'App',
  data() {
    return {
      titulo: 'Bem vindo ao Megasites',
      descricao: 'Filmes e séries na amazon prime ou netflix, aqui não!',
      maiorId: [],
      nomeNovoItem: '',
      erro: '',
      novoId: '',
      produtos: [
      ]
    }
  },
  components: {
    Principal,
    Item,
    Footer,
    Header
  },

  computed: {
    orderProdutos() {
      // Ordenação com o lodash
      return _.orderBy(this.produtos, ['name'], ['asc']);
    }
  },

  methods: {
    marcarItem($event) {
      // Caminha pelos produtos
      this.produtos = this.produtos.map(produto => {

        // Se o id do item componente clicado for igual
        // ao elemento da lista, altere a propriedade selected
        if (produto.id == $event.id) {
          produto.selected = !produto.selected;
        }

        // Retorna os dados
        return produto;
      })
    },


    deleteProduto($event) {
      // Percorrer pelos ids, para filtrar somente pelos is que não são igual ao
      // id para remover
      this.produtos = this.produtos.filter(produto => produto.id != $event.id )
    },

    cadastrarProduto($event) {
      // Evento de teclado detectado
      if($event.key) {
        // Evento diferente de enter
        if ($event.key != 'Enter'){return;}
      }

      // Novo item é inválido
      if (this.nomeNovoItem.trim() == '' || this.nomeNovoItem.trim().length <= 2) {
        this.erro = 'Nome é muito curto ou inválido!';
        return;
      }

      // Obtem uma lista dos ids
      this.maiorId = this.produtos.map(function(produto) { return produto.id; })

      // Se não tem itens
      if (this.maiorId.length == 0) {
        this.novoId = 0        
      } else { // Tem itens
        // Descubra o maior valor e some +1
        this.novoId = Math.max.apply(Math, this.maiorId) + 1
      }
        
      // Limpeza do erro
      this.erro = '';

      // Adição do novo item no array
      this.produtos.push({
        name: this.nomeNovoItem,
        id: this.novoId,
        selected: false
      })

      // Limpeza do campo de inserção
      this.nomeNovoItem = '';
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #eee;
}

.esticar {
  flex: 1;
}

.itens {
  padding: 30px 0;
}

.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
}

.add-item p {
  color: red;
  font-size: 1rem;
  padding: 10px 0;
}

.input-button {
  max-width: 500px;
  width: 100%;
  display: flex;
}

.input-button input {
  flex: 1;
  padding: 5px;
  margin: 0 10px;
  outline: none;
  border: 1px solid #00119933;
}

.input-button input:focus {
  outline: none;
  border: 1px solid #00119977;
}

.input-button button {
  padding: 10px;
  background: rgb(0, 94, 182);
  cursor: pointer;
  color: white;
  outline: none;
  border: 0;
}

</style>
