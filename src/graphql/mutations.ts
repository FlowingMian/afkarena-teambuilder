/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHero = /* GraphQL */ `
  mutation CreateHero(
    $input: CreateHeroInput!
    $condition: ModelHeroConditionInput
  ) {
    createHero(input: $input, condition: $condition) {
      id
      name
      nickname
      faction {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      attribute {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      class {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      portraitURL
      createdAt
      updatedAt
    }
  }
`;
export const updateHero = /* GraphQL */ `
  mutation UpdateHero(
    $input: UpdateHeroInput!
    $condition: ModelHeroConditionInput
  ) {
    updateHero(input: $input, condition: $condition) {
      id
      name
      nickname
      faction {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      attribute {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      class {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      portraitURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteHero = /* GraphQL */ `
  mutation DeleteHero(
    $input: DeleteHeroInput!
    $condition: ModelHeroConditionInput
  ) {
    deleteHero(input: $input, condition: $condition) {
      id
      name
      nickname
      faction {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      attribute {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      class {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      portraitURL
      createdAt
      updatedAt
    }
  }
`;
export const createFaction = /* GraphQL */ `
  mutation CreateFaction(
    $input: CreateFactionInput!
    $condition: ModelFactionConditionInput
  ) {
    createFaction(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const updateFaction = /* GraphQL */ `
  mutation UpdateFaction(
    $input: UpdateFactionInput!
    $condition: ModelFactionConditionInput
  ) {
    updateFaction(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteFaction = /* GraphQL */ `
  mutation DeleteFaction(
    $input: DeleteFactionInput!
    $condition: ModelFactionConditionInput
  ) {
    deleteFaction(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const createAttribute = /* GraphQL */ `
  mutation CreateAttribute(
    $input: CreateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    createAttribute(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const updateAttribute = /* GraphQL */ `
  mutation UpdateAttribute(
    $input: UpdateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    updateAttribute(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteAttribute = /* GraphQL */ `
  mutation DeleteAttribute(
    $input: DeleteAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    deleteAttribute(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      readAt
      heroCollection
      compositions
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      readAt
      heroCollection
      compositions
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      readAt
      heroCollection
      compositions
      createdAt
      updatedAt
    }
  }
`;
