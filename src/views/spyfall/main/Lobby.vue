<script setup>
  import { useTemplateRef, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import PlayerCard from './lobby/PlayerCard.vue';
  import Content from './Content.vue';
  import Action from '@/views/core/Action.vue';

  const router = useRouter();
  const route = useRoute();

  const { players, seed, seconds } = route.query;
  const host = players.shift();
  const numberOfPlayers = players.length + 1;
  const currentShownPlayerIndex = ref(0);

  const playerList = useTemplateRef("player-list");

  function generateJoinUrl({ index, player }) {
    const data = {
      seed,
      index,
      player,
      seconds,
      numberOfPlayers
    };

    const params = (new URLSearchParams(data)).toString();
    const url = window.location.href.split('?')[0].replace("lobby", "game");

    return `${url}?${params}`;
  }

  const joinUrls = players.map((player, i) => generateJoinUrl({ index: i + 1, player }));

  function start() {
    router.push({ path: '/spyfall/game', query: { seed, numberOfPlayers, seconds, index: 0, player: host }});
  }

  function prevPlayer() {
    currentShownPlayerIndex.value--;
    if (currentShownPlayerIndex.value === -1) return currentShownPlayerIndex.value++;

    const scrollLeft = currentShownPlayerIndex.value * window.innerWidth;
    playerList.value.scroll({ top: 0, left: scrollLeft, behavior: 'smooth' });
  }
  
  function nextPlayer() {
    currentShownPlayerIndex.value++;
    if (currentShownPlayerIndex.value === players.length) return currentShownPlayerIndex.value--;

    const scrollLeft = currentShownPlayerIndex.value * window.innerWidth;
    playerList.value.scroll({ top: 0, left: scrollLeft, behavior: 'smooth' });
  }

  function isReady() {
    const ready = (currentShownPlayerIndex.value + 1) == (players.length);
    console.log("players.length: ", players.length);
    console.log('currentPlayerIndex: ', currentShownPlayerIndex.value);
    console.log('ready ', ready);
    return ready;
  }
</script>

<template>
  <Content>
    <template v-slot:main>
      <div>Scan to join</div>
      <div class="player-list-container" ref="player-list">
        <ul class="player-list">
          <li class="player-card-container" v-for="(player, i) in players">
            <PlayerCard :url="joinUrls[i]" :name="player"></PlayerCard>
          </li>
        </ul>
      </div>

      <div>Host: {{  host  }}</div>
    </template>

    <template v-slot:actions>
      <Action icon="back" @click="prevPlayer" :disabled="currentShownPlayerIndex == 0"></Action>

      <Action
        v-if="isReady()"
        icon="ok"
        @click="start"
        confirm="Start game?">
      </Action>
      <Action v-else icon="forward" @click="nextPlayer"></Action>
    </template>
  </Content>
</template>

<style scoped>
  .player-list-container {
    width: 100%;
    overflow-x: hidden;
  }

  .player-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    margin-left: -24px;
  }
</style>