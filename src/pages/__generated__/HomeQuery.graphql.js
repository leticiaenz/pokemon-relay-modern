/**
 * @flow
 * @relayHash 8ae51488600640f7cb18448cbd6de6a1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PokemonList_pokemons$ref = any;
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +pokemons: ?$ReadOnlyArray<?{|
    +$fragmentRefs: PokemonList_pokemons$ref
  |}>
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery {
  pokemons(first: 25) {
    ...PokemonList_pokemons
    id
  }
}

fragment PokemonList_pokemons on Pokemon {
  id
  ...PokemonListItem_pokemon
}

fragment PokemonListItem_pokemon on Pokemon {
  id
  name
  number
  image
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 25,
    "type": "Int!"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemons",
        "storageKey": "pokemons(first:25)",
        "args": (v0/*: any*/),
        "concreteType": "Pokemon",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PokemonList_pokemons",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemons",
        "storageKey": "pokemons(first:25)",
        "args": (v0/*: any*/),
        "concreteType": "Pokemon",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "number",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  pokemons(first: 25) {\n    ...PokemonList_pokemons\n    id\n  }\n}\n\nfragment PokemonList_pokemons on Pokemon {\n  id\n  ...PokemonListItem_pokemon\n}\n\nfragment PokemonListItem_pokemon on Pokemon {\n  id\n  name\n  number\n  image\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '07836924f9e508457d1614984936da6c';
module.exports = node;
