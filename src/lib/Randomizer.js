import seedrandom from 'seedrandom'

export class Randomizer {
  constructor(seed) {
    this.rng = seedrandom(seed);
  }

  get(min, max) {
    return Math.floor(this.rng() * (max - min + 1)) + min;
  }
}  