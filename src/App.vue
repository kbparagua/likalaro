<script setup>
  import { RouterLink, RouterView } from 'vue-router'
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
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/spyfall">Spyfall</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
