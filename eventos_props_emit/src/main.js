import Vue from 'vue'
import App from './App.vue'
// Importações globais, como o framework de CSS
//import '../node_modules/bulma/css/bulma.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
