
import React, { useState, useEffect } from 'react';
import { getCharactericticByName } from '../../model/characteristics/characteristics';
import { Factions } from '../../model/characteristics/factions';
import { Attributes } from '../../model/characteristics/attributes';
import { Classes } from '../../model/characteristics/classes';
import { Signatures } from '../../model/characteristics/signatures';
import { Furnitures } from '../../model/characteristics/furnitures';
import { getEngravingByNumber } from '../../model/characteristics/engravings';
import { DataSource, HeroPage } from '../../model/datasource';
import { Hero } from '../../model/heroes';
import { staticDomain } from '../../model/common';

const SOURCE_URL = 'https://dzdmdy5u49iim.cloudfront.net/notion-afkarena-latest.json';
// Update trigger URL : https://6d2dvbqrcj4lp3dv6ilxtdu7we0shivb.lambda-url.eu-central-1.on.aws/

const defaultDataSource:DataSource = {
  heroes: []
};

export const DataSourceContext = React.createContext<DataSource>(defaultDataSource);

type DataSourceContextProviderProps = {
  children: React.ReactNode
}
export const DataSourceContextProvider = ({children}:DataSourceContextProviderProps):JSX.Element =>{

  const [data, setData] = useState<DataSource>(defaultDataSource);

  function extractHeroFromPage(heroPage:HeroPage):Hero {
    const name:string = heroPage.properties.Name.title[0].plain_text;
    return {
      id: heroPage.id,
      name,
      nickname: [],
      faction: getCharactericticByName(Factions, heroPage.properties.Faction.select?.name),
      attribute: getCharactericticByName(Attributes, heroPage.properties.Attribute.select?.name),
      class: getCharactericticByName(Classes, heroPage.properties.Class.select?.name),
      portraitURL: `${staticDomain}heroes/${name.toLowerCase()}.jpg`,
      signature: getCharactericticByName(Signatures, heroPage.properties['>SI'].number?.toString()),
      furniture: getCharactericticByName(Furnitures, heroPage.properties['>FI'].number?.toString()),
      engraving: getEngravingByNumber(heroPage.properties['>EE'].number),
      artifacts: [],
    };
  }

  function extractData(heroPages:Array<HeroPage>):DataSource {
    const heroes = heroPages.map(heroPage => extractHeroFromPage(heroPage));
    return {
      heroes,
    };
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(SOURCE_URL);
      setData(extractData(await response.json()));
    }
    fetchData();
  }, []);

  const { Provider } = DataSourceContext;
  return(
    <Provider value={data}>
      {children}
    </Provider>
  );
};