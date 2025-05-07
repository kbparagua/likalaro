<script setup>
  const props = defineProps({
    seconds: Number,
    text: String
  });


  const time = props.seconds;
</script>

<template>
  <div class="option">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="label">{{ text }}</div>
    <div class="time">{{ time }} mins</div>
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
  }
</style>