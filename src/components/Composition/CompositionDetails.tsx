
import { Box, Divider, Heading, HStack, Link, Tag, VStack } from "@chakra-ui/react";
import { Composition } from "../../model/compositions";
import HeroCategory from "../Hero/HeroCategory";
import { BoxCardStyle } from '../../theme/styles';
import { ExternalLinkIcon } from "@chakra-ui/icons";

type CompositionDetailsProps = {
  composition: Composition;
};

function CompositionDetails({ composition }: CompositionDetailsProps) {

  const tags = composition.tags.map(t => <Tag key={t} size="sm">{t}</Tag>);
  const heroCategories = [composition.coreHeroes, ...composition.flexHeroes]
    .map(cr => <>
      <Divider/>
      <HeroCategory key={cr.role.id} name={cr.role.name} heroes={cr.heroes.map(hr => hr.hero)} />
      </>
    );

  return (
    <Box {...BoxCardStyle} width="34rem" minHeight="30rem">
      <VStack alignItems='start'>
        <HStack>
          <Heading size="md">{composition.name}</Heading>
          {tags}
        </HStack>

        <Link href={composition.link} isExternal>
          by {composition.author} <ExternalLinkIcon mx="2px" />
        </Link>

        {heroCategories}
      </VStack>
    </Box>
  );
}

export default CompositionDetails;
