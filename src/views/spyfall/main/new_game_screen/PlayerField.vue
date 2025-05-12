<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  label: String,
  name: String,
  removeable: { type: Boolean, default: true }
});

const emit = defineEmits(["change", "remove"]);
const value = ref(props.name);

watch(value, (newValue) => {
  emit("change", newValue);
});

function focus(e) {
  e.currentTarget.select();
}

</script>

<template>
  <div class="player-field">
    <span class="player-icon">
      <i class="fi fi-ss-user"></i>
    </span>

    <input
      type="text"
      size="1"
      autocomplete="off"
      class="player-name"
      :placeholder="label"
      :name="label"
      v-model="value"
      @focus="focus" />

    <span class="remove-container">
      <span class="remove" v-if="removeable" @click="$emit('remove')">
        <i class="fi fi-rr-trash"></i>
      </span>
    </span>
  </div>
</template>

<style scoped>
  .player-field {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    background-color: var(--bg1);
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    gap: 1rem;

    .player-icon {
      font-size: 1.5rem;
    }

    input.player-name  {
      border-radius: 0.5rem;
      padding: 0.75rem 0.5rem;
      border-width: 0;
      outline: none;
      font-size: 1.25rem;
      background-color: var(--bg0);
      color: var(--default-text);

      min-width: 70%;
      flex-grow: 2;

      &:focus {
        outline: none;
        border-width: 0;
      }
    }

    .remove-container {
      width: 3rem;
      text-align: center;

      .remove {
        color: var(--warm2);
        flex-basis: content;
        font-size: 2rem;
      }
    }
  }
</style>