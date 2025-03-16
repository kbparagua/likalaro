<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { MIN_PLAYERS, MAX_PLAYERS } from '@/lib/SpyFall';
import PlayerField from "./new_game_screen/PlayerField.vue";

const router = useRouter();

function buildInitalPlayers() {
  const list = [];
  let i = 0;

  while (i < MIN_PLAYERS) {
    list.push({ name: '' });
    i++;
  }

  return list;
};

const players = reactive(buildInitalPlayers());

function buildLabel(playerIndex) {
  if (playerIndex == 0) return 'Host';
  return `Player ${playerIndex + 1}`;
}

function setPlayer(index, name) {
  players[index] = name;
}

function addPlayer() {
  if (players.length == MAX_PLAYERS) {
    console.log("Max player reached.");
    return false;
  }

  players.push({ name: '' });
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

  <button @click="addPlayer">Add Player</button>
  <button @click="create">Create</button>
</template>