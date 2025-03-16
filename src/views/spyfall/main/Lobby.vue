<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const { players, seed } = route.query;
  const host = players.shift();
  const numberOfPlayers = players.length + 1;

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
</script>

<template>
  <div>Host: {{  host  }}</div>
  <ul>
    <li v-for="(player, i) in players">
      {{ player }}: {{ joinUrls[i] }}
    </li>
  </ul>

  <button @click="start">Start</button>
</template>