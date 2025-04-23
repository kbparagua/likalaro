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
      <WindowButton path="/">Home</WindowButton>
      <WindowButton path="/spyfall/new">New Game</WindowButton>
    </Window>
  </div>
</template>

<style>
</style>