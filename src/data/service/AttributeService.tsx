import { API, graphqlOperation } from 'aws-amplify';
import { ListAttributesQuery } from '../../API';
import { Attributes } from '../characteristics/attributes';
import { Attribute } from '../../model/characteristics';
import { createAttribute } from '../../graphql/mutations';
import { listAttributes } from '../../graphql/queries';


export async function fetchAttributes():Promise<Array<Attribute>> {
  try {
    const attributeData = await (API.graphql(graphqlOperation(listAttributes))) as { data: ListAttributesQuery };
    return Promise.resolve((attributeData.data.listAttributes?.items || []) as Array<Attribute>);
  } catch (err) { 
    console.log('error fetching attributes');
    return Promise.reject();
  }
}

export function createAttributes():void {
  try {
    Attributes.forEach(c => {
      API.graphql(graphqlOperation(createAttribute, { input: c }));
    });
  }
  catch (err) { 
    console.log('error creating attributes');
  }
}