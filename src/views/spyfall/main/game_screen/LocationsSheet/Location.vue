<script setup>
  import { ref, reactive } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  });

  const cssClass = ref(null);
  const mark = ref(null);
  const left = ref(0);

  function focus(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    left.value = rect.left;
    cssClass.value = 'focused';
  }

  function unfocus() {
    cssClass.value = '';
  }

  function highlight() {
    mark.value = 'highlight';
    unfocus();
  }

  function strike() {
    mark.value = 'strike';
    unfocus();
  }

  function reset() {
    mark.value = null;
    unfocus();
  }
</script>

<template>
  <div class="location" :class="{ [cssClass]: true, [mark]: true }" @click="focus">
    <div class="display">{{ name }}</div>

    <div class="actionable" :style="{ left: -left + 'px' }">
      <div class="name">{{ name }}</div>
      <div class="actions">
        <span v-if="mark != 'highlight'" class="action highlight" @click.stop="highlight">
          <i class="fi fi-sr-star"></i>
        </span>
        <span v-if="mark != 'strike'" class="action strike" @click.stop="strike">
          <i class="fi fi-bs-ban"></i>
        </span>
        <span class="action reset" @click.stop="reset">
          <i class="fi fi-rs-rotate-left"></i>
        </span>
        <span class="action" @click.stop="unfocus">
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

    &.strike .display {
      color: #7f8c8d;
      text-decoration: line-through;
      font-style: italic;
    }

    &.highlight .display {
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