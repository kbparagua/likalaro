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
    <div class="player-name">{{ name }}</div>
    <div>
      <img class="qr-code" :src="qr"></img>
    </div>

    <div>or</div>
    <div class="copy-to-clipboard" :class="{ [clipboardClass]: true, copied: copied }" :data-clipboard-text="url">
      <span v-if="copied">Copied</span>
      <template v-else>
        <i class="fi fi-rs-paper-plane"></i>
        <span>share link</span>
      </template>
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

  .copy-to-clipboard {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    background-color: white;
    color: #8e44ad;
    padding: 1.5rem 1.25rem;
    border-radius: 0.75rem;
    font-weight: bold;
    
    &.copied {
      background-color: #8e44ad;
      color: white;
    }
  }

</style>