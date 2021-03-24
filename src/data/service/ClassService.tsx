import { API, graphqlOperation } from 'aws-amplify';
import { ListClasssQuery } from '../../API';
import { Classes } from '../characteristics/classes';
import { Class } from '../../model/characteristics';
import { createClass } from '../../graphql/mutations';
import { listClasss } from '../../graphql/queries';


export async function fetchClasses():Promise<Array<Class>> {
  try {
    const classData = await (API.graphql(graphqlOperation(listClasss))) as { data: ListClasssQuery };
    return Promise.resolve((classData.data.listClasss?.items || []) as Array<Class>);
  } catch (err) { 
    console.log('error fetching classes');
    return Promise.reject();
  }
}

export function createClasses():void {
  try {
    Classes.forEach(c => {
      API.graphql(graphqlOperation(createClass, { input: c }));
    });
  }
  catch (err) { 
    console.log('error creating classes');
  }
}