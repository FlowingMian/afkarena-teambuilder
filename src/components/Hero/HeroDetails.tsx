import React from 'react';
import {HStack, Image, Tooltip, Link, Switch, Heading, VStack, Text, Grid, GridItem, Center } from '@chakra-ui/react';
import { Hero } from '../../model/heroes';
import CharactericticBox from '../Characteristic/CharacteristicBox';
import { BoxCardStyle } from '../../theme/styles';
import { NotOwned, Owned } from '../../model/characteristics/collectionStatuses';

type HeroDetailsProps = {
  hero: Hero;
  isOwned: boolean
  onChange:(e:React.ChangeEvent<HTMLInputElement>, hero:Hero) => void;
};

const PORTRAIT_SIZE = '5rem';

function HeroDetails({ hero, isOwned, onChange }: HeroDetailsProps):JSX.Element {

  const gridStyle= {
    width:'100%',
    background : 'primary.50',
    border: '1px solid',
    borderColor: 'secondary.100',
    borderRadius: 'md',
    padding:1,
    gap:1,
  };

  const recommendantionStyle= {
    spacing: '0.25rem',
    background : 'white',
    border: '1px solid',
    borderColor: 'secondary.100',
    borderRadius: 'md',
    boxShadow: 'md',
    width: '100%',
    height: '100%',
  };

  const artifacts = hero.artifacts && hero.artifacts.map(a => (
    <CharactericticBox key={a.id} characterictic={a} size='2rem'/>
  ));

  return (
    <VStack {...BoxCardStyle}
      width='21.5rem'
      padding='0.25rem' 
      backgroundColor={isOwned ? 'green.100' : 'red.100'}
      spacing={1}
      textAlign='center'
    >
      
      <Grid {...gridStyle}
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(9, 1fr)"
      >

        <GridItem rowSpan={3} colSpan={3} >
          <HStack>
            <Switch value={hero.id} isChecked={isOwned} onChange={(e) => onChange(e, hero)}/>
            {isOwned ? Owned?.iconURL?.() : NotOwned.iconURL?.()}
          </HStack>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <Center>
            <Tooltip label={hero.name} aria-label={hero.name}>
              <Image 
                src={hero.portraitURL}
                alt={hero.name}
                boxSize={PORTRAIT_SIZE}
                borderRadius="full"
              />
            </Tooltip>
          </Center>
        </GridItem>
      
        <GridItem rowSpan={3} colSpan={3} >
          <HStack justifyContent='flex-end'>
            <CharactericticBox characterictic={hero.faction}/>
            <CharactericticBox characterictic={hero.class}/>
            <CharactericticBox characterictic={hero.attribute}/>
          </HStack>
        </GridItem>

        <GridItem rowSpan={1} colSpan={9} >
          <Heading size='md'>{hero.name}</Heading>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3}>
          <VStack {...recommendantionStyle}>
            <Heading size='xs'>Signature</Heading>
            {hero.signature.iconURL?.()}
          </VStack>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <VStack {...recommendantionStyle}>
            <Heading size='xs'>Furniture</Heading>
            {hero.furniture.iconURL?.()}
          </VStack>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <VStack {...recommendantionStyle}>
            <Heading size='xs'>Artifact</Heading>
            <HStack spacing={0}>
              {artifacts}
            </HStack>
          </VStack>
        </GridItem>

        <GridItem rowSpan={1} colSpan={9}>
          <Link href={`/compositions?query=${hero.name}`} fontSize="sm">View compositions</Link>
        </GridItem>

      </Grid>
    </VStack>
  );
}

export default HeroDetails;
