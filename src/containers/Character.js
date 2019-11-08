import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { Base, Flex, Heading, Image, Paragraph } from "reakit";

import { fetchCharacter } from "../actions/characters";

const Character = props => {
  useEffect(() => {
    const { fetchCharacter, id } = props;
    fetchCharacter(id);
  });

  const { character, isLoading } = props;
  return (
    <Fragment>
      <Link to="/">Back</Link>
      {isLoading && !character && <Heading as="h3">Loading...</Heading>}
      {character && (
        <Fragment>
          <Heading>{character.name}</Heading>
          <hr />
          <Flex>
            <Base>
              <Image src={character.image} borderRadius="10px" width="200px" />
            </Base>
            <Base padding="1rem">
              <Paragraph>
                <label className="label">Status</label>
                {character.status}
              </Paragraph>
              <Paragraph>
                <label className="label">Gender</label>
                {character.gender}
              </Paragraph>
              <Paragraph>
                <label className="label">Location</label>
                {character.location.name}
              </Paragraph>
              <Paragraph>
                <label className="label">No. of episodes</label>
                {character.episode.length}
              </Paragraph>
            </Base>
          </Flex>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, props) => {
  const character = state.character[props.id] || {};
  return {
    isLoading: character.isLoading,
    character: character.data
  };
};
const mapDispatchToProps = {
  fetchCharacter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
