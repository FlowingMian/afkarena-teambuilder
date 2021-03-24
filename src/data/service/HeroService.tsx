import { API, graphqlOperation } from 'aws-amplify';
import { CreateHeroInput, ListHerosQuery } from '../../API';
import Heroes from '../heroes';
import { Hero } from '../../model/heroes';
import { createHero } from '../../graphql/mutations';
import { listHeros } from '../../graphql/queries';


export async function fetchHeroes():Promise<Array<Hero>> {
  try {
    const heroData = await (API.graphql(graphqlOperation(listHeros))) as { data: ListHerosQuery };
    return Promise.resolve((heroData.data.listHeros?.items || []) as Array<Hero>);
  } catch (err) { 
    console.log('error fetching heroes');
    return Promise.reject();
  }
}

export function createHeroes():void {
  try {
    Heroes.forEach(c => {
      const input:CreateHeroInput = {
        id : c.id,
        name : c.name,
        nickname : c.nickname,
        portraitURL : c.portraitURL,
        heroFactionId : c.faction.id, 
        heroClassId : c.class.id, 
        heroAttributeId : c.attribute.id, 
      };
      API.graphql(graphqlOperation(createHero, { input }));
    });
  }
  catch (err) { 
    console.log('error creating heroes');
  }
}