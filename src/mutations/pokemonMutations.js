import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Environment } from "../relay";

/**
 *  Common code to configure environment to commit mutations
 */
const executeMutation = (mutation, variables, callbackSucess) => {
  commitMutation(Environment, {
    mutation,
    variables,
    onCompleted: callbackSucess,
    onError: error => {
      console.error(`Error: ${error}`);
    }
  });
};

/**
 *  Mutation to create new Pokemon
 */
const mutationNewPokemon = graphql`
  mutation pokemonMutations__NewPokemon__Mutation(
    $name: String
    $image: String
    $number: String
  ) {
    addPokemon(name: $name, image: $image, number: $number) {
      id
      name
    }
  }
`;

export const mutationNewPokemonCommit = (variables, callbackSucess) => {
  executeMutation(mutationNewPokemon, variables, callbackSucess);
};

/**
 *  Mutation to delete Pokemon
 */

const mutationDeletePokemon = graphql`
  mutation pokemonMutations__RemovePokemon__Mutation($id: String) {
    removePokemon(id: $id) {
      name
      image
    }
  }
`;

export const mutationDeletePokemonCommit = (variables, callbackSucess) => {
  executeMutation(mutationDeletePokemon, variables, callbackSucess);
};
