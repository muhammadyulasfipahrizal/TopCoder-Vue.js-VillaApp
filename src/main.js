import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import VillaScreen from './components/VillaScreen.vue'
import DetailScreen from './components/DetailScreen.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: VillaScreen },
        { path: '/detail', component: DetailScreen },
    ]
  })

createApp(App).use(router).mount('#app')
