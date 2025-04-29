<script setup>
  defineEmits('click');
  const props = defineProps({
    path: String
  });
</script>

<template>
  <RouterLink :to="path" class="button">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
  .button {
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

