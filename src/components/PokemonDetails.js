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
  background-color: #5688c7;
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
  margin-top: 10px;
`;

const List = styled.ul`
  text-align: left;
  list-style-type: circle;
  width: 80%;
  margin-top: 10px;
`;

const ButtonBack = styled.button`
  background: #052f5f;
  color: #fff;
  margin: 30px;
  font-size: 20px;
  padding: 12px 28px;
  border: none;
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
        <List>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </List>

        <TitleDetails>Resistência</TitleDetails>
        <List>
          {pokemon.resistant.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
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
