/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHero = /* GraphQL */ `
  subscription OnCreateHero {
    onCreateHero {
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
export const onUpdateHero = /* GraphQL */ `
  subscription OnUpdateHero {
    onUpdateHero {
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
export const onDeleteHero = /* GraphQL */ `
  subscription OnDeleteHero {
    onDeleteHero {
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
export const onCreateFaction = /* GraphQL */ `
  subscription OnCreateFaction {
    onCreateFaction {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFaction = /* GraphQL */ `
  subscription OnUpdateFaction {
    onUpdateFaction {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFaction = /* GraphQL */ `
  subscription OnDeleteFaction {
    onDeleteFaction {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAttribute = /* GraphQL */ `
  subscription OnCreateAttribute {
    onCreateAttribute {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAttribute = /* GraphQL */ `
  subscription OnUpdateAttribute {
    onUpdateAttribute {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAttribute = /* GraphQL */ `
  subscription OnDeleteAttribute {
    onDeleteAttribute {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
      id
      name
      iconURL
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComposition = /* GraphQL */ `
  subscription OnCreateComposition {
    onCreateComposition {
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
export const onUpdateComposition = /* GraphQL */ `
  subscription OnUpdateComposition {
    onUpdateComposition {
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
export const onDeleteComposition = /* GraphQL */ `
  subscription OnDeleteComposition {
    onDeleteComposition {
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
export const onCreateCompositionRole = /* GraphQL */ `
  subscription OnCreateCompositionRole {
    onCreateCompositionRole {
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
export const onUpdateCompositionRole = /* GraphQL */ `
  subscription OnUpdateCompositionRole {
    onUpdateCompositionRole {
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
export const onDeleteCompositionRole = /* GraphQL */ `
  subscription OnDeleteCompositionRole {
    onDeleteCompositionRole {
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
export const onCreateHeroRequirement = /* GraphQL */ `
  subscription OnCreateHeroRequirement {
    onCreateHeroRequirement {
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
export const onUpdateHeroRequirement = /* GraphQL */ `
  subscription OnUpdateHeroRequirement {
    onUpdateHeroRequirement {
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
export const onDeleteHeroRequirement = /* GraphQL */ `
  subscription OnDeleteHeroRequirement {
    onDeleteHeroRequirement {
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
export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink {
    onCreateLink {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink {
    onUpdateLink {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink {
    onDeleteLink {
      id
      label
      url
      createdAt
      updatedAt
    }
  }
`;
