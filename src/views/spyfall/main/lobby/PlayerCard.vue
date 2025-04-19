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
  <div class="card">
    <div class="player-name">{{ name }}</div>
    <div>
      <img class="qr-code" :src="qr"></img>
    </div>

    <div>or </div>
    <div class="copy-to-clipboard" :data-clipboard-text="url">
      <i class="fi fi-rs-paper-plane"></i>
      <span>share link</span>
    </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    padding: 12px;
  }

  .qr-code {
    width: 90vw;
  }
</style>