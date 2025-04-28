<script setup>
  import { reactive } from 'vue';
  import Action from './Action.vue';
  import Window from './Window.vue';
  import WindowButton from './WindowButton.vue';

  const menu = reactive({
    visible: false,
    show() { this.visible = true },
    hide() { this.visible = false }
  });

  function showMenu() { menu.show() }
  function hideMenu() { menu.hide() }
</script>

<template>
  <div>
    <Action icon="home" @click="showMenu"></Action>
    <Window :is-open="menu.visible" @close="hideMenu">
      <div class="menu">
        <WindowButton path="/">Home</WindowButton>
        <WindowButton path="/spyfall/new">New Game</WindowButton>
      </div>
    </Window>
  </div>
</template>

<style scoped>
  .menu {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }
</style>