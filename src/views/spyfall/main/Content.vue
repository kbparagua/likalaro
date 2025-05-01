<script setup>
  import HomeAction from './content/HomeAction.vue'
</script>

<template>
  <div class="content">
    <div class="main">
      <slot name="main"></slot>
    </div>

    <div class="actions">
      <HomeAction></HomeAction>
      <div class="custom">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 100dvh;

    .main {
      flex-grow: 0;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 2rem;
    }

    .actions {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-top: solid 1px #34495e;

      .custom {
        display: flex;
        justify-content: flex-end;
        flex-grow: 2;
      }
    }
  }
</style>