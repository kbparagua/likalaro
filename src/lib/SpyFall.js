import { ssrModuleExportsKey } from "vite/module-runner";
import { Randomizer } from "./Randomizer";

const LOCATIONS = [
  {
    name: 'Airport',
    roles: [
      'Pilot',
      'Co-Pilot',
      'Flight Attendant',
      'Immigration Officer',
      'Airplane Mechanic',
      'First Class Passenger',
      'Economy Class Passenger',
    ]
  },
  {
    name: 'Bank',
    roles: [
      'Branch Manager',
      'Security Guard',
      'Teller',
      'Customer',
      'VIP Customer',
      'Armored Car Driver',
      'Loan Officer',
    ]
  },
  {
    name: 'Casino',
    roles: [
      'Bouncer',
      'Dealer',
      'Gambler',
      'Manager',
      'Bartender',
      'Security Guard',
      'Cashier'
    ]
  },
  {
    name: 'Hospital',
    roles: [
      'Doctor',
      'Nurse',
      'Patient',
      'Intern',
      'Ambulance Driver',
      'Surgeon',
      'X-ray Technician'
    ]
  },
  {
    name: 'Police Station',
    roles: [
      'Police',
      'Chief of Police',
      'Detective',
      'Lawyer',
      'Criminal',
      'News Reporter',
      'Victim',
    ]
  },
  {
    name: 'Corporate Office',
    roles: [
      'CEO',
      'HR Manager',
      'Accountant',
      'Liaison Officer',
      'Intern',
      'Tech Support Officer',
      'Receptionist',
    ]
  },
  {
    name: 'Hotel',
    roles: [
      'Security Guard',
      'Doorman',
      'Hotel Manager',
      'Receptionist',
      'Housekeeper',
      'Guest',
      'Maintenance Technician'
    ]
  },
  {
    name: 'Movie Studio',
    roles: [
      'Cameraman',
      'Director',
      'Actor',
      'Sound Engineer',
      'Stuntman',
      'Costume Designer',
      'Producer'
    ]
  },
  {
    name: 'Restaurant',
    roles: [
      'Head Chef',
      'Waiter',
      'Food Critic',
      'Customer',
      'Musician',
      'Restaurant Manager',
      'Dishwasher'
    ]
  },
  {
    name: 'University',
    roles: [
      'Principal',
      'Janitor',
      'Security Guard',
      'Student',
      'Gym Teacher',
      'Varsity Player',
      'School Nurse'
    ]
  },
  {
    name: 'Supermarket',
    roles: [
      'Customer',
      'Cashier',
      'Butcher',
      'Promodiser',
      'Security Guard',
      'Bagger',
      'Shelf Stocker'
    ]
  },
  {
    name: 'Basketball Court',
    roles: [
      'Coach',
      'Referee',
      'Star Player',
      'Three-pointer',
      'Rebounder',
      'Team Captain',
      'Fan'
    ]
  },
  {
    name: 'Department Store',
    roles: [
      'Salesperson',
      'Promodiser',
      'Customer',
      'Cashier',
      'Security Guard',
      'Gift Wrapping Assistant',
      'Baggage Counter Assistant'
    ]
  },
  {
    name: 'Beach Resort',
    roles: [
      'Scuba Diver',
      'Lifeguard',
      'Surf Instructor',
      'Resort Staff',
      'Resort Manager',
      'Massage Therapist',
      'Guest'
    ]
  },
  {
    name: 'Amusement Park',
    roles: [
      'Ride Operator',
      'Security Officer',
      'Food Vendor',
      'Janitor',
      'Parent',
      'Mascot Performer',
      'Balloon Vendor',
    ]
  },
  {
    name: 'Zoo',
    roles: [
      'Tour Guide',
      'Student',
      'Zookeeper',
      'Gardener',
      'Veterinarian',
      'Researcher',
      'Photographer'
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

  nextSeed() {
    return this.randomizer.nextSeed;
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