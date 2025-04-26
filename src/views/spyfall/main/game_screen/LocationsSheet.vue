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
    <div class="location" v-for="(location) in locations">
      <Location :name="location.name"></Location>
    </div>
  </div>
</template>

<style scoped>
  .locations-sheet {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #34495e;
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    gap: 0.75rem;
    padding: 1.5rem;
  }
</style>