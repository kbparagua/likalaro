<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import 'normalize.css'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav v-if="$route.path == '/'">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/spyfall/new">Spyfall</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :key="$route.fullPath" />
</template>

<style scoped>
</style>
