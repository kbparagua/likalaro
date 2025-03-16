<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  label: String,
  removeable: { type: Boolean, default: true }
});

const emit = defineEmits(["change", "remove"]);
const value = ref("");

watch(value, (newValue) => {
  emit("change", newValue);
});

</script>

<template>
  <div class="player-field">
    <span class="label">{{ label }}</span>
    <input type="text" :name="label" v-model="value" />
    <a href="#remove" v-if="removeable" @click.prevent="$emit('remove')">remove</a>
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