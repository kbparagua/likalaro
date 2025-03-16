<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const player = route.query.p;
</script>

<template>
  <div>
    <h1>{{ player }}</h1>
  </div>
</template>