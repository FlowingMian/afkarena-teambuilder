
import React, { useState } from 'react';
import { Profile } from '../../model/profile';

type ProfileContextProps = { 
  profile: Profile,
  updateProfile: (value:Profile) => void
};
const defaultProfileContext:ProfileContextProps = {
  profile: {
    heroCollection: [],
    compositions: {},
    version: 1
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateProfile: () => {},
};
export const ProfileContext = React.createContext<ProfileContextProps>(defaultProfileContext);

type ProfileContextProviderProps = {
  children: React.ReactNode
}
export const ProfileContextProvider = ({children}:ProfileContextProviderProps):JSX.Element =>{

  const PROFILE_KEY = 'currentProfile';

  function updateProfile(profile:Profile) {
    window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    setState({...state, profile});
  }

  const [state, setState] = useState(() => {
    const profileJson = window.localStorage.getItem(PROFILE_KEY);
    const profile = profileJson !== null ? JSON.parse(profileJson) as Profile : defaultProfileContext.profile;
    
    return {
      profile,
      updateProfile,
    } as ProfileContextProps;
  });

  const { Provider } = ProfileContext;
  return(
    <Provider value={state}>
      {children}
    </Provider>
  );
};