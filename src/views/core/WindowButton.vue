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
    padding: 24px 8px;
    background-color: white;
    border-radius: 8px;
    text-align: center;

    text-transform: uppercase;
    font-weight: bold;
  }
</style>

