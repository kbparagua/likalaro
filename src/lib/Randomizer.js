import seedrandom from 'seedrandom'

export class Randomizer {
  constructor(seed) {
    this.rng = seedrandom(seed);
    this.nextSeed = this.#generateNextSeed();
  }

  get(min, max) {
    // SEE: https://stackoverflow.com/a/1527820
    return Math.floor(this.rng() * (max - min + 1)) + min;
  }

  // SEE: https://stackoverflow.com/a/2450976
  shuffle(list) {
    const shuffled = [...list];
    let currentIndex = list.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(this.rng() * currentIndex);
      currentIndex--;

      // Swap
      [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
    }

    return shuffled;
  }

  #generateNextSeed() {
    return this.rng().toString().split('.')[1];
  }
}  