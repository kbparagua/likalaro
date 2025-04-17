<script setup>
import { ref } from "vue";
import TitleBar from "./main/TitleBar.vue";
import Window from "../core/Window.vue";
import Button from "../core/Button.vue";

const [isHomeWindowOpen, openHomeWindow, closeHomeWindow] = (function(){
  const state = ref(false);

  return [
    state,
    () => state.value = true,
    () => state.value = false
  ];
})();
</script>

<template>
  <TitleBar @title-click="openHomeWindow"></TitleBar>
  <Window :is-open="isHomeWindowOpen" @close="closeHomeWindow">
    <Button path="/">Home</Button>
    <Button path="/spyfall/new">New Game</Button>
  </Window>

  <div class="content">
    <router-view />
  </div>
</template>

<style scoped>
  .content {
    padding-top: 24px;
  }
</style>