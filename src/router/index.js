import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Spyfall from '@/views/spyfall/Main.vue'
import SpyfallNewGameScreen from '@/views/spyfall/main/NewGameScreen.vue';
import SpyfallLobby from '@/views/spyfall/main/Lobby.vue';

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
      component: Spyfall,
      children: [
        {
          path: 'new',
          component: SpyfallNewGameScreen
        },
        {
          path: 'lobby',
          component: SpyfallLobby
        }
      ]
    },
  ],
})

export default router
