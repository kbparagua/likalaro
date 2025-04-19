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
  <div class="main">
    <TitleBar @title-click="openHomeWindow"></TitleBar>
    <Window :is-open="isHomeWindowOpen" @close="closeHomeWindow">
      <Button path="/">Home</Button>
      <Button path="/spyfall/new">New Game</Button>
    </Window>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;

    .container {
      height: 100%;
    }
  }
</style>