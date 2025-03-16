<script setup>
  import { useRoute } from 'vue-router';
  import SpyFall from '@/lib/SpyFall';

  const route = useRoute();
  const seed = route.query.seed;
  const player = route.query.player;
  const index = route.query.index;
  const numberOfPlayers = route.query.numberOfPlayers;

  const spyfall = new SpyFall({ seed, numberOfPlayers });
  const location = spyfall.location(index);
  const role = spyfall.role(index);
</script>

<template>
  <div>
    <h1>{{ player }}</h1>
    <div>Location: {{ location }}</div>
    <div>Role: {{ role  }}</div>
  </div>
</template>