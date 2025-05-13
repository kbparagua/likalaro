<script setup>
  const props = defineProps({
    room: { type: String, default: 'Invalid' },
    player: { type: String, default: 'Unknown' },
    rounds: { type: Number, default: 0 }
  });
</script>

<template>
  <section>
    <div class="top-bar">
      <div class="player">
        <i class="fi fi-ss-user"></i>{{  player  }}
      </div>
      <div v-if="rounds > 0" class="rounds">
        <i class="fi fi-tr-bullseye"></i>{{ rounds }}
      </div>
    </div>
    <div class="room">
      <i class="fi fi-bs-door-closed"></i>
      <span class="name">{{ room }}</span>
    </div>
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
      padding: 0.75rem;
      font-size: 1.5rem;
    }

    .name {
      padding: 0.75rem;
      color: var(--highlight1);
      font-weight: bold;
      text-align: center;
      font-size: 1.5rem;
      flex-grow: 1;
    }
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1.25rem;
    color: var(--text-secondary);

    .player {
      display: flex;
      gap: 0.5rem;
    }

    .rounds {
      display: flex;
      gap: 0.5rem;
    }
  }
</style>