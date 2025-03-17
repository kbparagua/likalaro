<script setup>
import { ref, onMounted, computed } from 'vue';

  const DEFAULT_MINUTES = 8;
  const TICK_INTERVAL_MS = 1000;

  const intervalId = ref(null);
  let seconds = 0;
  let minutes = DEFAULT_MINUTES;
  const secondsDisplay = ref(formatSeconds());
  const minutesDisplay = ref(minutes.toString());
  

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

  const toggleAction = computed(() => (intervalId.value ? 'Pause' : 'Resume' ));

  function tick() {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    secondsDisplay.value = formatSeconds();
    minutesDisplay.value = minutes.toString();
  }

  onMounted(() => startTick());
</script>

<template>
  {{ minutesDisplay }}:{{ secondsDisplay }}
  <a href="#toggleTick" @click.prevent="toggleTick">{{ toggleAction }}</a>
</template>