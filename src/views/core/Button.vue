<script setup>
  defineEmits(['click']);
</script>

<template>
  <div class="button" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<style scoped>
  .button {
    padding: 2rem 1rem;
    border-radius: 0.5rem;
    text-align: center;

    width: 100%;
    background-color: white;
  }
</style>