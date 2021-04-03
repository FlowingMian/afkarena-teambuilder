
import React from 'react';
import { Image } from '@chakra-ui/image';
import { staticDomain } from '../common';

export interface Characterictic {
  id: string;
  name: string;
  iconURL?:JSX.Element
}

export type Faction = Characterictic

export type Attribute = Characterictic

export type Class = Characterictic

export type Role = Characterictic

export type CollectionStatus = Characterictic

export type Rating = Characterictic

export type Signature = Characterictic

export function getImageIcon(path:string):JSX.Element {
  return <Image src={`${staticDomain}${path}`} boxSize='20px' />;  
} 