<script setup>
  import { reactive } from 'vue';
  import Action from './Action.vue';
  import Window from './Window.vue';
  import Button from './Button.vue';

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
      <Button path="/">Home</Button>
      <Button path="/spyfall/new">New Game</Button>
    </Window>
  </div>
</template>

<style>
</style>