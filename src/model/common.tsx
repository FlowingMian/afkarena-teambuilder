export const staticDomain = 'https://dzdmdy5u49iim.cloudfront.net/';

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

export function generateBase62Id():string {
  return Math.random().toString(36).substr(2, 6);
}
