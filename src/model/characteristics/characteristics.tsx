
import React from 'react';
import { Image } from '@chakra-ui/image';
import { staticDomain } from '../common';

export interface Characterictic {
  id: string;
  name: string;
  iconURL?:(size?:string) => JSX.Element
}

export type Faction = Characterictic

export type Attribute = Characterictic

export type Class = Characterictic

export type Role = Characterictic

export type CollectionStatus = Characterictic

export type Rating = Characterictic

export type Signature = Characterictic

export interface Artifact extends Characterictic {
  score?:number
}

export function getImageIcon(path:string, boxSize:string):JSX.Element {
  return <Image src={`${staticDomain}${path}`} boxSize={boxSize} />;  
} 