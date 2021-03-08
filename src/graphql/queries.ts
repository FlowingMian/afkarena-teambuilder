/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHero = /* GraphQL */ `
  query GetHero($id: ID!) {
    getHero(id: $id) {
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
export const listHeros = /* GraphQL */ `
  query ListHeros(
    $filter: ModelHeroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFaction = /* GraphQL */ `
  query GetFaction($id: ID!) {
    getFaction(id: $id) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const listFactions = /* GraphQL */ `
  query ListFactions(
    $filter: ModelFactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttribute = /* GraphQL */ `
  query GetAttribute($id: ID!) {
    getAttribute(id: $id) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const listAttributes = /* GraphQL */ `
  query ListAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        iconURL
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComposition = /* GraphQL */ `
  query GetComposition($id: ID!) {
    getComposition(id: $id) {
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
export const listCompositions = /* GraphQL */ `
  query ListCompositions(
    $filter: ModelCompositionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompositions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        flexHeroes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompositionRole = /* GraphQL */ `
  query GetCompositionRole($id: ID!) {
    getCompositionRole(id: $id) {
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
export const listCompositionRoles = /* GraphQL */ `
  query ListCompositionRoles(
    $filter: ModelCompositionRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompositionRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getHeroRequirement = /* GraphQL */ `
  query GetHeroRequirement($id: ID!) {
    getHeroRequirement(id: $id) {
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
export const listHeroRequirements = /* GraphQL */ `
  query ListHeroRequirements(
    $filter: ModelHeroRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeroRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hero {
          id
          name
          nickname
          portraitURL
          createdAt
          updatedAt
        }
        compositionRoleId
        recommended
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLink = /* GraphQL */ `
  query GetLink($id: ID!) {
    getLink(id: $id) {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
