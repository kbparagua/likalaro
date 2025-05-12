import { Randomizer } from "./Randomizer";

const COLORS = [
  'red', 'blue', 'green', 'yellow', 'black',
  'white', 'purple', 'orange', 'pink', 'gray',
  'gold', 'silver', 'bronze', 'brown'
];

const ADJECTIVES = [
  'cool', 'amazing', 'gigantic', 'tiny', 'angry', 'itchy',
  'happy', 'elegant', 'happy', 'brave', 'clumsy', 'lazy',
  'mysterious', 'nervous', 'scary', 'calm', 'gentle',
  'jolly', 'nice', 'polite', 'proud', 'clean', 'fancy',
  'magnificent', 'plain', 'microscopic', 'large'
];

const ANIMALS = [
  'dog', 'cat', 'rat', 'pig', 'bird', 'worm', 'beetle', 'butterfly',
  'salmon', 'tuna', 'beaver', 'cow', 'woodpecker', 'bear', 'monkey',
  'lion', 'crab', 'eel', 'platypus', 'fish', 'horse', 'mouse',
  'sealion', 'shark', 'octopus', 'shrimp', 'lobster', 'snake',
  'deer', 'chicken', 'donkey', 'goat', 'alligator', 'cheetah',
  'ant', 'bee', 'sheep', 'turtle', 'camel', 'duck'
];

export default {
  generate: (seed) => {
    const randomizer = new Randomizer(seed);

    const color = COLORS[randomizer.get(0, COLORS.length - 1)];
    const adjective = ADJECTIVES[randomizer.get(0, ADJECTIVES.length - 1)];
    const animal = ANIMALS[randomizer.get(0, ANIMALS.length - 1)];
    const number = randomizer.get(0, 99);

    return `${color}-${adjective}-${animal}-${number}`;
  }
};