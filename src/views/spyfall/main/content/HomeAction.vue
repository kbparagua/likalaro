<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Action from '@/views/core/Action.vue';
  import Window from '@/views/core/Window.vue';
  import Menu from '@/views/core/Menu.vue';
  import MenuItem from '@/views/core/MenuItem.vue';
  import HowToPlay from './HowToPlay.vue';

  const router = useRouter();

  const isMenuOpen = ref(false);
  function openMenu() { isMenuOpen.value = true; }
  function closeMenu() { isMenuOpen.value = false; }

  const isRulesOpen = ref(false);
  function openRules() { isRulesOpen.value = true; }
  function closeRules() { isRulesOpen.value = false; }

  function home() { router.push('/'); }
  function newGame() { router.push('/spyfall/new'); }
</script>

<template>
  <div>
    <Action icon="home" @click="openMenu"></Action>
    <Window :is-open="isMenuOpen" @close="closeMenu">
      <Menu>
        <MenuItem @click="home">Home</MenuItem>
        <MenuItem @click="newGame">New Game</MenuItem>
        <MenuItem @click="openRules">How to Play</MenuItem>
      </Menu>
    </Window>

    <Window :is-open="isRulesOpen" @close="closeRules">
      <HowToPlay />
    </Window>
  </div>
</template>
