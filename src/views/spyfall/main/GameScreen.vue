<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import SpyFall from '@/lib/SpyFall';
  import Timer from './game_screen/Timer.vue';
  import Content from './Content.vue';
  import Action from '@/views/core/Action.vue';

  const router = useRouter();
  const route = useRoute();
  const seed = route.query.seed;
  const player = route.query.player;
  const index = route.query.index;
  const gameNumber = parseInt(route.query.gameNumber || 1);
  const numberOfPlayers = route.query.numberOfPlayers;
  const isHost = index == 0;

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
  <Content>
    <template v-slot:main>
      <div class="screen">
        <div class="top-bar">
          <span class="player">{{ player }}</span>
          <span class="round">#{{ gameNumber }}</span>
        </div>

        <div>
          <div class="location">{{ location }}</div>
          <div class="role">{{ role  }}</div>
        </div>

        <Timer v-if="isHost"></Timer>
      </div>
    </template>

    <template v-slot:actions>
      <Action icon="forward" @click="nextGame" confirm="Go to next round?"></Action>
    </template>
  </Content>
</template>

<style scoped>
  .screen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    background-color: #8e44ad;
    margin-top: -24px;
    margin-left: -24px;
    margin-right: -24px;
    padding: 0.5rem;
  }

  .location {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .role {
    font-size: 1rem;
    text-align: center;
    background-color: #2f3640; 
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
</style>