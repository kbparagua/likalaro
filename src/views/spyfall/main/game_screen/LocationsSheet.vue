<script setup>
  import { ref } from 'vue'; 
  import Location from './LocationsSheet/Location.vue';

  const props = defineProps({
    locations: {
      type: Array,
      default: []
    }
  });
</script>

<template>
  <div class="locations-sheet">
    <Location v-for="(location) in locations" :name="location.name" />
  </div>
</template>

<style scoped>
  .locations-sheet {
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    gap: 0.75rem;

    margin-bottom: 5rem;
  }
</style>