<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const { players, seed } = route.query;
  const host = players.shift();

  function generateJoinUrl({ playerNumber, name }) {
    const data = {
      s: seed,
      m: playerNumber,
      p: name
    };

    const params = (new URLSearchParams(data)).toString();
    const url = window.location.href.split('?')[0];

    return `${url}?${params}`;
  }

  const joinUrls = players.map((player, i) => generateJoinUrl({ playerNumber: i + 2, name: player }));
  console.log(joinUrls);
</script>

<template>
  <div>Host: {{  host  }}</div>
  <ul>
    <li v-for="(player, i) in players">
      {{ player }}: {{ joinUrls[i] }}
    </li>
  </ul>
</template>