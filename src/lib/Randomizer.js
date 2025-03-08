import seedrandom from 'seedrandom'

export class Randomizer {
  constructor(seed) {
    this.rng = seedrandom(seed);
  }

  get() {
    return this.rng();
  }
}  