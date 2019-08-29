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
  height: 100%;
`;
const ContainerInside = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  color: #495057;
  border: 2px;
  margin-top: 30px;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 20px;
  height: 100%;
`;

const TitleDetails = styled.h3`
  background: #ecebe4;
  text-align: center;
  width: 100%;
`;

const ButtonBack = styled.button`
  background: #052f5f;
  color: #fff;
  margin-top: 10px;
  font-size: 16px;
  padding: 12px 28px;
`;

const PokemonDetails = ({ pokemon }) => {
  return (
    <Container>
      <ContainerInside>
        <img src={pokemon.image} alt={pokemon.name} height="300px" />
        <h1>
          {pokemon.number} - {pokemon.name}
        </h1>

        <TitleDetails>Tipos</TitleDetails>
        <ul>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>

        <TitleDetails>Resistência</TitleDetails>
        <ul>
          {pokemon.resistant.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ContainerInside>
      <Link to={`/`}>
        <ButtonBack>Voltar</ButtonBack>
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
