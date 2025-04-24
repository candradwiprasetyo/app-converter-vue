import { ref } from "vue";

export const code = [
  ref(`<p v-if="true">Teks ini muncul dan dirender di halaman</p>`),
  ref(`<p>Teks ini muncul dan dirender di halaman</p>`),
  ref(
    `<p v-if="false">Teks ini tidak muncul dan tidak dirender di halaman</p>`
  ),
  ref(`Tidak ada output sama sekali karena elemen <p> tidak dirender`),
  ref(`<p v-show="true">Teks ini muncul dan dirender di halaman</p>`),
  ref(`<p style="">Teks ini muncul dan dirender di halaman</p>`),
  ref(
    `<p v-show="false">Teks ini tidak muncul tetapi tetap dirender di halaman</p>`
  ),
  ref(
    `<p style="display: none;">Teks ini tidak muncul tetapi tetap dirender di halaman</p>`
  ),
  ref(`<template>
  <div>
    <h1>{{ content }}</h1>
  </div>
</template>`),
  ref(`<script>
  export default {
    data() {
      return {
        content: "Salam kenal saya Candra"
      }
    }
  }
</script>`),
  ref(`<style scoped>
  h1 {
    color: green;
  }
</style>`),
  ref(`import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router
})
`),
  ref(`{ path: '/about', component: About }
`),
];
