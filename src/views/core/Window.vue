<script setup>
  defineEmits(['close']);

  const props = defineProps({
    isOpen: { type: Boolean, default: false }
  });
</script>

<template>
  <div class="window" :class="{ open: isOpen }">
    <a href="#" class="close-btn" @click.prevent="$emit('close')">
      <i class="fi fi-sr-circle-xmark"></i>
    </a>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .window {
    background-color: #8e44ad;
    position: absolute;
    display: none;
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

      animation-name: slide-up;
      animation-duration: 0.25s;
    }
  }

  .close-btn {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 3rem;
    color: white;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }

  @keyframes slide-up {
    from {
      top: 100dvh;
    }

    to {
      top: 0; 
    }
  }

  @keyframes slide-down {
    from {
      display: block;
      top: 100dvh;
    }

    to {
      top: 0;
    }
  }
</style>