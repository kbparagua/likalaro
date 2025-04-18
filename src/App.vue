<script setup>
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import 'normalize.css'

  onMounted(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }, 1000);
  });
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
