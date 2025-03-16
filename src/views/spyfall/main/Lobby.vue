<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const { players, seed } = route.query;
  const host = players.shift();

  function generateJoinUrl({ playerNumber, name }) {
    const data = {
      s: seed,
      n: playerNumber,
      p: name
    };

    const params = (new URLSearchParams(data)).toString();
    const url = window.location.href.split('?')[0].replace("lobby", "game");

    return `${url}?${params}`;
  }

  const joinUrls = players.map((player, i) => generateJoinUrl({ playerNumber: i + 2, name: player }));

  function start() {
    router.push({ path: '/spyfall/game', query: { s: seed, n: 1, p: host } });
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