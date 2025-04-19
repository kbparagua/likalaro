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
    <i class="fi fi-bs-stopwatch timer-icon"></i>

    <div class="display">
      <div v-if="isTimeUp">Time is up!</div>
      <div class="time" v-else>{{ minutesDisplay }}:{{ secondsDisplay }}</div>
    </div>

    <a href="#reset" v-if="isTimeUp" @click.prevent="reset">Reset</a>

    <div v-else href="#toggle" class="btn" @click="toggleTick">
      <i v-if="toggleAction === 'start'" class="fi fi-rr-play-circle start"></i>
      <i v-else class="fi fi-rs-pause-circle pause"></i>
    </div>
  </div>
</template>

<style scoped>
  .timer {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    background-color: #34495e;
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
  }

  .timer-icon {
    font-size: 2rem;
    width: 2rem;
    color: #7f8c8d;
  }

  .display {
    flex-grow: 2;

    .time {
      font-size: 2.5rem;
      font-family: 'Courier New', Courier, monospace;
      text-align: left;
      padding-top: 0.65rem;
    }
  }

  .btn {
    font-size: 3rem;

    .start {
      color: #27ae60;
    }

    .pause {
      color: #e74c3c;
    }
  }
</style>