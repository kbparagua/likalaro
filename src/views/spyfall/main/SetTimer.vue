<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Action from '@/views/core/Action.vue';
  import Content from './Content.vue';
  import TimerOption from './TimerOption.vue';
  import Storage from '@/lib/Storage';

  const QUICK = 0;
  const FAST = 1;
  const FUN = 2;
  const SLOW = 3;
  const CASUAL = 4;

  const MINUTES = {
    [QUICK]: 6,
    [FAST]: 8,
    [FUN]: 10,
    [SLOW]: 12,
    [CASUAL]: 0
  };

  const router = useRouter();
  const selected = ref(FUN);

  onMounted(() => {
    const players = JSON.parse(Storage.get('players'));
    if (!players || players.length == 0) {
      router.replace('new');
    }
  });

  function createGame() {
    const seed = Math.round((new Date()).getTime() * Math.random()).toString();
    const seconds = MINUTES[selected.value] * 60;

    const players = JSON.parse(Storage.get('players'));
    const playerNames = players.map((p) => p.name);

    router.push({ path: 'lobby', query: { players: playerNames, seed, seconds } });
  }

  function select(option) { selected.value = option; }
  function isSelected(option) { return selected.value == option; }
</script>

<template>
  <Content>
    <template v-slot:main>
      <div class="options">
        <TimerOption :minutes="MINUTES[QUICK]" text="Quick" :selected="isSelected(QUICK)" @click="() => select(QUICK)">
          <i class="fi fi-rr-bolt"></i>
        </TimerOption>

        <TimerOption :minutes="MINUTES[FAST]" text="Fast" :selected="isSelected(FAST)" @click="() => select(FAST)">
          <i class="fi fi-rs-rabbit-fast"></i>
        </TimerOption>

        <TimerOption :minutes="MINUTES[FUN]" text="Fun" :selected="isSelected(FUN)" @click="() => select(FUN)">
          <i class="fi fi-tr-walking"></i>
        </TimerOption>

        <TimerOption :minutes="MINUTES[SLOW]" text="Slow" :selected="isSelected(SLOW)" @click="() => select(SLOW)">
          <i class="fi fi-tr-turtle"></i>
        </TimerOption>

        <TimerOption :minutes="MINUTES[CASUAL]" text="Casual" :selected="isSelected(CASUAL)" @click="() => select(CASUAL)">
          <i class="fi fi-rr-pizza-slice"></i>
        </TimerOption>
      </div>
    </template>

    <template v-slot:actions>
      <Action icon="back" :back="true" />
      <Action icon="ok" confirm="Create game?" @click="createGame" />
    </template>
  </Content>
</template>

<style scoped>
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1rem;
    column-gap: 1rem;
  }
</style>