
import React, { useState } from 'react';
import { Profile } from '../../model/profile';

type ProfileContextProps = { 
  profile: Profile|null,
  setProfile: (value:Profile) => void
};
const defaultProfileContext:ProfileContextProps = {
  profile: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setProfile: () => {},
};
export const ProfileContext = React.createContext<ProfileContextProps>(defaultProfileContext);

type ProfileContextProviderProps = {
  children: React.ReactNode
}
export const ProfileContextProvider = ({children}:ProfileContextProviderProps):JSX.Element =>{

  const PROFILE_KEY = 'currentProfile';

  const [state, setState] = useState(() => {
    const profileJson = window.localStorage.getItem(PROFILE_KEY);
    const profile = profileJson !== null ? JSON.parse(profileJson) : null;
    console.log('localStorage profile', profile);
    
    return {
      profile,
      setProfile: (profile) => {
        console.log('save to localStorage', profile);
        window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
        setState({...state, profile});
      }
    } as ProfileContextProps;
  });

  const { Provider } = ProfileContext;
  return(
    <Provider value={state}>
      {children}
    </Provider>
  );
};