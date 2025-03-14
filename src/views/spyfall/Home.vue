<script setup>
import { ref, watch } from "vue";
import PlayerField from "./home/PlayerField.vue";

const players = {
  1: null,
  2: null,
  3: null,
  4: null
};

const setPlayer = (number, name) => {
  players[number] = name;
  console.log(players);
}
</script>

<template>
  <div>Spyfall</div>
  <PlayerField label="Your name" @change="(v) => setPlayer(1, v)"></PlayerField>
  <PlayerField label="Player 2" @change="(v) => setPlayer(2, v)"></PlayerField>
  <PlayerField label="Player 3" @change="(v) => setPlayer(3, v)"></PlayerField>
  <PlayerField label="Player 4" @change="(v) => setPlayer(4, v)"></PlayerField>
  <button>Create</button>
</template>