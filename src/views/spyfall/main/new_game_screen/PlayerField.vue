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
  <div>
    <span>{{ label }}</span>
    <input type="text" v-model="value" />
  </div>
</template>