import { API, graphqlOperation } from 'aws-amplify';
import { ListRolesQuery } from '../../API';
import { Roles } from '../characteristics/roles';
import { Role } from '../../model/characteristics';
import { createRole } from '../../graphql/mutations';
import { listRoles } from '../../graphql/queries';


export async function fetchRoles():Promise<Array<Role>> {
  try {
    const roleData = await (API.graphql(graphqlOperation(listRoles))) as { data: ListRolesQuery };
    return Promise.resolve((roleData.data.listRoles?.items || []) as Array<Role>);
  } catch (err) { 
    console.log('error fetching roles');
    return Promise.reject();
  }
}

export function createRoles():void {
  try {
    Roles.forEach(c => {
      API.graphql(graphqlOperation(createRole, { input: c }));
    });
  }
  catch (err) { 
    console.log('error creating roles');
  }
}