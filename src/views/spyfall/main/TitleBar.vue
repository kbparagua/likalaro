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
    margin-top: -24px;
    margin-left: -24px;
    margin-right: -24px;
    
    padding: 12px 10px;

    a {
      display: flex;
      gap: 6px;
      text-transform: uppercase;
      color: white;

      h1 {
        font-size: 12px;
      }
    }

  }
</style>