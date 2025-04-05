<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import QRCode from 'qrcode';
  import Clipboard from 'clipboard';
  
  const props = defineProps({
    url: String,
    name: String
  });

  const qr = ref("");
  let clipboard = null;

  QRCode.toDataURL(props.url, (err, imageData) => {
    if (err) console.error(err);
    qr.value = imageData;
  });

  onMounted(() => {
    clipboard = new Clipboard('.copy-to-clipboard');
  });

  onUnmounted(() => {
    clipboard.destroy();
  });
</script>

<template>
  <div class="player-name">{{ name }}</div>
  <div>
    <img :src="qr"></img>
  </div>
  <button class="copy-to-clipboard" :data-clipboard-text="url">Send link</button>
</template>