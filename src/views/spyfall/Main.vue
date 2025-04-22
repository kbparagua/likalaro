<script setup>
</script>

<template>
  <div class="main">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;

    .container {
      height: 100%;
    }
  }
</style>