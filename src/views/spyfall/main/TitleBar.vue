<script setup>
defineEmits('titleClick');
</script>

<template>
  <div class="title-bar">
    <a href="#" @click.prevent="$emit('titleClick')">
      <i class="fi fi-bs-incognito"></i>
      <h1>Spyfall</h1>
    </a>
  </div>
</template>

<style scoped>
  .title-bar {
    background-color: #8e44ad;
    padding: 1rem; 
    height: 4rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;

      .fi {
        font-size: 1.5rem;
      }

      h1 {
        font-size: 1.25rem;
        margin: 0;
      }
    }

  }
</style>