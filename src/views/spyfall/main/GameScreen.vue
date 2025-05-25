<script setup>
  import { ref, reactive } from 'vue';
  import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
  import SpyFall, { LOCATIONS } from '@/lib/SpyFall';
  import Timer from './game_screen/Timer.vue';
  import Content from './Content.vue';
  import Action from '@/views/core/Action.vue';
  import Window from '@/views/core/Window.vue';
  import LocationsSheet from './game_screen/LocationsSheet.vue';
  import Confirm from '@/views/core/Confirm.vue';
  import RoomGenerator from '@/lib/RoomGenerator';
  import GameDetails from './GameDetails.vue';
  import EnterRoom from './game_screen/EnterRoom.vue';

  const router = useRouter();
  const route = useRoute();
  const seed = route.query.seed;
  const player = route.query.player;
  const index = route.query.index;
  const round = parseInt(route.query.round || 1);
  const numberOfPlayers = route.query.numberOfPlayers;
  const seconds = parseInt(route.query.seconds);
  const isHost = index == 0;
  const room = RoomGenerator.generate(seed);

  const spyfall = new SpyFall({ seed, round, numberOfPlayers });
  const location = spyfall.location(index);
  const icon = spyfall.icon(index);
  const role = spyfall.role(index);

  let allowBack = false;

  const locationsSheet = reactive({
    visible: false,
    show() { this.visible = true; },
    hide() { this.visible = false; }
  });
  
  const confirmExitGame = ref(false);

  onBeforeRouteLeave(() => {
    if (allowBack) return true;

    console.log('before leave');
    confirmExitGame.value = true;
    return false;
  });

  function exitGame() {
    allowBack = true; 
    router.replace('/');
  }

  function cancelExitGame() {
    allowBack = false;
    confirmExitGame.value = false;
  }

  function nextGame() {
    router.push({
      path: '/spyfall/game',
      query: {
        seed,
        round: round + 1,
        numberOfPlayers,
        index,
        player,
        seconds
      }
    });
  }

  function showLocations() {
    locationsSheet.show();
  }

  function hideLocations() {
    locationsSheet.hide();
  }
</script>

<template>
  <Content>
    <template v-slot:main>
      <div class="screen">
        <GameDetails :room="room" :player="player" :rounds="round" />

        <div class="card">
          <div class="icon">{{ icon }}</div>
          <div class="location">{{ location }}</div>
          <div class="role">{{ role  }}</div>
        </div>

        <Timer v-if="isHost && seconds > 0" :seconds="seconds"></Timer>
      </div>

      <Window :is-open="locationsSheet.visible" @close="hideLocations">
        <LocationsSheet :locations="LOCATIONS"></LocationsSheet>
      </Window>

      <EnterRoom v-if="!isHost" :room="room" />

      <Confirm :visible="confirmExitGame" message="Exit the game?" @yes="exitGame" @no="cancelExitGame"/>
    </template>

    <template v-slot:actions>
      <Action icon="location" @click="showLocations" /> 
      <Action icon="forward" @click="nextGame" confirm="Go to next round?" />
    </template>
  </Content>
</template>

<style scoped>
  .screen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    background-color: var(--bg-secondary);
    margin-top: -24px;
    margin-left: -24px;
    margin-right: -24px;
    padding: 0.5rem;
    font-size: 1.5rem;
    color: var(--text-secondary);
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    .icon {
      display: flex;
      justify-content: center;
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    .location {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 0.5rem;
      color: var(--text-highlight);
    }

    .role {
      font-size: 1rem;
      text-align: center;
      background-color: var(--bg-secondary);
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
</style>