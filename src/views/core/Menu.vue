<script setup>
</script>

<template>
  <div class="menu">
    <slot></slot>
  </div>
</template>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    height: 100%;
  }
</style>