<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>LikaLaro</h1>

    <div class="games">
      <RouterLink to="/spyfall/new" class="game">
        <div class="image">
          <i class="fi fi-tr-spy"></i>
        </div>
        <div class="title">SpyFall</div>
      </RouterLink>

      <div class="game soon">
        <div class="image">
          <i class="fi fi-rr-joystick"></i>
        </div>
        <div class="title">Coming soon</div>
      </div>

      <div class="game soon">
        <div class="image">
          <i class="fi fi-rr-joystick"></i>
        </div>
        <div class="title">Coming soon</div>
      </div>

      <div class="game soon">
        <div class="image">
          <i class="fi fi-rr-joystick"></i>
        </div>
        <div class="title">Coming soon</div>
      </div>

      <div class="game soon">
        <div class="image">
          <i class="fi fi-rr-joystick"></i>
        </div>
        <div class="title">Coming soon</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 2rem;
  }

  .games {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    column-gap: 1rem;

    .game {
      display: flex;
      flex-direction: column;
      /* width: 40%; */
      flex-grow: 1;
      border-radius: 0.5rem;
      border: solid 1px var(--border-default);

      &.soon {
        opacity: 0.30;
      }

      .image {
        font-size: 4rem;
        text-align: center;
        color: var(--highlight1);
        border-radius: 0.5rem 0.5rem 0 0;
        background-color: var(--bg1);
        padding: 1rem;
      }

      .title {
        font-size: 1.5rem;
        text-align: center;
        padding: 0.75rem;
      }
    }
  }
</style>
