<script setup>

import { watch, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { MIN_PLAYERS, MAX_PLAYERS } from '@/lib/SpyFall';
import PlayerField from "./new_game_screen/PlayerField.vue";
import Action from '@/views/core/Action.vue';
import Content from './Content.vue';

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
  const verifiedPlayerNames = {};

  for (let player of players) {
    if (!isValidPlayer(player)) return false;

    // If player name is already verified then this is a duplicate name.
    let canonicalPlayerName = player.name.toLowerCase();
    if (verifiedPlayerNames[canonicalPlayerName]) return false;

    verifiedPlayerNames[canonicalPlayerName] = true;
  }

  return players.length >= MIN_PLAYERS && players.length <= MAX_PLAYERS;
});

function buildLabel(playerIndex) {
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
  if (!isValidGame.value) {
    console.log("Invalid Game!");
    return false;
  }
  
  const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  const playerNames = players.map((p) => p.name);
  router.push({ path: 'lobby', query: { players: playerNames, seed } });
}
</script>

<template>
  <Content>
    <template v-slot:main>
      <div class="title">
        <i class="fi fi-sr-users-alt"></i>
        <h1>Players</h1>
      </div>

      <div class="players">
        <template v-for="(player, i) in players" :key="player.id">
          <PlayerField
            :label="buildLabel(i)"
            :removeable="isRemoveable(i)"
            @change="(value) => setPlayer(i, value)"
            @remove="removePlayer(i)">
          </PlayerField>
        </template>
      </div>

      <a href="#" class="add-player" @click.prevent="addPlayer">
        <i class="fi fi-tr-add"></i>
      </a>
    </template>

    <template v-slot:actions>
      <Action
        icon="ok"
        :disabled="!isValidGame"
        @click="create"
        confirm="Create game?"></Action>
    </template>
  </Content>
</template>

<style scoped>
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .fi {
      font-size: 4rem;
      color: #27ae60;
    }

    h1 {
      font-size: 2rem;
      margin: 0;
      text-transform: uppercase;
    }
  }

  .players {
    margin-bottom: 2rem;
  }

  .add-player {
    text-align: center;
    font-size: 3rem;
    color: white;
  }

  .create-btn {
    font-size: 3rem;
  }
</style>