<script setup>

import { watch, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { MIN_PLAYERS, MAX_PLAYERS } from '@/lib/SpyFall';
import PlayerField from "./new_game_screen/PlayerField.vue";

const router = useRouter();

const generatePlayerId = (function() {
  let currentAvailableId = 0;
  return () => currentAvailableId++;
})();

function buildInitalPlayers() {
  const list = [];
  let i = 0;

  while (i < MIN_PLAYERS) {
    list.push({ id: generatePlayerId(), name: '' });
    i++;
  }

  return list;
};

const players = reactive(buildInitalPlayers());

watch(players, (newValue) => {
  console.log(players);
})

function isValidPlayer(player) {
  return player.name.trim() != "";
};

const isValidGame = computed(() => {
  for (let player of players) {
    if (!isValidPlayer(player)) return false;
  }

  return true;
});

function buildLabel(playerIndex) {
  if (playerIndex == 0) return 'Host';
  return `Player ${playerIndex + 1}`;
}

function setPlayer(index, name) {
  players[index].name = name; 
}

function addPlayer() {
  if (players.length == MAX_PLAYERS) {
    console.log("Max player reached.");
    return false;
  }

  players.push({ id: generatePlayerId(), name: '' });
}

function isRemoveable(playerIndex) {
  return playerIndex > 0;
}

function removePlayer(index) {
  players.splice(index, 1);
};

function create() {
  if (!isValidGame) {
    console.log("Invalid Game!");
    return false;
  }
  
  const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  router.push({ path: 'lobby', query: { players, seed } });
}
</script>

<template>
  <div>Spyfall</div>
  <template v-for="(player, i) in players" :key="player.id">
    <PlayerField
      :label="buildLabel(i)"
      :removeable="isRemoveable(i)"
      @change="(value) => setPlayer(i, value)"
      @remove="removePlayer(i)">
    </PlayerField>
  </template>

  <button @click="addPlayer">Add Player</button>
  <button @click="create" :disabled="!isValidGame">Create</button>
</template>