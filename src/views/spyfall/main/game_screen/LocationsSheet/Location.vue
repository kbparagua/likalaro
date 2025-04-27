<script setup>
  import { ref, reactive } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  });

  const cssClass = ref(null);
  const top = ref(0);
  const left = ref(0);

  function changeState(e) {
    if (cssClass.value) return cssClass.value = null;

    const rect = e.currentTarget.getBoundingClientRect();
    top.value = rect.top;
    left.value = rect.left;
    console.log(rect);
    cssClass.value = 'focused';
  }
</script>

<template>
  <div class="location" :class="cssClass" @click="changeState">
    <div class="display">{{ name }}</div>
    <div class="actionable" :style="{ left: -left + 'px' }">
      <div class="name">{{ name }}</div>
      <div class="actions">
        <span class="action highlight">
          <i class="fi fi-sr-star"></i>
        </span>
        <span class="action strike">
          <i class="fi fi-bs-ban"></i>
        </span>
        <span class="action">
          <i class="fi fi-rr-angle-double-small-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .location {
    position: relative;
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

    .actionable {
      display: none;

      background-color: #2c3e50; 

      font-size: 1.25rem;
      text-align: center;

      border-style: solid;
      border-width: 1px;
      /* border-color: #9b59b6; */
      border-color: transparent;
      border-left-width: 0;
      border-right-width: 0;

      width: 100vw;

      align-items: center;
    }

    &.focused {
      .actionable {
        position: absolute;
        display: flex;
        top: 0;
        z-index: 9;

        .name { 
          flex-grow: 1;
          text-align: left;
          padding: 1.5rem;
        }
      } 
    }
  }

  .actions {
    display: flex;

    .action {
      padding: 1.5rem;

      &.highlight {
        color: #9b59b6;
      }

      &.strike {
        color: #c0392b;
      }
    }
  }
</style>