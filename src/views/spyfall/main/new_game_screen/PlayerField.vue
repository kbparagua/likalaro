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
    <span class="label">
      <i class="fi fi-ss-user"></i>
      <span class="text">{{ label }}</span>
    </span>
    <input type="text" :name="label" v-model="value" />
    <a href="#remove" class="remove" v-if="removeable" @click.prevent="$emit('remove')">
      <i class="fi fi-rr-cross-circle"></i>
    </a>
  </div>
</template>

<style scoped>
  .player-field {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 12px;
    width: 100%;
    flex-wrap: wrap;
  }

  .label {
    display: flex;
    align-items: center;
    gap: 2px;

    .fi {
      font-size: 24px;
      color: #2980b9;
    }

    .text {
      font-size: 12px;
      /* width: 50px; */
    }
  }

  input {
  }

  .remove {
    color: #e74c3c;
    padding: 0.25rem;
  }
</style>