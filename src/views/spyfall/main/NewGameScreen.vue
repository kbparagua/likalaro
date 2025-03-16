<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import PlayerField from "./new_game_screen/PlayerField.vue";

const router = useRouter();
const players = reactive([
  { name: '' },
  { name: '' },
  { name: '' }
]);

function buildLabel(playerIndex) {
  if (playerIndex == 0) return 'Host';
  return `Player ${playerIndex + 1}`;
}

function setPlayer(index, name) {
  players[index] = name;
}

function create() {
  const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  router.push({ path: 'lobby', query: { players, seed } });
}
</script>

<template>
  <div>Spyfall</div>
  <template v-for="(player, i) in players">
    <PlayerField :label="buildLabel(i)" @change="(value) => setPlayer(i, value)"></PlayerField>
  </template>
  <button @click="create">Create</button>
</template>