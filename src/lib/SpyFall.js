import { ssrModuleExportsKey } from "vite/module-runner";
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

const SPY_LOCATION = 'Unknown';
const SPY_ROLE = 'Spy';

export const MIN_PLAYERS = 3;
export const MAX_PLAYERS = 8;

export default class {
  constructor({ seed, numberOfPlayers }) {
    this.randomizer = new Randomizer(seed);
    this.numberOfPlayers = numberOfPlayers;
  }

  location(index) {
    return this._location ||= this.#isSpy(index) ? SPY_LOCATION : this.#locationData().name;
  }

  role(playerIndex) {
    return this.#availableRoles()[playerIndex];
  }

  #isSpy(index) {
    return this.role(index) == SPY_ROLE;
  }

  #availableRoles() {
    if (this._availableRoles) return this._availableRoles;

    const allRoles = this.randomizer.shuffle(this.#locationData().roles);
    const regularRoles = allRoles.slice(0, this.numberOfPlayers - 1);
    
    this._availableRoles = this.randomizer.shuffle(regularRoles.concat([SPY_ROLE]));

    return this._availableRoles;
  }

  #locationData() {
    if (this._locationData) return this._locationData;

    const index = this.randomizer.get(0, LOCATIONS.length - 1);
    this._locationData = LOCATIONS[index];

    return this._locationData;
  }
}