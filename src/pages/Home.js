import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import { Environment } from "../relay";

import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";

class Home extends Component {
  render() {
    return (
      <QueryRenderer
        environment={Environment}
        query={HomeQuery}
        render={({ error, props }) => {
          if (error) {
            return (
              <div>
                <h1>Aconteceu algum erro</h1>
                <h1>{error.message}</h1>
              </div>
            );
          } else if (props) {
            return <PokemonList {...props} />;
          }
          return <Loading />;
        }}
      />
    );
  }
}

const HomeQuery = graphql`
  query HomeQuery {
    pokemons(first: 25) {
      ...PokemonList_pokemons
    }
  }
`;

export default Home;
