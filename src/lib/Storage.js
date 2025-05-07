
const PREFIX = 'likalaro';

export default {
  set: (key, value) => {
    localStorage.setItem(`${PREFIX}.${key}`, value);
  },
  get: (key) => {
    return localStorage.getItem(`${PREFIX}.${key}`);
  }
};