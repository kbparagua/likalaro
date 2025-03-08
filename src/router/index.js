import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Spyfall from '@/views/spyfall/Spyfall.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/spyfall',
      name: 'spyfall',
      component: Spyfall
    },
  ],
})

export default router
