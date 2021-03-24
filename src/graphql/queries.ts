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
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        readAt
        heroCollection
        compositions
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
