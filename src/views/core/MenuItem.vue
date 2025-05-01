<script setup>
  defineEmits(['click']);
</script>

<template>
  <div class="menu-item" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<style scoped>
  .menu-item {
    width: 100%;
    padding: 2rem 0.5rem;
    background-color: var(--bg-primary);
    color: var(--cold0);
    border-radius: 0.75rem;
    text-align: center;

    text-transform: uppercase;
    font-weight: bold;

    text-decoration: none;
  }
</style>