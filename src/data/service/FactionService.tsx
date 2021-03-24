import { API, graphqlOperation } from 'aws-amplify';
import { ListFactionsQuery } from '../../API';
import { Factions } from '../characteristics/factions';
import { Faction } from '../../model/characteristics';
import { createFaction } from '../../graphql/mutations';
import { listFactions } from '../../graphql/queries';


export async function fetchFactions():Promise<Array<Faction>> {
  try {
    const factionData = await (API.graphql(graphqlOperation(listFactions))) as { data: ListFactionsQuery };
    return Promise.resolve((factionData.data.listFactions?.items || []) as Array<Faction>);
  } catch (err) { 
    console.log('error fetching factions');
    return Promise.reject();
  }
}

export function createFactions():void {
  try {
    Factions.forEach(c => {
      API.graphql(graphqlOperation(createFaction, { input: c }));
    });
  }
  catch (err) { 
    console.log('error creating factions');
  }
}