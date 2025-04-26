<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  });

  const STATES = ['strike', 'highlight'];
  const stateCssClass = ref(null);
  let stateIndex = -1;

  function changeState() {
    if (stateIndex >= STATES.length) {
      stateIndex = -1;
    } else {
      stateIndex++;
    }

    stateCssClass.value = STATES[stateIndex];
  }
</script>

<template>
  <div class="location" :class="stateCssClass" @click="changeState">
    {{ name }}
  </div>
</template>

<style scoped>
  .location {
    flex-grow: 1;

    background-color: #2c3e50; 
    border-radius: 0.75rem;
    padding: 1.5rem; 

    font-size: 1.25rem;
    text-align: center;

    border-style: solid;
    border-width: 1px;
    border-color: transparent;

    &.strike {
      color: #7f8c8d;
      text-decoration: line-through;
      font-style: italic;
      opacity: 0.5;
    }

    &.highlight {
      color: #27ae60;
      border-color: #27ae60;
    }
  }
</style>