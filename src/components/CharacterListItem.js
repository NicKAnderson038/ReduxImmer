import React from "react";
import { Link as L } from "@reach/router";
import { Link, Flex, Heading, Image } from "reakit";
import { Box } from "rebul";

const CharacterListItem = props => {
  const { character } = props;
  return (
    <Link as={[L]} to={`/${character.id}`} margin="0.5rem 0" width="100%">
      <Box>
        <Flex alignItems="center">
          <Image src={character.image} borderRadius="100%" height="5rem" />
          <Heading as="h3" margin="0 1rem">
            {character.name}
          </Heading>
        </Flex>
      </Box>
    </Link>
  );
};

export default CharacterListItem;
