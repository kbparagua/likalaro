<script setup>
import { ref, watch } from "vue";

const props = defineProps({ label: String });
const emit = defineEmits(["change"]);
const value = ref("");

watch(value, (newValue) => {
  emit("change", newValue);
});
</script>

<template>
  <div class="player-field">
    <span class="label">{{ label }}</span>
    <input type="text" v-model="value" />
  </div>
</template>

<style scoped>
  .player-field {
    display: flex;
    margin-bottom: 12px;
  }

  .label {
    width: 100px;
    font-size: 16px;
  }

  input {
    max-width: 80%;
    font-size: 16px;
  }
</style>