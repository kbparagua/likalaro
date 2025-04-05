<script setup>
  import { ref, computed } from 'vue';

  const DEFAULT_MINUTES = 8;
  const TICK_INTERVAL_MS = 1000;

  const intervalId = ref(null);
  let seconds = 0;
  let minutes = DEFAULT_MINUTES;
  const secondsDisplay = ref(formatSeconds());
  const minutesDisplay = ref(minutes.toString());
  const isTimeUp = ref(false);
 
  function reset() {
    seconds = 0;
    minutes = DEFAULT_MINUTES;
    isTimeUp.value = false;
    startTick();
  }

  function formatSeconds() {
    return (seconds < 10) ? `0${seconds.toString()}` : seconds.toString();
  }

  function startTick() {
    intervalId.value = setInterval(tick, TICK_INTERVAL_MS);
  }

  function stopTick() {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }

  function toggleTick() {
    intervalId.value ? stopTick() : startTick();
  }

  function timesUp() {
    isTimeUp.value = true;
    stopTick();
  }

  const toggleAction = computed(() => (intervalId.value ? 'pause' : 'start' ));

  function tick() {
    seconds--;

    if (seconds < 0) {
      minutes--;
      if (minutes < 0) return timesUp();

      seconds = 59;
    }

    secondsDisplay.value = formatSeconds();
    minutesDisplay.value = minutes.toString();
  }
</script>

<template>
  <div class="timer">
    <div v-if="isTimeUp">Time is up!</div>
    <div class="time" v-else>{{ minutesDisplay }}:{{ secondsDisplay }}</div>

    <a href="#reset" v-if="isTimeUp" @click.prevent="reset">Reset</a>
    <a href="#toggle" v-else @click.prevent="toggleTick">{{ toggleAction }}</a>
      {{ player }}: {{ joinUrls[i] }} <button class="copy-to-clipboard" :data-clipboard-text="joinUrls[i]">Copy</button>
  </div>
</template>

<style scoped>
  .timer {
    text-align: center;
  }

  .time {
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    color: #e74c3c; 
  }
</style>