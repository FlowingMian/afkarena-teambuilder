export const staticDomain = 'https://static.appcraft.tk/';

export interface Link {
  label:string;
  url:string;
}

export enum State {
  AVAILABLE,
  DISABLED,
  SELECTED,
  LOCKED,
}