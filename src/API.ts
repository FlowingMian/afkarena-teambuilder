/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHeroInput = {
  id?: string | null,
  name: string,
  nickname: Array< string | null >,
  portraitURL?: string | null,
  heroFactionId: string,
  heroAttributeId: string,
  heroClassId: string,
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
  nickname?: Array< string | null >,
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

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  readAt: string,
  heroCollection: Array< string | null >,
  compositions?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  readAt?: ModelStringInput | null,
  heroCollection?: ModelIDInput | null,
  compositions?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
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

export type Profile = {
  __typename: "Profile",
  id?: string,
  name?: string,
  readAt?: string,
  heroCollection?: Array< string | null >,
  compositions?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  readAt?: string | null,
  heroCollection?: Array< string | null > | null,
  compositions?: string | null,
};

export type DeleteProfileInput = {
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

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  readAt?: ModelStringInput | null,
  heroCollection?: ModelIDInput | null,
  compositions?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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

export type CreateProfileMutationVariables = {
  input?: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input?: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input?: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
      nickname: Array< string | null >,
      faction:  {
        __typename: "Faction",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      attribute:  {
        __typename: "Attribute",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        iconURL?: string | null,
        createdAt: string,
        updatedAt: string,
      },
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

export type GetProfileQueryVariables = {
  id?: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      name: string,
      readAt: string,
      heroCollection: Array< string | null >,
      compositions?: string | null,
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    nickname: Array< string | null >,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    attribute:  {
      __typename: "Attribute",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      iconURL?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    readAt: string,
    heroCollection: Array< string | null >,
    compositions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
