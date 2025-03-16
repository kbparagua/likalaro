import { Randomizer } from "./Randomizer";

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

export const MIN_PLAYERS = 3;
export const MAX_PLAYERS = 8;

export default class {
  constructor({ seed, playerNumber }) {
    this.randomizer = new Randomizer(seed);
    this.playerNumber = playerNumber;
  }

  location() {
    if (this._location) return this._location;

    const index = this.randomizer.get(0, LOCATIONS.length - 1);
    this._location = LOCATIONS[index];

    return this._location;
  }

  role() {
    if (this._role) return this._role;

    const shuffled = this.randomizer.shuffle(this.location().roles);
    this._role = shuffled[this.playerNumber - 1];

    return this._role;
  }
}