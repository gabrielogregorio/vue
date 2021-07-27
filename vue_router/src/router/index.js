import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Galeria from '../views/Galeria.vue';
import Posts from '../views/Posts.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/galeria",
    name: 'Galeria',
    component: Galeria,
    children: [
      {
        path: 'natureza',
        component: About,
        name: 'ImagensNatureza'
      }
    ]
  },
  {
    path: '/posts/:idV',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
