<script setup>
import { ref, watch } from "vue";
import PlayerField from "./home/PlayerField.vue";

const players = [];
const setPlayer = (index, name) => {
  players[index] = name;
  console.log(players);
}

function generateJoinUrl({ playerIndex, name, seed }) {
  const data = {
    s: seed,
    i: playerIndex,
    p: name
  };

  const params = (new URLSearchParams(data)).toString();
  const url = window.location.href;

  return `${url}?${params}`;
}

function create() {
  console.log("create game");
  const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  const joinUrls = [];

  let i = 1;
  while (i < players.length) {
    let player = players[i];
    joinUrls[i] = generateJoinUrl({ playerIndex: i, name: player, seed });

    i++;
  }

  console.log(joinUrls);
}

</script>

<template>
  <div>Spyfall</div>
  <PlayerField label="Your name" @change="(v) => setPlayer(0, v)"></PlayerField>
  <PlayerField label="Player 2" @change="(v) => setPlayer(1, v)"></PlayerField>
  <PlayerField label="Player 3" @change="(v) => setPlayer(2, v)"></PlayerField>
  <PlayerField label="Player 4" @change="(v) => setPlayer(3, v)"></PlayerField>
  <button @click="create">Create</button>
</template>