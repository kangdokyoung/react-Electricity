import {
    atom
  } from 'recoil';

  
export const modalTemperature = atom({
  key : 'main/modalTemp',
  default : false,
});

export const modalweekend = atom({
  key : 'main/modalWeek',
  default : false,
});

export const modalvariable = atom({
  key : 'main/ModalVar',
  default : false,
});
export const modalgrid = atom({
  key : 'main/ModalGrid',
  default : false,
});
export const modalserv= atom({
  key : 'main/ModalServ',
  default : false,
});