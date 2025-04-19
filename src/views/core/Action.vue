<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const ICONS_CSS_CLASS_MAP = {
    forward: "fi-ss-angle-circle-right",
    back: "fi-ss-angle-circle-left",
    ok: "fi-ss-check-circle",
  };

  const emit = defineEmits(['click']);

  const props = defineProps({
    icon: String,
    disabled: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: false
    }
  });

  const iconClass = ICONS_CSS_CLASS_MAP[props.icon];

  function click() {
    if (props.disabled) return false;
    if (props.back) return router.go(-1);

    emit("click");
  }
</script>

<template>
  <div class="action" :class="{ disabled }" @click.prevent="click">
    <i class="fi" :class="iconClass"></i>
  </div>
</template>

<style scoped>
  .action {
    color: #9b59b6;
    font-size: 3rem;
    padding: 1.75rem;

    &.disabled {
      color: #7f8c8d;
    }
  }
</style>