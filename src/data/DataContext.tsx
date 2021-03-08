
import React, { useEffect, useState } from 'react';
import { Attribute } from '../model/characteristics';
import { fetchAttributes } from './service/AttributeService';

type DataContextProps = { 
  attributes: Array<Attribute>,
};

const defaultDataContext:DataContextProps = {
  attributes: [],
};

export const DataContext = React.createContext<DataContextProps>(defaultDataContext);

type DataContextProviderProps = {
  children: React.ReactNode
}

export const DataContextProvider = ({children}:DataContextProviderProps):JSX.Element =>{
  const [data, setData] = useState(defaultDataContext);
  
  useEffect(() =>{
    fetchAttributes()
      .then(attributes => {
        setData({
          attributes
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