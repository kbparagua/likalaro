<script setup>
  import { RouterView } from 'vue-router'
  import 'normalize.css'
</script>

<template>
  <RouterView :key="$route.fullPath" />
</template>
