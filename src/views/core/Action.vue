<script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import Confirm from './Confirm.vue';

  const router = useRouter();

  const ICONS_CSS_CLASS_MAP = {
    home: "fi fi-sr-house-blank",
    forward: "fi-ss-angle-circle-right",
    back: "fi-ss-angle-circle-left",
    ok: "fi-ss-check-circle",
    location: "fi-ss-marker"
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
    },
    confirm: {
      type: String,
      default: null
    }
  });

  const confirmState = reactive({
    visible: false,
    show() { this.visible = true; },
    hide() { this.visible = false; }
  });

  const iconClass = ICONS_CSS_CLASS_MAP[props.icon];

  function confirmed() {
    emit("click");
  }

  function click() {
    if (props.disabled) return false;
    if (props.back) return router.go(-1);
    if (props.confirm) return confirmState.show();

    emit("click");
  }
</script>

<template>
  <div class="action" :class="{ disabled }" @click.prevent="click">
    <i class="fi" :class="iconClass"></i>
  </div>
  <Confirm
    v-if="confirm"
    :message="confirm"
    :visible="confirmState.visible"
    @yes="confirmed"
    @no="confirmState.hide()">
  </Confirm>
</template>

<style scoped>
  .action {
    color: var(--actions-standard-text);
    font-size: 2.5rem;
    padding: 1.75rem;

    &.disabled {
      opacity: 0.3;
    }
  }
</style>