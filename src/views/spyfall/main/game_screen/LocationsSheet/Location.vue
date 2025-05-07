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
  const top = ref(0);

  function focus(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    top.value = rect.top;

    cssClass.value = 'focused';
  }

  function unfocus(e) {
    cssClass.value = 'unfocus';
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

  function handleUnfocus() {
    if (cssClass.value == 'unfocus') cssClass.value = null;
  }
</script>

<template>
  <div class="location" :class="{ [cssClass]: true, [mark]: !!mark }" @click="focus">
    <div class="display">{{ name }}</div>

    <div class="actionable" :style="{ top: top + 'px' }" @animationend="handleUnfocus">
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
    flex-grow: 1;

    background-color: var(--bg-primary);
    border-radius: 0.75rem;
    padding: 1.5rem; 

    font-size: 1.25rem;
    text-align: center;

    border-style: solid;
    border-width: 1px;
    border-color: transparent;

    &.strike .display {
      color: var(--text-secondary);
      text-decoration: line-through;
      font-style: italic;
    }

    &.highlight .display {
      color: var(--highlight0);
    }

    .actionable {
      display: none;

      background-color: var(--bg-primary);

      font-size: 1.25rem;
      text-align: center;

      border-style: solid;
      border-width: 1px;
      border-color: var(--highlight1);
      border-left-width: 0;
      border-right-width: 0;

      width: 100vw;

      align-items: center;

      position: absolute;

      .name { 
        flex-grow: 1;
        text-align: left;
        padding: 1.5rem;
      }
    }

    &.focused {
      .actionable {
        display: flex;
        left: 0;
        z-index: 9;

        animation: 0.1s ease-out 0s from-right-slide-in;

      } 
    }
    
    &.unfocus {
      .actionable {
        display: flex;
        left: 100vw;
        z-index: 9;

        animation: 0.1s ease-in 0s from-left-slide-out;
      }
    }
  }

  .actions {
    display: flex;

    .action {
      padding: 1.5rem;

      &.highlight {
        color: var(--highlight0);
      }

      &.strike {
        color: var(--highlight-danger);
      }
    }
  }
</style>