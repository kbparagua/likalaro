<script setup>

import { watch, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { MIN_PLAYERS, MAX_PLAYERS } from '@/lib/SpyFall';
import PlayerField from "./new_game_screen/PlayerField.vue";
import Action from '@/views/core/Action.vue';
import Content from './Content.vue';
import Storage from '@/lib/Storage';

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

const players = reactive(JSON.parse(Storage.get('players')) || buildInitalPlayers());
console.log(players);

const canAddPlayer = computed(() => players.length < MAX_PLAYERS);
const missingPlayers = computed(() => {
  const count = MIN_PLAYERS - players.length;
  return {
    count,
    playersString: count > 1 ? 'players' : 'player'
  }
});

const instruction = computed(() => {
  const missingPlayers = MIN_PLAYERS - players.length;
  if (missingPlayers > 0) {
    const playersString = missingPlayers > 1 ? 'players' : 'player';
    return `Add ${missingPlayers} more ${playersString} to create a game.`;
  }

  if (MAX_PLAYERS == players.length) return "You've reached the player limit.";

  return null;
});

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

function savePlayers() {
  if (!isValidGame.value) {
    console.log("Invalid Game!");
    return false;
  }

  Storage.set('players', JSON.stringify(players));
  router.push({ path: 'set_timer' });
  // const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  // const playerNames = players.map((p) => p.name);
  // router.push({ path: 'lobby', query: { players: playerNames, seed } });
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
            :name="player.name"
            :removeable="isRemoveable(i)"
            @change="(value) => setPlayer(i, value)"
            @remove="removePlayer(i)">
          </PlayerField>
        </template>
      </div>

      <div v-if="instruction" class="instruction">{{ instruction }}</div>

      <div v-if="canAddPlayer" class="add-player" @click="addPlayer">
        <i class="fi fi-tr-add"></i>
      </div>
    </template>

    <template v-slot:actions>
      <Action
        icon="forward"
        :disabled="!isValidGame"
        @click="savePlayers"></Action>
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
      color: var(--cold2);
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
  
  .instruction {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .add-player {
    text-align: center;
    font-size: 3rem;
    color: var(--warm0);
  }

  .create-btn {
    font-size: 3rem;
  }
</style>