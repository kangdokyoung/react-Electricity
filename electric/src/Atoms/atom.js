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
export const modalfeature= atom({
  key : 'course/ModalFeature',
  default : false,
});
export const modallayer= atom({
  key : 'course/ModalLayer',
  default : false,
});
export const modalbatch= atom({
  key : 'course/ModalBatch',
  default : false,
});
export const modalvalidation= atom({
  key : 'course/ModalValidation',
  default : false,
});
export const modalscaler= atom({
  key : 'course/ModalScaler',
  default : false,
});
export const modalLSTM= atom({
  key : 'course/ModalLSTM',
  default : false,
});
export const modalresult= atom({
  key : 'course/ModalResult',
  default : false,
});