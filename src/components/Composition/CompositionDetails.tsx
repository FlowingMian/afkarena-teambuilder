
import { Divider, Flex, Heading, HStack, Link, Spacer, Tag, Text, VStack } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import compositions from "../../data/compositions/campaign-arty";

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {
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
          <Link href={composition.link} isExternal>
            by {composition.author} <ExternalLinkIcon mx="2px" />
          </Link>
          <Spacer/>
          <Text fontSize='xs'><span>update : </span>{composition.updateDate}</Text>
        </Flex>

        {heroCategories}
      </VStack>
  );
}

export default CompositionDetails;
