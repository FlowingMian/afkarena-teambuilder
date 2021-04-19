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

const PORTRAIT_SIZE = '4rem';

function HeroDetails({ hero, isOwned, onChange }: HeroDetailsProps):JSX.Element {

  const gridStyle= {
    width:'100%',
    background : 'primary.50',
    padding:1,
    gap:1,
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
    >
      <HStack>
        <Switch value={hero.id} isChecked={isOwned} onChange={(e) => onChange(e, hero)}/>
        {isOwned ? Owned?.iconURL?.() : NotOwned.iconURL?.()}
      </HStack>
      
      <Grid {...gridStyle}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(9, 1fr)"
      >

        <GridItem rowSpan={3} colSpan={2} >
          <Tooltip label={hero.name} aria-label={hero.name}>
            <Image 
              src={hero.portraitURL}
              alt={hero.name}
              boxSize={PORTRAIT_SIZE}
              borderRadius="full"
            />
          </Tooltip>
        </GridItem>
      
        <GridItem rowSpan={1} colSpan={4} >
          <Heading size='md'>{hero.name}</Heading>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3} >
          <HStack justifyContent='flex-end'>
            <CharactericticBox characterictic={hero.faction}/>
            <CharactericticBox characterictic={hero.class}/>
            <CharactericticBox characterictic={hero.attribute}/>
          </HStack>
        </GridItem>

        <GridItem rowSpan={2} colSpan={7}>
          <Link href={`/compositions?query=${hero.name}`} fontSize="sm">View compositions</Link>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3}>
          <Center>
            <VStack alignItems='start' spacing='0'>
              <Heading size='sm'>Signature</Heading>
              {hero.signature.iconURL?.()}
            </VStack>
          </Center>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <Center>
            <VStack alignItems='start' spacing='0'>
              <Heading size='sm'>Furniture</Heading>
              <Text>3: {hero.furniture.F3.iconURL?.()}</Text>
              <Text>9: {hero.furniture.F9.iconURL?.()}</Text>
            </VStack>
          </Center>
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <Center>
            <VStack alignItems='start' spacing='0'>
              <Heading size='sm'>Artifact</Heading>
              <HStack spacing={0}>
                {artifacts}
              </HStack>
            </VStack>
          </Center>
        </GridItem>

      </Grid>
    </VStack>
  );
}

export default HeroDetails;
