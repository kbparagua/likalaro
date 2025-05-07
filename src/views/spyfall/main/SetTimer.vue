<script setup>
  import Action from '@/views/core/Action.vue';
  import Content from './Content.vue';
  import TimerOption from './TimerOption.vue';


  function createGame() {

  }
</script>

<template>
  <Content>
    <template v-slot:main>
      <div class="options">
        <TimerOption :seconds="6" text="Quick">
          <i class="fi fi-rr-bolt"></i>
        </TimerOption>

        <TimerOption :seconds="8" text="Fast">
          <i class="fi fi-rs-rabbit-fast"></i>
        </TimerOption>

        <TimerOption :seconds="10" text="Casual">
          <i class="fi fi-tr-walking"></i>
        </TimerOption>

        <TimerOption :seconds="12" text="Slow">
          <i class="fi fi-tr-turtle"></i>
        </TimerOption>

        <TimerOption :seconds="0" text="No Timer">
          <i class="fi fi-rr-infinity"></i>
        </TimerOption>
      </div>
    </template>

    <template v-slot:actions>
      <Action icon="ok" @click="createGame" />
    </template>
  </Content>
</template>

<style scoped>
  .options {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>