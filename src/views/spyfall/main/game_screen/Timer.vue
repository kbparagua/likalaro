<script setup>
  import { ref, computed } from 'vue';

  const DEFAULT_MINUTES = 2;
  const TICK_INTERVAL_MS = 1000;

  const intervalId = ref(null);
  let seconds = 0;
  let minutes = DEFAULT_MINUTES;
  const secondsDisplay = ref(formatSeconds());
  const minutesDisplay = ref(minutes.toString());
  const isTimeUp = ref(false);
  

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

  const toggleAction = computed(() => (intervalId.value ? 'Pause' : 'Resume' ));

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
  <div v-if="isTimeUp">Time is up!</div>
  <div v-else>{{ minutesDisplay }}:{{ secondsDisplay }}</div>

  <a href="#toggleTick" @click.prevent="toggleTick" v-if="!isTimeUp">{{ toggleAction }}</a>
</template>