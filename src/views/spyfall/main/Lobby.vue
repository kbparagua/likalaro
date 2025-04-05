<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Clipboard from 'clipboard';
  import QRCode from 'qrcode';

  const router = useRouter();
  const route = useRoute();

  const { players, seed } = route.query;
  const host = players.shift();
  const numberOfPlayers = players.length + 1;
  let clipboard = null;

  const qrcode = ref("");

  QRCode.toDataURL("testing", (err, url) => {
    if (err) console.error(err);
    console.log(url);
    qrcode.value = url;
  });

  function generateJoinUrl({ index, player }) {
    const data = {
      seed,
      index,
      player,
      numberOfPlayers
    };

    const params = (new URLSearchParams(data)).toString();
    const url = window.location.href.split('?')[0].replace("lobby", "game");

    return `${url}?${params}`;
  }

  const joinUrls = players.map((player, i) => generateJoinUrl({ index: i + 1, player }));

  function start() {
    router.push({ path: '/spyfall/game', query: { seed, numberOfPlayers, index: 0, player: host} });
  }

  onMounted(() => {
    clipboard = new Clipboard('.copy-to-clipboard')

  });
  
  onUnmounted(() => {
    clipboard.destroy();
  });
</script>

<template>
  <div>Host: {{  host  }}</div>
  <img id="test-qr-code" :src="qrcode"></img>
  <ul>
    <li v-for="(player, i) in players">
      {{ player }}: {{ joinUrls[i] }} <button class="copy-to-clipboard" :data-clipboard-text="joinUrls[i]">Copy</button>
    </li>
  </ul>

  <button @click="start">Start</button>
</template>