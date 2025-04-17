<script setup>
  import { ref } from "vue";
  import TitleBar from "./main/TitleBar.vue";
</script>

<template>
  <TitleBar></TitleBar>
  <div class="content">
    <router-view />
  </div>
</template>

<style scoped>
  .content {
    padding-top: 24px;
  }
</style>