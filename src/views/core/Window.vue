<script setup>
  defineEmits('close');

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
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    transition: top 0.25s;

    padding: 24px;

    &.open {
      top: 0;
    }
  }

  .close-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 40px;
    color: white;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 100%;
  }
</style>