/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hero } from './heroes';

export interface Property {
  id: string;
  type: string;
}

export interface NumberProperty extends Property {
  number?: number;
}

export interface SelectValue {
  id: string;
  name: string;
}
export interface SelectProperty extends Property {
  select?: SelectValue;
}

export interface NumberFormulaProperty {
  formula: NumberFormula;
}
export interface NumberFormula {
  type: string;
  number: number;
}
export interface BooleanFormulaProperty {
  formula: BooleanFormula;
}
export interface BooleanFormula {
  type: string;
  boolean: boolean;
}


export interface Name extends Property {
  title: any[];
}
export type Usage = SelectProperty;
export type StatsHungry = SelectProperty;

export type SI = NumberProperty;
export type FI = NumberProperty;
export type EE = NumberProperty;
export type Gear = SelectProperty;

export type SIUpgrade = BooleanFormulaProperty;
export type FIUpgrade = BooleanFormulaProperty;
export type EEUpgrade = BooleanFormulaProperty;
export type WeaponUpgrade = BooleanFormulaProperty;

export type OverallScore = NumberFormulaProperty;
export type PvEScore = NumberProperty;
export type PvPScore = NumberProperty;
export type CRScore = NumberProperty;

export type PvEComp = SelectProperty;
export type Faction = SelectProperty;
export type Attribute = SelectProperty;
export type Class = SelectProperty;

export interface CoreShardsNodes extends Property {
  rich_text: any[];
}

export interface Properties {
  'Name': Name;
  'Usage': Usage;
  'Stats Hungry': StatsHungry;
  '>SI': SI;
  '>FI': FI;
  '>EE': EE;
  '>Gear': Gear;
  'SI': SI;
  'FI': FI;
  'EE': EE;
  'Gear': Gear;
  'SI Upgrade': SIUpgrade;
  'FI Upgrade': FIUpgrade;
  'EE Upgrade': EEUpgrade;
  'Weapon Upgrade': WeaponUpgrade;
  'Overall Score': OverallScore;
  'PvE Comp': PvEComp;
  'PvP Score': PvPScore;
  'CR Score': CRScore;
  'PvE Score': PvEScore;
  'Faction': Faction;
  'Attribute': Attribute;
  'Class': Class;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface HeroPage {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover?: any;
  icon?: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface DataSource { 
heroes: Array<Hero>,
}