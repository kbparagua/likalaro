<script setup>
import { ref, onMounted } from 'vue';

  const DEFAULT_MINUTES = 8;

  let seconds = 0;
  let minutes = DEFAULT_MINUTES;
  const secondsDisplay = ref(formatSeconds());
  const minutesDisplay = ref(minutes.toString());

  function formatSeconds() {
    return (seconds < 10) ? `0${seconds.toString()}` : seconds.toString();
  }

  function tick() {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    secondsDisplay.value = formatSeconds();
    minutesDisplay.value = minutes.toString();
  }

  onMounted(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }); 
</script>

<template>
  {{ minutesDisplay }}:{{ secondsDisplay }}
</template>