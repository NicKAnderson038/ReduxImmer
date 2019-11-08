import React, { useEffect, Fragment } from "react";
import { Heading, Paragraph } from "reakit";
import { connect } from "react-redux";

import { fetchCharacters } from "../actions/characters";
import CharacterListItem from "../components/CharacterListItem";

const CharacterList = props => {
  useEffect(() => {
    const { fetchCharacters } = props;
    fetchCharacters();
  });

  const { characters, err, isLoading } = props;
  return (
    <Fragment>
      <Heading>Rick & Morty Characters</Heading>
      <hr />
      {isLoading && !characters && <p>Loading...</p>}
      {characters && (
        <Fragment>
          {characters.results.length === 0 && (
            <Paragraph>No characters</Paragraph>
          )}
          {characters.results.map(character => (
            <CharacterListItem key={character.id} character={character} />
          ))}
        </Fragment>
      )}
      {err && <div>An error occurred. Message: {err.message}</div>}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  characters: state.characters.data,
  err: state.characters.err,
  isLoading: state.characters.isLoading
});
const mapDispatchToProps = {
  fetchCharacters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
