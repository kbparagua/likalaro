<script setup>

import { useRouter } from 'vue-router';
import PlayerField from "./new_game_screen/PlayerField.vue";

const router = useRouter();
const players = [];
const setPlayer = (index, name) => {
  players[index] = name;
}

function create() {
  const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  router.push({ path: 'lobby', query: { players, seed } });
}

</script>

<template>
  <div>Spyfall</div>
  <PlayerField label="Host" @change="(v) => setPlayer(0, v)"></PlayerField>
  <PlayerField label="Player 2" @change="(v) => setPlayer(1, v)"></PlayerField>
  <PlayerField label="Player 3" @change="(v) => setPlayer(2, v)"></PlayerField>
  <PlayerField label="Player 4" @change="(v) => setPlayer(3, v)"></PlayerField>
  <button @click="create">Create</button>
</template>