import React from "react";
import styled from "styled-components";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import PokemonListItem from "./PokemonListItem";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const PokemonList = props => {
  return (
    <Container>
      {props.pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};

export default createFragmentContainer(PokemonList, {
  pokemons: graphql`
    fragment PokemonList_pokemons on Pokemon @relay(plural: true) {
      id
      ...PokemonListItem_pokemon
    }
  `
});
