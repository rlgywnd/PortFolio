import { atom } from 'recoil';

const darkmode = atom({
  key: 'darkmode',
  default: false,
});

export { darkmode };
