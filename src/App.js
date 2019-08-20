import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";

import { Environment } from "./relay";

const App = ({ query }) => {
  console.log(query);
  return <h1>Pokemon</h1>;
};

const AppQR = () => {
  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query AppQuery {
          pokemons(first: 20) {
            id
            name
            image
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        console.log("qr: ", error, props);
        if (error) {
          return <span>{error.toString()}</span>;
        }

        if (props) {
          return <App query={props} />;
        }

        return <span>loading</span>;
      }}
    />
  );
};

export default AppQR;
