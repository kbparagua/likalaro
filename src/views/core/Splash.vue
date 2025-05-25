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
    if (e.animationName == 'exit') {
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
  @keyframes exit {
    0% {
      transform: translateX(0);
      border: solid 4px var(--highlight0);
    }

    25% {
      transform: translateX(24px);
    }
    
    100% {
      transform: translateX(-100vw);
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
      animation-name: exit;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;

      overflow: hidden;
    }

    &.hidden {
      display: none;
    }
  }
</style>
