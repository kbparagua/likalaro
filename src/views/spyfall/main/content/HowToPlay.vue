<script setup>
</script>

<template>
  <div class="rules">
    <h1>How to play</h1>

    <h2>Overview</h2>
    <p>
      Each player is given a random role at a shared location, except one spy who doesn't know where they are.
      Players question each other to find the spy, while the spy tries to guess the location.
      The game ends if someone is accused of being a spy, time runs out, or the spy guesses the location.
    </p>

    <h2>Gameplay</h2>
    <ol>
      <li>The game leader starts the timer. <i>(Optional)</i></li>
      <li>The game leader proceeds by questioning another player.</li>
      <li>After the questioned player answered, it's their turn to ask someone else a question.</li>
      <li>Continue questioning each other until the game is over.</li>
    </ol>

    <h2>Questioning</h2>
    <ol>
      <li>You cannot ask the same person that questioned you.</li>
      <li>No follow up questions allowed.</li>
    </ol>

    <h2>Accusing a Spy</h2>
    <ol>
      <li>At any time, a player can accuse someone of being a spy. The player can say <i>"I believe (Player A) is the spy!"</i>.</li>
      <li>The game leader pauses the timer.</li>
      <li>Each player, except the accused, casts their vote if they agree or not.</li>
      <li>If all players agree, then the round ends. If not, the game leader resumes the timer and the round continues.</li>
      <li>A player can only accuse once per round.</li>
    </ol>

    <h2>Guessing the location</h2>
    <p>At any time, the spy can end the game and guess the location.</p>

    <h2>Round ends when</h2>
    <ol>
      <li>Spy stops the round to guess the location.</li>
      <li>All non-spy players agreed on the accused spy.</li>
      <li>Time runs out.</li>
    </ol>

    <h2>Spy wins when</h2>
    <ul>
      <li>A non-spy player is successfully accused of being a spy.</li>
      <li>The spy guesses the location correctly.</li>
      <li>Timer runs out.</li>
      <li>All players </li>
    </ul>
    
    <h2>Non-spy wins when</h2>
    <ul>
      <li>Players correctly guess the spy.</li>
      <li>Spy guesses the location incorrectly.</li>
    </ul>
  </div>
</template>

<style scoped>
  .rules {
    font-size: 1.5rem;

    h2 {
      font-size: 1.75rem;
    }

    ol {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
