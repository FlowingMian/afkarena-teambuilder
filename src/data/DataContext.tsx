
import React, { useEffect, useState } from 'react';
import { Attribute, Class, Faction, Role } from '../model/characteristics';
import { Hero } from '../model/heroes';
import { fetchAttributes } from './service/AttributeService';
import { fetchClasses } from './service/ClassService';
import { fetchFactions } from './service/FactionService';
import { fetchHeroes } from './service/HeroService';
import { fetchRoles } from './service/RoleService';

type DataContextProps = { 
  attributes: Array<Attribute>,
  classes: Array<Class>,
  factions: Array<Faction>,
  roles: Array<Role>,
  heroes: Array<Hero>,
};

const defaultDataContext:DataContextProps = {
  attributes: [],
  classes: [],
  factions: [],
  roles: [],
  heroes: [],
};

export const DataContext = React.createContext<DataContextProps>(defaultDataContext);

type DataContextProviderProps = {
  children: React.ReactNode
}

export const DataContextProvider = ({children}:DataContextProviderProps):JSX.Element =>{
  const [data, setData] = useState(defaultDataContext);
  
  useEffect(() =>{
    Promise.all([fetchAttributes(), fetchClasses(), fetchFactions(), fetchRoles(), fetchHeroes()])
      .then(([attributes, classes, factions, roles, heroes]) => {
        setData({
          attributes,
          classes,
          factions,
          roles,
          heroes
        });
      });
  },[]);

  const { Provider } = DataContext;
  return(
    <Provider value={data}>
      {children}
    </Provider>
  );
};