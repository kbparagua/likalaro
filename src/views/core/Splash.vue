<script setup>
</script>

<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
  section {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: var(--bg0);

    font-size: 3rem;
  }
</style>