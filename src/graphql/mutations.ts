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
export const createComposition = /* GraphQL */ `
  mutation CreateComposition(
    $input: CreateCompositionInput!
    $condition: ModelCompositionConditionInput
  ) {
    createComposition(input: $input, condition: $condition) {
      id
      name
      tags
      author
      links {
        id
        label
        url
        createdAt
        updatedAt
      }
      coreHeroes {
        id
        compositionId
        role {
          id
          name
          iconURL
          createdAt
          updatedAt
        }
        heroes {
          nextToken
        }
        createdAt
        updatedAt
      }
      flexHeroes {
        items {
          id
          compositionId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComposition = /* GraphQL */ `
  mutation UpdateComposition(
    $input: UpdateCompositionInput!
    $condition: ModelCompositionConditionInput
  ) {
    updateComposition(input: $input, condition: $condition) {
      id
      name
      tags
      author
      links {
        id
        label
        url
        createdAt
        updatedAt
      }
      coreHeroes {
        id
        compositionId
        role {
          id
          name
          iconURL
          createdAt
          updatedAt
        }
        heroes {
          nextToken
        }
        createdAt
        updatedAt
      }
      flexHeroes {
        items {
          id
          compositionId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComposition = /* GraphQL */ `
  mutation DeleteComposition(
    $input: DeleteCompositionInput!
    $condition: ModelCompositionConditionInput
  ) {
    deleteComposition(input: $input, condition: $condition) {
      id
      name
      tags
      author
      links {
        id
        label
        url
        createdAt
        updatedAt
      }
      coreHeroes {
        id
        compositionId
        role {
          id
          name
          iconURL
          createdAt
          updatedAt
        }
        heroes {
          nextToken
        }
        createdAt
        updatedAt
      }
      flexHeroes {
        items {
          id
          compositionId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCompositionRole = /* GraphQL */ `
  mutation CreateCompositionRole(
    $input: CreateCompositionRoleInput!
    $condition: ModelCompositionRoleConditionInput
  ) {
    createCompositionRole(input: $input, condition: $condition) {
      id
      compositionId
      role {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      heroes {
        items {
          id
          compositionRoleId
          recommended
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCompositionRole = /* GraphQL */ `
  mutation UpdateCompositionRole(
    $input: UpdateCompositionRoleInput!
    $condition: ModelCompositionRoleConditionInput
  ) {
    updateCompositionRole(input: $input, condition: $condition) {
      id
      compositionId
      role {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      heroes {
        items {
          id
          compositionRoleId
          recommended
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompositionRole = /* GraphQL */ `
  mutation DeleteCompositionRole(
    $input: DeleteCompositionRoleInput!
    $condition: ModelCompositionRoleConditionInput
  ) {
    deleteCompositionRole(input: $input, condition: $condition) {
      id
      compositionId
      role {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      heroes {
        items {
          id
          compositionRoleId
          recommended
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createHeroRequirement = /* GraphQL */ `
  mutation CreateHeroRequirement(
    $input: CreateHeroRequirementInput!
    $condition: ModelHeroRequirementConditionInput
  ) {
    createHeroRequirement(input: $input, condition: $condition) {
      id
      hero {
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
      compositionRoleId
      recommended
      createdAt
      updatedAt
    }
  }
`;
export const updateHeroRequirement = /* GraphQL */ `
  mutation UpdateHeroRequirement(
    $input: UpdateHeroRequirementInput!
    $condition: ModelHeroRequirementConditionInput
  ) {
    updateHeroRequirement(input: $input, condition: $condition) {
      id
      hero {
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
      compositionRoleId
      recommended
      createdAt
      updatedAt
    }
  }
`;
export const deleteHeroRequirement = /* GraphQL */ `
  mutation DeleteHeroRequirement(
    $input: DeleteHeroRequirementInput!
    $condition: ModelHeroRequirementConditionInput
  ) {
    deleteHeroRequirement(input: $input, condition: $condition) {
      id
      hero {
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
      compositionRoleId
      recommended
      createdAt
      updatedAt
    }
  }
`;
export const createLink = /* GraphQL */ `
  mutation CreateLink(
    $input: CreateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    createLink(input: $input, condition: $condition) {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateLink = /* GraphQL */ `
  mutation UpdateLink(
    $input: UpdateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    updateLink(input: $input, condition: $condition) {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteLink = /* GraphQL */ `
  mutation DeleteLink(
    $input: DeleteLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    deleteLink(input: $input, condition: $condition) {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
