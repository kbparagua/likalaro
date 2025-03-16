<script setup>
  import { useRoute } from 'vue-router';
  import SpyFall from '@/lib/SpyFall';

  const route = useRoute();
  const player = route.query.p;
  const seed = route.query.s;
  const playerNumber = route.query.n;

  const spyfall = new SpyFall({ seed, playerNumber });
  const location = spyfall.location();
  const role = spyfall.role();
</script>

<template>
  <div>
    <h1>{{ player }}</h1>
    <div>Location: {{ location.name }}</div>
    <div>Role: {{ role  }}</div>
  </div>
</template>