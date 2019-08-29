import React from "react";
import styled from "styled-components";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { Link } from "react-router-dom";

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  color: #495057;
  border: 2px;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: rotate(5deg);
  }
  h1 {
    margin: 0;
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const PokemonItem = props => {
  return (
    <StyledLink to={`/details/${props.pokemon.id}`}>
      <PokemonCard>
        <img
          src={props.pokemon.image}
          alt={props.pokemon.name}
          height="200px"
        />
        <h2>
          {props.pokemon.number} - {props.pokemon.name}
        </h2>
      </PokemonCard>
    </StyledLink>
  );
};

export default createFragmentContainer(PokemonItem, {
  pokemon: graphql`
    fragment PokemonListItem_pokemon on Pokemon {
      id
      name
      number
      image
    }
  `
});
