<script setup>
</script>

<template>
  <div class="content">
    <div class="main">
      <slot name="main"></slot>
    </div>

    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: calc(100dvh - 4rem);

    .main {
      flex-grow: 0;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 2rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: solid 1px #34495e;
      flex-grow: 1;
    }
  }
</style>