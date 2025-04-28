<script setup>
  import { ref } from 'vue';

  const emit = defineEmits(['close']);

  const props = defineProps({
    isOpen: { type: Boolean, default: false }
  });

  const isClosing = ref(false);

  function close() {
    isClosing.value = true;
  }

  function animationEnd(e) {
    if (e.animationName == 'slide-out') {
      isClosing.value = false;
      emit('close');
    }
  }
</script>

<template>
  <div class="window" :class="{ open: isOpen, closing: isClosing }" @animationend="animationEnd">
    <div class="content">
      <div class="main">
        <slot></slot>
      </div>

      <div class="controls">
        <div class="close-btn" @click="close">
          <i class="fi fi-sr-angle-circle-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .window {
    display: none;

    background-color: #8e44ad;

    position: absolute;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 2;

    padding: 2rem;

    &.open {
      display: block;
      top: 0;

      animation: 0.25s ease-out 0s slide-in;
    }

    &.closing {
      animation: 0.25s ease-in 0s slide-out;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;

    .main {
      flex-grow: 1;
      width: 100%;
    }

    .controls {
      width: 100%;
      text-align: right;
      font-size: 3rem;
    }
  }
</style>