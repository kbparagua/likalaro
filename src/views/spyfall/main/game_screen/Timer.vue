<script setup>
  import { ref, computed } from 'vue';
  import testBellUrl from '@/assets/test_bell.wav';
  import testAlarmUrl from '@/assets/test_alarm.wav';

  const props = defineProps({ seconds: { type: Number }});

  const START_SECONDS = props.seconds;
  const WARNING_SECONDS = 2 * 60;
  const DANGER_SECONDS = 30;
  const TICK_INTERVAL_MS = 1000;

  const intervalId = ref(null);
  const remainingSeconds = ref(START_SECONDS);

  const formattedTime = computed(() => {
    const inMinutes = remainingSeconds.value / 60;
    const minutes = Math.floor(inMinutes);
    const seconds = Math.round(60 * (inMinutes - minutes));

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  });

  const bellSound = new Audio(testBellUrl);
  bellSound.volume = 0.5;

  const alarmSound = new Audio(testAlarmUrl);
  alarmSound.volume = 0.5;
  alarmSound.loop = true;

  function restart() {
    alarmSound.pause();
    remainingSeconds.value = START_SECONDS;
  }

  function startTick() {
    intervalId.value = setInterval(tick, TICK_INTERVAL_MS);
  }

  function stopTick() {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }

  function toggleTick() {
    if (remainingSeconds.value == 0) return restart();
    intervalId.value ? stopTick() : startTick();
  }

  function tick() {
    remainingSeconds.value--;

    if (remainingSeconds.value > WARNING_SECONDS) {
      regularTick();
    } else if (remainingSeconds.value <= WARNING_SECONDS && remainingSeconds.value > DANGER_SECONDS) {
      warningTick();
    } else {
      dangerTick();
    }
  }

  function warningTick() {
    if (remainingSeconds.value % 5 == 0) bellSound.play();
  }

  function dangerTick() {
    if (remainingSeconds.value == 0) {
      alarmSound.play();
      stopTick();
    } else {
      bellSound.play();
    }
  }

  function regularTick() {
    if (remainingSeconds.value % 60 == 0) bellSound.play();
  }

  const toggleAction = computed(() => {
    if (remainingSeconds.value == 0) return 'restart';

    return intervalId.value ? 'pause' : 'start';
  });
</script>

<template>
  <div class="timer">
    <i class="fi fi-bs-stopwatch timer-icon"></i>

    <div class="display">
      <div class="time">{{ formattedTime }}</div>
    </div>

    <div class="btn" @click="toggleTick">
      <i v-if="toggleAction === 'start'" class="fi fi-rr-play-circle start"></i>
      <i v-else-if="toggleAction === 'restart'" class="fi fi-rs-rotate-left restart"></i>
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
    background-color: var(--bg1);
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
  }

  .timer-icon {
    font-size: 2rem;
    width: 2rem;
  }

  .display {
    flex-grow: 2;

    .time {
      font-size: 2.5rem;
      text-align: left;
    }
  }

  .btn {
    font-size: 3rem;

    .start {
      color: var(--highlight0);
    }

    .pause {
      color: var(--highlight-danger);
    }
  }
</style>