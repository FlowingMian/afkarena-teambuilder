/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHeroInput = {
  id?: string | null,
  name: string,
  nickname?: Array< string | null > | null,
  portraitURL?: string | null,
  heroFactionId?: string | null,
  heroAttributeId?: string | null,
  heroClassId?: string | null,
};

export type ModelHeroConditionInput = {
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  portraitURL?: ModelStringInput | null,
  and?: Array< ModelHeroConditionInput | null > | null,
  or?: Array< ModelHeroConditionInput | null > | null,
  not?: ModelHeroConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Hero = {
  __typename: "Hero",
  id?: string,
  name?: string,
  nickname?: Array< string | null > | null,
  faction?: Faction,
  attribute?: Attribute,
  class?: Class,
  portraitURL?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Faction = {
  __typename: "Faction",
  id?: string,
  name?: string,
  iconURL?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Attribute = {
  __typename: "Attribute",
  id?: string,
  name?: string,
  iconURL?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Class = {
  __typename: "Class",
  id?: string,
  name?: string,
  iconURL?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateHeroInput = {
  id: string,
  name?: string | null,
  nickname?: Array< string | null > | null,
  portraitURL?: string | null,
  heroFactionId?: string | null,
  heroAttributeId?: string | null,
  heroClassId?: string | null,
};

export type DeleteHeroInput = {
  id?: string | null,
};

export type CreateFactionInput = {
  id?: string | null,
  name: string,
  iconURL?: string | null,
};

export type ModelFactionConditionInput = {
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelFactionConditionInput | null > | null,
  or?: Array< ModelFactionConditionInput | null > | null,
  not?: ModelFactionConditionInput | null,
};

export type UpdateFactionInput = {
  id: string,
  name?: string | null,
  iconURL?: string | null,
};

export type DeleteFactionInput = {
  id?: string | null,
};

export type CreateAttributeInput = {
  id?: string | null,
  name: string,
  iconURL?: string | null,
};

export type ModelAttributeConditionInput = {
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelAttributeConditionInput | null > | null,
  or?: Array< ModelAttributeConditionInput | null > | null,
  not?: ModelAttributeConditionInput | null,
};

export type UpdateAttributeInput = {
  id: string,
  name?: string | null,
  iconURL?: string | null,
};

export type DeleteAttributeInput = {
  id?: string | null,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  iconURL?: string | null,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  iconURL?: string | null,
};

export type DeleteClassInput = {
  id?: string | null,
};

export type CreateRoleInput = {
  id?: string | null,
  name: string,
  iconURL?: string | null,
};

export type ModelRoleConditionInput = {
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelRoleConditionInput | null > | null,
  or?: Array< ModelRoleConditionInput | null > | null,
  not?: ModelRoleConditionInput | null,
};

export type Role = {
  __typename: "Role",
  id?: string,
  name?: string,
  iconURL?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateRoleInput = {
  id: string,
  name?: string | null,
  iconURL?: string | null,
};

export type DeleteRoleInput = {
  id?: string | null,
};

export type CreateCompositionInput = {
  id?: string | null,
  name: string,
  tags?: Array< string | null > | null,
  author: string,
  compositionCoreHeroesId?: string | null,
};

export type ModelCompositionConditionInput = {
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelCompositionConditionInput | null > | null,
  or?: Array< ModelCompositionConditionInput | null > | null,
  not?: ModelCompositionConditionInput | null,
};

export type Composition = {
  __typename: "Composition",
  id?: string,
  name?: string,
  tags?: Array< string | null > | null,
  author?: string,
  links?:  Array<Link | null >,
  coreHeroes?: CompositionRole,
  flexHeroes?: ModelCompositionRoleConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type Link = {
  __typename: "Link",
  id?: string,
  label?: string,
  url?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type CompositionRole = {
  __typename: "CompositionRole",
  id?: string,
  compositionId?: string,
  role?: Role,
  heroes?: ModelHeroRequirementConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelHeroRequirementConnection = {
  __typename: "ModelHeroRequirementConnection",
  items?:  Array<HeroRequirement | null > | null,
  nextToken?: string | null,
};

export type HeroRequirement = {
  __typename: "HeroRequirement",
  id?: string,
  hero?: Hero,
  compositionRoleId?: string,
  recommended?: boolean | null,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelCompositionRoleConnection = {
  __typename: "ModelCompositionRoleConnection",
  items?:  Array<CompositionRole | null > | null,
  nextToken?: string | null,
};

export type UpdateCompositionInput = {
  id: string,
  name?: string | null,
  tags?: Array< string | null > | null,
  author?: string | null,
  compositionCoreHeroesId?: string | null,
};

export type DeleteCompositionInput = {
  id?: string | null,
};

export type CreateCompositionRoleInput = {
  id?: string | null,
  compositionId: string,
  compositionRoleRoleId: string,
};

export type ModelCompositionRoleConditionInput = {
  compositionId?: ModelIDInput | null,
  and?: Array< ModelCompositionRoleConditionInput | null > | null,
  or?: Array< ModelCompositionRoleConditionInput | null > | null,
  not?: ModelCompositionRoleConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCompositionRoleInput = {
  id: string,
  compositionId?: string | null,
  compositionRoleRoleId?: string | null,
};

export type DeleteCompositionRoleInput = {
  id?: string | null,
};

export type CreateHeroRequirementInput = {
  id?: string | null,
  compositionRoleId: string,
  recommended?: boolean | null,
  heroRequirementHeroId: string,
};

export type ModelHeroRequirementConditionInput = {
  compositionRoleId?: ModelIDInput | null,
  recommended?: ModelBooleanInput | null,
  and?: Array< ModelHeroRequirementConditionInput | null > | null,
  or?: Array< ModelHeroRequirementConditionInput | null > | null,
  not?: ModelHeroRequirementConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateHeroRequirementInput = {
  compositionRoleId?: string | null,
  recommended?: boolean | null,
  heroRequirementHeroId?: string | null,
};

export type DeleteHeroRequirementInput = {
  id?: string | null,
};

export type CreateLinkInput = {
  id?: string | null,
  label: string,
  url: string,
};

export type ModelLinkConditionInput = {
  label?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
};

export type UpdateLinkInput = {
  label?: string | null,
  url?: string | null,
};

export type DeleteLinkInput = {
  id?: string | null,
};

export type ModelHeroFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  portraitURL?: ModelStringInput | null,
  and?: Array< ModelHeroFilterInput | null > | null,
  or?: Array< ModelHeroFilterInput | null > | null,
  not?: ModelHeroFilterInput | null,
};

export type ModelHeroConnection = {
  __typename: "ModelHeroConnection",
  items?:  Array<Hero | null > | null,
  nextToken?: string | null,
};

export type ModelFactionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelFactionFilterInput | null > | null,
  or?: Array< ModelFactionFilterInput | null > | null,
  not?: ModelFactionFilterInput | null,
};

export type ModelFactionConnection = {
  __typename: "ModelFactionConnection",
  items?:  Array<Faction | null > | null,
  nextToken?: string | null,
};

export type ModelAttributeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelAttributeFilterInput | null > | null,
  or?: Array< ModelAttributeFilterInput | null > | null,
  not?: ModelAttributeFilterInput | null,
};

export type ModelAttributeConnection = {
  __typename: "ModelAttributeConnection",
  items?:  Array<Attribute | null > | null,
  nextToken?: string | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items?:  Array<Class | null > | null,
  nextToken?: string | null,
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  iconURL?: ModelStringInput | null,
  and?: Array< ModelRoleFilterInput | null > | null,
  or?: Array< ModelRoleFilterInput | null > | null,
  not?: ModelRoleFilterInput | null,
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection",
  items?:  Array<Role | null > | null,
  nextToken?: string | null,
};

export type ModelCompositionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelCompositionFilterInput | null > | null,
  or?: Array< ModelCompositionFilterInput | null > | null,
  not?: ModelCompositionFilterInput | null,
};

export type ModelCompositionConnection = {
  __typename: "ModelCompositionConnection",
  items?:  Array<Composition | null > | null,
  nextToken?: string | null,
};

export type ModelCompositionRoleFilterInput = {
  id?: ModelIDInput | null,
  compositionId?: ModelIDInput | null,
  and?: Array< ModelCompositionRoleFilterInput | null > | null,
  or?: Array< ModelCompositionRoleFilterInput | null > | null,
  not?: ModelCompositionRoleFilterInput | null,
};

export type ModelHeroRequirementFilterInput = {
  compositionRoleId?: ModelIDInput | null,
  recommended?: ModelBooleanInput | null,
  and?: Array< ModelHeroRequirementFilterInput | null > | null,
  or?: Array< ModelHeroRequirementFilterInput | null > | null,
  not?: ModelHeroRequirementFilterInput | null,
};

export type ModelLinkFilterInput = {
  label?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export type ModelLinkConnection = {
  __typename: "ModelLinkConnection",
  items?:  Array<Link | null > | null,
  nextToken?: string | null,
};

export type CreateHeroMutationVariables = {
  input?: CreateHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type CreateHeroMutation = {
  createHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHeroMutationVariables = {
  input?: UpdateHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type UpdateHeroMutation = {
  updateHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHeroMutationVariables = {
  input?: DeleteHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type DeleteHeroMutation = {
  deleteHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFactionMutationVariables = {
  input?: CreateFactionInput,
  condition?: ModelFactionConditionInput | null,
};

export type CreateFactionMutation = {
  createFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFactionMutationVariables = {
  input?: UpdateFactionInput,
  condition?: ModelFactionConditionInput | null,
};

export type UpdateFactionMutation = {
  updateFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFactionMutationVariables = {
  input?: DeleteFactionInput,
  condition?: ModelFactionConditionInput | null,
};

export type DeleteFactionMutation = {
  deleteFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttributeMutationVariables = {
  input?: CreateAttributeInput,
  condition?: ModelAttributeConditionInput | null,
};

export type CreateAttributeMutation = {
  createAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttributeMutationVariables = {
  input?: UpdateAttributeInput,
  condition?: ModelAttributeConditionInput | null,
};

export type UpdateAttributeMutation = {
  updateAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttributeMutationVariables = {
  input?: DeleteAttributeInput,
  condition?: ModelAttributeConditionInput | null,
};

export type DeleteAttributeMutation = {
  deleteAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input?: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  input?: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  input?: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoleMutationVariables = {
  input?: CreateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type CreateRoleMutation = {
  createRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoleMutationVariables = {
  input?: UpdateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type UpdateRoleMutation = {
  updateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoleMutationVariables = {
  input?: DeleteRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type DeleteRoleMutation = {
  deleteRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompositionMutationVariables = {
  input?: CreateCompositionInput,
  condition?: ModelCompositionConditionInput | null,
};

export type CreateCompositionMutation = {
  createComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompositionMutationVariables = {
  input?: UpdateCompositionInput,
  condition?: ModelCompositionConditionInput | null,
};

export type UpdateCompositionMutation = {
  updateComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompositionMutationVariables = {
  input?: DeleteCompositionInput,
  condition?: ModelCompositionConditionInput | null,
};

export type DeleteCompositionMutation = {
  deleteComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompositionRoleMutationVariables = {
  input?: CreateCompositionRoleInput,
  condition?: ModelCompositionRoleConditionInput | null,
};

export type CreateCompositionRoleMutation = {
  createCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompositionRoleMutationVariables = {
  input?: UpdateCompositionRoleInput,
  condition?: ModelCompositionRoleConditionInput | null,
};

export type UpdateCompositionRoleMutation = {
  updateCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompositionRoleMutationVariables = {
  input?: DeleteCompositionRoleInput,
  condition?: ModelCompositionRoleConditionInput | null,
};

export type DeleteCompositionRoleMutation = {
  deleteCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHeroRequirementMutationVariables = {
  input?: CreateHeroRequirementInput,
  condition?: ModelHeroRequirementConditionInput | null,
};

export type CreateHeroRequirementMutation = {
  createHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHeroRequirementMutationVariables = {
  input?: UpdateHeroRequirementInput,
  condition?: ModelHeroRequirementConditionInput | null,
};

export type UpdateHeroRequirementMutation = {
  updateHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHeroRequirementMutationVariables = {
  input?: DeleteHeroRequirementInput,
  condition?: ModelHeroRequirementConditionInput | null,
};

export type DeleteHeroRequirementMutation = {
  deleteHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLinkMutationVariables = {
  input?: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input?: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input?: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetHeroQueryVariables = {
  id?: string,
};

export type GetHeroQuery = {
  getHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHerosQueryVariables = {
  filter?: ModelHeroFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHerosQuery = {
  listHeros?:  {
    __typename: "ModelHeroConnection",
    items?:  Array< {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFactionQueryVariables = {
  id?: string,
};

export type GetFactionQuery = {
  getFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFactionsQueryVariables = {
  filter?: ModelFactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFactionsQuery = {
  listFactions?:  {
    __typename: "ModelFactionConnection",
    items?:  Array< {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAttributeQueryVariables = {
  id?: string,
};

export type GetAttributeQuery = {
  getAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttributesQueryVariables = {
  filter?: ModelAttributeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttributesQuery = {
  listAttributes?:  {
    __typename: "ModelAttributeConnection",
    items?:  Array< {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id?: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClasssQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClasssQuery = {
  listClasss?:  {
    __typename: "ModelClassConnection",
    items?:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoleQueryVariables = {
  id?: string,
};

export type GetRoleQuery = {
  getRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "ModelRoleConnection",
    items?:  Array< {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCompositionQueryVariables = {
  id?: string,
};

export type GetCompositionQuery = {
  getComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompositionsQueryVariables = {
  filter?: ModelCompositionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompositionsQuery = {
  listCompositions?:  {
    __typename: "ModelCompositionConnection",
    items?:  Array< {
      __typename: "Composition",
      id: string,
      name: string,
      tags?: Array< string | null > | null,
      author: string,
      links:  Array< {
        __typename: "Link",
        id: string,
        label: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      coreHeroes?:  {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      flexHeroes?:  {
        __typename: "ModelCompositionRoleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCompositionRoleQueryVariables = {
  id?: string,
};

export type GetCompositionRoleQuery = {
  getCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompositionRolesQueryVariables = {
  filter?: ModelCompositionRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompositionRolesQuery = {
  listCompositionRoles?:  {
    __typename: "ModelCompositionRoleConnection",
    items?:  Array< {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHeroRequirementQueryVariables = {
  id?: string,
};

export type GetHeroRequirementQuery = {
  getHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHeroRequirementsQueryVariables = {
  filter?: ModelHeroRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHeroRequirementsQuery = {
  listHeroRequirements?:  {
    __typename: "ModelHeroRequirementConnection",
    items?:  Array< {
      __typename: "HeroRequirement",
      id: string,
      hero:  {
        __typename: "Hero",
        id: string,
        name: string,
        nickname?: Array< string | null > | null,
        portraitURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      compositionRoleId: string,
      recommended?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLinkQueryVariables = {
  id?: string,
};

export type GetLinkQuery = {
  getLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinkConnection",
    items?:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateHeroSubscription = {
  onCreateHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHeroSubscription = {
  onUpdateHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHeroSubscription = {
  onDeleteHero?:  {
    __typename: "Hero",
    id: string,
    name: string,
    nickname?: Array< string | null > | null,
    faction?:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attribute?:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    portraitURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFactionSubscription = {
  onCreateFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFactionSubscription = {
  onUpdateFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFactionSubscription = {
  onDeleteFaction?:  {
    __typename: "Faction",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttributeSubscription = {
  onCreateAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttributeSubscription = {
  onUpdateAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttributeSubscription = {
  onDeleteAttribute?:  {
    __typename: "Attribute",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoleSubscription = {
  onCreateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    iconURL?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompositionSubscription = {
  onCreateComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompositionSubscription = {
  onUpdateComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompositionSubscription = {
  onDeleteComposition?:  {
    __typename: "Composition",
    id: string,
    name: string,
    tags?: Array< string | null > | null,
    author: string,
    links:  Array< {
      __typename: "Link",
      id: string,
      label: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    coreHeroes?:  {
      __typename: "CompositionRole",
      id: string,
      compositionId: string,
      role:  {
        __typename: "Role",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      heroes?:  {
        __typename: "ModelHeroRequirementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    flexHeroes?:  {
      __typename: "ModelCompositionRoleConnection",
      items?:  Array< {
        __typename: "CompositionRole",
        id: string,
        compositionId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompositionRoleSubscription = {
  onCreateCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompositionRoleSubscription = {
  onUpdateCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompositionRoleSubscription = {
  onDeleteCompositionRole?:  {
    __typename: "CompositionRole",
    id: string,
    compositionId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    heroes?:  {
      __typename: "ModelHeroRequirementConnection",
      items?:  Array< {
        __typename: "HeroRequirement",
        id: string,
        compositionRoleId: string,
        recommended?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHeroRequirementSubscription = {
  onCreateHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHeroRequirementSubscription = {
  onUpdateHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHeroRequirementSubscription = {
  onDeleteHeroRequirement?:  {
    __typename: "HeroRequirement",
    id: string,
    hero:  {
      __typename: "Hero",
      id: string,
      name: string,
      nickname?: Array< string | null > | null,
      faction?:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attribute?:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      class?:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      portraitURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    compositionRoleId: string,
    recommended?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink?:  {
    __typename: "Link",
    id: string,
    label: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
