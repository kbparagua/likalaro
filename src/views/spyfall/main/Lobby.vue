<script setup>
  import { useTemplateRef } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import PlayerCard from './lobby/PlayerCard.vue';

  const router = useRouter();
  const route = useRoute();

  const { players, seed } = route.query;
  const host = players.shift();
  const numberOfPlayers = players.length + 1;
  let currentShownPlayerIndex = 0;

  const playerList = useTemplateRef("player-list");

  function generateJoinUrl({ index, player }) {
    const data = {
      seed,
      index,
      player,
      numberOfPlayers
    };

    const params = (new URLSearchParams(data)).toString();
    const url = window.location.href.split('?')[0].replace("lobby", "game");

    return `${url}?${params}`;
  }

  const joinUrls = players.map((player, i) => generateJoinUrl({ index: i + 1, player }));

  function start() {
    router.push({ path: '/spyfall/game', query: { seed, numberOfPlayers, index: 0, player: host} });
  }

  function prevPlayer() {
    currentShownPlayerIndex--;
    if (currentShownPlayerIndex === -1) return currentShownPlayerIndex++;

    const scrollLeft = currentShownPlayerIndex * window.innerWidth;
    playerList.value.scroll({ top: 0, left: scrollLeft, behavior: 'smooth' });
  }
  
  function nextPlayer() {
    currentShownPlayerIndex++;
    if (currentShownPlayerIndex === players.length) return currentShownPlayerIndex--;

    const scrollLeft = currentShownPlayerIndex * window.innerWidth;
    playerList.value.scroll({ top: 0, left: scrollLeft, behavior: 'smooth' });
  }
</script>

<template>
  <div>Host: {{  host  }}</div>
  <div class="player-list-container" ref="player-list">
    <ul class="player-list">
      <li class="player-card-container" v-for="(player, i) in players">
        <PlayerCard :url="joinUrls[i]" :name="player"></PlayerCard>
      </li>
    </ul>
  </div>

  <button @click="prevPlayer">Previous Player</button>
  <button @click="nextPlayer">Next Player</button>
  <button @click="start">Start</button>
</template>

<style scoped>
  .player-list-container {
    width: 100%;
    overflow-x: hidden;
  }

  .player-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    margin-left: -24px;
  }
</style>