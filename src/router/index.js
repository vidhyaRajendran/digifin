import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Health from '../components/Health.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/health',
    name: 'Health',
    component: Health,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router