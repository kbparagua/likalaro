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
    <i class="fi fi-ss-user"></i>
    <input type="text" size="1" :placeholder="label" :name="label" v-model="value" />
    <a href="#remove" class="remove" @click.prevent="$emit('remove')">
      <i class="fi fi-rr-trash"></i>
    </a>
  </div>
</template>

<style scoped>
  .player-field {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background-color: #34495e;
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    gap: 1rem;

  input {
    border-radius: 0.5rem;
    padding: 0.75rem 0.5rem;
    border: solid 1px transparent;
    font-size: 1.25rem;
    background-color: #4e6280;
    color: white;
    min-width: 70%;
    flex-grow: 2;

    &:focus {
      outline: none;
      border: solid 1px #2980b9;
    }
  }

  .remove {
    color: #e74c3c;
    flex-basis: content;
  }
}
</style>