<script setup>
  defineEmits(['select']);
  const props = defineProps({
    minutes: Number,
    text: String,
    selected: {
      type: Boolean,
      default: false
    }
  });

  const time = props.minutes == 0 ? 'No timer' : `${props.minutes} mins`;
</script>

<template>
  <div class="option" :class="{ selected }" @click="$emit('select')">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="label">{{ text }}</div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<style scoped>
  .option {
    flex-grow: 1;
    border: solid 1px white;
    border-radius: 0.75rem;
    padding: 1rem;

    .icon {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    .label {
      font-size: 1.5rem;
      text-align: center;
    }

    .time {
      font-size: 1.5rem;
      text-align: center;
    }

    &.selected {
      color: var(--cold1);
    }
  }
</style>