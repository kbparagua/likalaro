<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    hiding: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['hide']);
  const hidden = ref(false);

  function hideMe(e) {
    if (e.animationName == 'zoom-in') {
      hidden.value = true;
      emit('hide');
    }
  }
</script>

<template>
  <div class="splash" :class="{ hiding, hidden }" @animationend="hideMe">
    <slot></slot>
  </div>
</template>

<style>
  @keyframes zoom-in {
    0% {
      transform: scale(0);
    }
    
    100% {
      transform: scale(40);
    }
  }
</style>

<style scoped>
  .splash {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: var(--bg0);

    &.hiding {
      animation-name: zoom-in;
      animation-duration: 500ms;
      animation-timing-function: ease-out;

      overflow: hidden;
    }

    &.hidden {
      display: none;
    }
  }
</style>
