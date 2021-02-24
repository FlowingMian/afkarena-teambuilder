
import { Divider, Flex, Heading, HStack, Spacer, Tag, Text, VStack, StackDirection, useBreakpointValue, Stack } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import LinkPopover from "../Common/LinkPopover";

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {
  const stackDirection:StackDirection|undefined = useBreakpointValue({ base: 'column', lg: 'row' })
  
  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  
  const heroCategories = [composition.coreHeroes]
    .map(cr => <>
      <Divider/>
      <HeroCategory key={cr.role.id} name={cr.role.name} heroes={cr.heroes.map(hr => hr.hero)} colorScheme='#FFD700'/>
      </>
    );
  heroCategories.push(...composition.flexHeroes
    .map(cr => <>
      <Divider/>
      <HeroCategory key={cr.role.id} name={cr.role.name} heroes={cr.heroes.map(hr => hr.hero)} />
      </>
    ));

  return (
      <VStack alignItems='start'>
        <HStack>
          <Heading size="md">{composition.name}</Heading>
          {tags}
        </HStack>
          
        <Flex direction="row" width="100%" alignItems="end">
          <Stack direction={stackDirection} alignItems="start">
            <Text>by {composition.author}</Text>
            <LinkPopover links={composition.links}/>
          </Stack>

          <Spacer/>

          <Text fontSize='xs'><span>update : </span>{composition.updateDate}</Text>
        </Flex>

        {heroCategories}
      </VStack>
  );
}

export default CompositionDetails;
