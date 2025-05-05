<script setup>
  import { ref, computed, watch, reactive } from 'vue';
  import testBellUrl from '@/assets/test_bell.wav';
  import testAlarmUrl from '@/assets/test_alarm.wav';

  const DEFAULT_MINUTES = 3;
  const TICK_INTERVAL_MS = 150;

  const intervalId = ref(null);
  const time = reactive({ seconds: 0, minutes: DEFAULT_MINUTES });

  const isTimesUp = computed(() => (time.seconds == 0 && time.minutes == 0));
  const formattedTime = computed(() => {
    const min = time.minutes.toString();
    const sec = time.seconds < 10 ? `0${time.seconds}` : time.seconds.toString();
    return [min, sec].join(':');
  });

  function resetTime() {
    time.minutes = DEFAULT_MINUTES;
    time.seconds = 0;
  }

  const bellSound = new Audio(testBellUrl);
  bellSound.volume = 0.5;

  const alarmSound = new Audio(testAlarmUrl);
  alarmSound.volume = 0.5;
  alarmSound.loop = true;

  watch(time, (newTime) => {
    if (newTime.seconds > 0) return;

    if (newTime.minutes == 0) {
      timesUp();
    } else {
      bellSound.play();
    }
  });

  function timesUp() {
    stopTick();
    alarmSound.play();
  }

  function reset() {
    resetTime();
    startTick();

    alarmSound.pause();
    bellSound.pause();
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

  function tick() {
    if (time.seconds > 0) return time.seconds--;

    if (time.seconds == 0 && time.minutes > 0) {
      time.minutes--;
      time.seconds = 59;
    }
  }

  const toggleAction = computed(() => (intervalId.value ? 'pause' : 'start' ));
</script>

<template>
  <div class="timer">
    <i class="fi fi-bs-stopwatch timer-icon"></i>

    <div class="display">
      <div v-if="isTimesUp">Time is up!</div>
      <div class="time" v-else>{{ formattedTime }}</div>
    </div>

    <a href="#reset" v-if="isTimesUp" @click.prevent="reset">Reset</a>

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
      color: var(--cold2);
    }

    .pause {
      color: var(--warm2);
    }
  }
</style>