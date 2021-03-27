import { API, graphqlOperation } from 'aws-amplify';
import { GetProfileQuery } from '../../API';
import { createProfile } from '../../graphql/mutations';
import { getProfile } from '../../graphql/queries';
import { Profile } from '../../model/profile';


export async function fetchProfile():Promise<Profile> {
  try {
    const response = await (API.graphql(graphqlOperation(getProfile))) as { data: GetProfileQuery };
    return Promise.resolve({...response.data.getProfile, readonly:true} as Profile);
  } catch (err) { 
    console.log('error fetching profile');
    return Promise.reject();
  }
}

export function createNewProfile(profile:Profile):void {
  try {
    API.graphql(graphqlOperation(createProfile, { input: profile }));
  }
  catch (err) { 
    console.log('error creating profile');
  }
}