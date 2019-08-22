import React from "react";
import styled from "styled-components";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { createFragmentContainer } from "react-relay";

const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
`;

const PokemonDetails = ({ pokemon }) => {
  return (
    <Container>
      <img src={pokemon.image} alt={pokemon.name} height="80%" />
      <h1>
        {pokemon.number} - {pokemon.name}
      </h1>

      <h3>Tipos</h3>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>

      <h3>Resistência</h3>
      <ul>
        {pokemon.resistant.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Link to={`/`}>
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default createFragmentContainer(PokemonDetails, {
  pokemon: graphql`
    fragment PokemonDetails_pokemon on Pokemon {
      id
      name
      number
      resistant
      types
      image
    }
  `
});
