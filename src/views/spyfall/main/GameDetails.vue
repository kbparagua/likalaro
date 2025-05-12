<script setup>
  const props = defineProps({
    room: { type: String, default: 'Invalid' },
    host: { type: String, default: 'Unknown Player' }
  });
</script>

<template>
  <section>
    <div class="room">
      <i class="fi fi-bs-door-closed"></i>
      <span class="name">{{ room }}</span>
    </div>
    <div class="host-details">Host: {{  host  }}</div>
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }

  .room {
    display: flex;
    align-items: center;

    background-color: var(--bg1);
    border-radius: 0.5rem;

    i.fi {
      border-right: solid 1px var(--border-default);
      padding: 1rem;
      font-size: 1.75rem;
    }

    .name {
      padding: 1rem;
      color: var(--highlight1);
      font-weight: bold;
      text-align: center;
      font-size: 2rem;
      flex-grow: 1;
    }
  }

  .host-details {
    font-size: 1.25rem;
    color: var(--text-secondary);
  }
</style>