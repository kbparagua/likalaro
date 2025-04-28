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
      <slot></slot>
    </div>

    <div class="close-btn" @click="close">
      <i class="fi fi-sr-angle-circle-down"></i>
    </div>
  </div>
</template>

<style scoped>
  .window {
    display: none;

    background-color: #8e44ad;
    position: absolute;
    top: 100vh;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    transition:  0.25s;

    padding: 24px;

    &.open {
      display: block;
      top: 0;

      animation: 0.25s ease-out 0s slide-in;
    }

    &.closing {
      animation: 0.25s ease-in 0s slide-out;
    }
  }

  .close-btn {
    font-size: 3rem;
    color: white;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }
</style>