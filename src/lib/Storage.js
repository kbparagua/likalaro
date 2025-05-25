
const PREFIX = 'likalaro';

export default {
  set: (key, value) => {
    sessionStorage.setItem(`${PREFIX}.${key}`, value);
  },
  get: (key) => {
    return sessionStorage.getItem(`${PREFIX}.${key}`);
  }
};