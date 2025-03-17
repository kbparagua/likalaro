<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import SpyFall from '@/lib/SpyFall';
  import Timer from './game_screen/Timer.vue';

  const router = useRouter();
  const route = useRoute();
  const seed = route.query.seed;
  const player = route.query.player;
  const index = route.query.index;
  const gameNumber = parseInt(route.query.gameNumber || 1);
  const numberOfPlayers = route.query.numberOfPlayers;

  const spyfall = new SpyFall({ seed, numberOfPlayers });
  const location = spyfall.location(index);
  const role = spyfall.role(index);

  function nextGame() {
    const nextSeed = spyfall.nextSeed();
    router.push({
      path: '/spyfall/game',
      query: {
        seed: nextSeed,
        gameNumber: gameNumber + 1,
        numberOfPlayers,
        index,
        player
      }
    });
  }
</script>

<template>
  <div>
    <h1>{{ player }}</h1>
    <div>Location: {{ location }}</div>
    <div>Role: {{ role  }}</div>
    <div>Game: #{{ gameNumber }}</div>

    <Timer></Timer>
    <a href="#nextGame" @click.prevent="nextGame">Next Game</a>
  </div>
</template>