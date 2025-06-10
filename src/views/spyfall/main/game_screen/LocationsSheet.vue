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
    <h1>
      <i class="fi-ss-marker"></i>
      Locations
    </h1>

    <div class="locations">
      <Location v-for="(location) in locations" :name="location.name" />
    </div>
  </div>
</template>

<style scoped>
  .locations-sheet {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 100%;
    height: 100%;

    h1 {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .locations {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-end;
      gap: 0.75rem;
    }
  }
</style>