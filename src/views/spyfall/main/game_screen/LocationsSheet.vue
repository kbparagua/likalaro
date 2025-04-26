<script setup>
  const props = defineProps({
    locations: {
      type: Array,
      default: []
    }
  });
</script>

<template>
  <div class="locations-sheet">
    <div class="location" v-for="(location, i) in locations">
      <div class="icon">{{ location.icon }}</div>
      <div class="name">{{ location.name }}</div>
    </div>
  </div>
</template>

<style scoped>
  .locations-sheet {
    position: absolute;
    top: 0;
    left: 0;
    background: #8e44ad;
    width: 100%;
    height: 100dvh;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

    .location {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      border: solid 1px #9b59b6;
      padding: 0.5rem;
      border-radius: 0.75rem;

      .icon {
        font-size: 1rem;
      }

      .name {
        font-size: 1rem;
      }

      &.marked {
        background-color: #bdc3c7;
        .name { 
          text-decoration: line-through;
          color: #7f8c8d;
        }
      }
    }
  }
</style>