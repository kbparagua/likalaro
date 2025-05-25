<script setup>
  import { ref, onMounted } from "vue";
  import Splash from "@/views/core/Splash.vue";

  const props = defineProps({
    round: {
      type: Number,
      default: 1
    }
  });

  const hiding = ref(false);

  onMounted(() => {
    setTimeout(() => {
      hiding.value = true;
    }, 1500);
  });
</script>

<template>
  <Splash :hiding="hiding">
    <section>
      <span class="round">Round #{{ round }}</span>
    </section>
  </Splash>
</template>

<style scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .round {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--highlight0);
    font-weight: bold;

    background-color: var(--bg1);
    width: 100%;
    padding: 2rem;
    border: solid 1px var(--highlight0);
    border-left: none;
    border-right: none;
    
    animation-name: zoom;
    animation-duration: 1s;
  }

  @keyframes zoom {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
</style>