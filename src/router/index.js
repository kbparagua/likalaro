import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Spyfall from '@/views/spyfall/Main.vue'
import SpyfallNewGameScreen from '@/views/spyfall/main/NewGameScreen.vue';
import SpyfallSetTimer from '@/views/spyfall/main/SetTimer.vue';
import SpyfallLobby from '@/views/spyfall/main/Lobby.vue';
import SpyfallGameScreen from '@/views/spyfall/main/GameScreen.vue';

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
          path: 'set_timer',
          component: SpyfallSetTimer
        },
        {
          path: 'lobby',
          component: SpyfallLobby
        },
        {
          path: 'game',
          component: SpyfallGameScreen
        }
      ]
    },
  ],
})

export default router
