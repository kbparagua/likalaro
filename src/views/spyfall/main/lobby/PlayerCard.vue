<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import QRCode from 'qrcode';
  import Clipboard from 'clipboard';
  
  const props = defineProps({
    url: String,
    name: String
  });

  const qr = ref("");
  const clipboardClass = `${props.name}-copy`;
  const copied = ref(false);
  let clipboard = null;

  QRCode.toDataURL(props.url, (err, imageData) => {
    if (err) console.error(err);
    qr.value = imageData;
  });

  onMounted(() => {
    if (clipboard) return;

    console.log('init clipboard');
    
    clipboard = new Clipboard(`.${clipboardClass}`);
    clipboard.on('success', (e) => {
      copied.value = true;
      setTimeout(() => copied.value = false, 500);
    });
  });

  onUnmounted(() => {
    clipboard.destroy();
  });
</script>

<template>
  <div class="card">
    <div class="scan-instruction">Scan to join</div>
    <div class="player-name">{{ name }}</div>
    <img class="qr-code" :src="qr"></img>

    <div>or</div>
    <div class="copy-to-clipboard" :class="{ [clipboardClass]: true, copied: copied }" :data-clipboard-text="url">
      <span v-if="copied">Copied</span>
      <template v-else>
        <i class="fi fi-rr-copy-alt"></i>
        <span>Copy link to join</span>
      </template>
   </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 2rem;

    font-size: 2rem;

    .scan-instruction {
      font-weight: bold;
    }

    .player-name {
      font-size: 2rem;
      width: 100%;
      padding: 0.75rem;
      background-color: var(--highlight0);
      color: var(--bg0);
      border-radius: 0.5rem 0.5rem 0 0;
      margin-top: 1.5rem;
    }

    .qr-code {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }

  .copy-to-clipboard {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
    background-color: var(--text-default);
    color: var(--bg0);
    padding: 1.5rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: bold;
    
    &.copied {
      background-color: var(--highlight0);
    }
  }

</style>