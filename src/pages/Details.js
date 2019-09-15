import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import { Environment } from "../relay";
import { withRouter } from "react-router-dom";

import PokemonDetails from "../components/PokemonDetails";
import Loading from "../components/Loading";

const Details = props => (
  <QueryRenderer
    environment={Environment}
    query={DetailsQuery}
    variables={{ pokemonID: props.match.params.pokemonID }}
    render={({ error, props }) => {
      if (error) {
        return (
          <div>
            <h1>Aconteceu algum erro</h1>
            <h1>{error.message}</h1>
          </div>
        );
      } else if (props) {
        return <PokemonDetails {...props} />;
      }
      return <Loading />;
    }}
  />
);

const DetailsQuery = graphql`
  query DetailsQuery($pokemonID: String) {
    pokemon(id: $pokemonID) {
      ...PokemonDetails_pokemon
    }
  }
`;

export default withRouter(Details);
