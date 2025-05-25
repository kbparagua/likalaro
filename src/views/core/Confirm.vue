<script setup>
  import { ref, watch } from 'vue';

  const props = defineProps({
    message: String,
    visible: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['yes', 'no'])

  const visibilityClass = ref(null);

  watch(props, (newProps) => {
    visibilityClass.value = newProps.visible ? 'open' : null;
  });

  function close(callback) {
    visibilityClass.value = 'close';
    if (callback) setTimeout(() => callback(), 250);
  }

  function yes() {
    close(() => emit("yes"));
  }

  function no() {
    close(() => emit("no"));
  }
</script>

<template>
  <div class="confirm" :class="visibilityClass">
    <div class="message">{{ message }}</div>
    <div class="options">
      <div class="option" @click="no">
        <i class="fi fi-sr-circle-xmark"></i>
      </div>
      <div class="option" @click="yes">
        <i class="fi fi-ss-check-circle"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .confirm {
    display: none;

    position: absolute;
    left: 0;
    z-index: 3;

    flex-direction: column;

    background-color: var(--bg-secondary);
    width: 100%;
    height: 20dvh;
    padding: 2rem;

    border-top: solid 1px var(--border-default);

    &.open {
      display: flex;
      bottom: 0;
      animation-name: slide-up;
      animation-duration: 0.25s;
    }

    &.close {
      display: none;
      bottom: -20dvh;
      animation-name: slide-down;
      animation-duration: 0.25s;
    }

    .message {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 2;
      font-size: 2rem;
    }

    .options {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      gap: 1.25rem;

      .option {
        padding: 0.5rem;
      }
    }
  }

  @keyframes slide-up {
    from {
      bottom: -20dvh;
    }

    to {
      bottom: 0; 
    }
  }

  @keyframes slide-down {
    from {
      display: flex;
      bottom: 0;
    }

    to {
      bottom: -20dvh;
    }
  }
</style>