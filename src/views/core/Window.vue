<script setup>
  defineEmits(['close']);

  const props = defineProps({
    isOpen: { type: Boolean, default: false }
  });
</script>

<template>
  <div class="window" :class="{ open: isOpen }">
    <div class="content">
      <slot></slot>
    </div>

    <div class="close-btn" @click.prevent="$emit('close')">
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

      animation-name: slide-up;
      animation-duration: 0.25s;
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