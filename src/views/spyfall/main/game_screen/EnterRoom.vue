<script setup>
  import Splash from '@/views/core/Splash.vue';

  const props = defineProps({ room: String });

  function enter() {
    alert('enter');
  }
</script>

<template>
  <Splash>
    <section>
      <div class="room-details">
        <h1>Enter room</h1>
        <span class="door">🚪</span>
        <span class="room">{{ room }}</span>
      </div>

      <div class="enter">
        <div class="btn" @click="enter">
          <i class="fi fi-sr-portal-enter"></i>
        </div>
        <div class="glow"></div>
      </div>
    </section>
  </Splash>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 2rem;

    .room-details {
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 2rem;
    }

    .enter {
      position: relative;
      width: 7rem;
      height: 7rem;

      .btn {
        position: absolute;
        top: 0;
        z-index: 2;
        color: var(--actions-standard-text);
        border-radius: 50%;
        padding: 2rem;
        background-color: var(--bg0);
      }

      .glow {
        position: absolute;
        top: 0;
        background-color: var(--highlight0);
        width: 100%;
        height: 100%;
        z-index: 1;

        border-radius: 50%;

        animation-name: glow;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
      }
    }
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  .door {
    font-size: 5rem;
    text-align: center;
  }

  .room {
    font-size: 1.5rem;
    background-color: var(--bg1);
    padding: 0.75rem;
    width: 100%;
    border-radius: 0.5rem;
    text-align: center;
    color: var(--highlight1);
    font-weight: bold;
  }

  @keyframes glow {
    0% {
      transform: scale(0.9);
    } 

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0.9);
    }
  }
</style>