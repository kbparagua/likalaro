<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import { Randomizer } from './lib/Randomizer';

  const seed = Math.round((new Date()).getTime() * Math.random()).toString();
  // const seed = prompt('Enter seed');
  const r = new Randomizer(seed);

  const LOCATIONS = [
    {
      name: 'Airplane',
      roles: [
        'Pilot',
        'Co-Pilot',
        'Stewardess',
        'First Class Passenger'
      ]
    },
    {
      name: 'Bank',
      roles: [
        'Manager',
        'Security Guard',
        'Teller',
        'Customer'
      ]
    },
    {
      name: 'Casino',
      roles: [
        'Bouncer',
        'Dealer',
        'Gambler',
        'Manager'
      ]
    },
    {
      name: 'Hospital',
      roles: [
        'Doctor',
        'Nurse',
        'Patient',
        'Intern'
      ]
    },
    {
      name: 'Police Station',
      roles: [
        'Police',
        'Detective',
        'Lawyer',
        'Journalist'
      ]
    }
  ];

  const p1 = { name: 'Player 1' };
  const p2 = { name: 'Player 2' };
  const p3 = { name: 'Player 3' };
  const p4 = { name: 'Player 4' };

  const index = r.get(0, LOCATIONS.length - 1);
  const location = LOCATIONS[index];

  console.log("Seed: ", seed);
  console.log("Location: ", location.name);

  const roles = r.shuffle(location.roles);

  p1.role = roles[0];
  p2.role = roles[1];
  p3.role = roles[2];
  p4.role = roles[3];

  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
