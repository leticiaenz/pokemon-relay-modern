/**
 * @flow
 * @relayHash 2456fec774c8a8c94eda684d6d08643e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PokemonDetails_pokemon$ref = any;
export type DetailsQueryVariables = {|
  pokemonID: string
|};
export type DetailsQueryResponse = {|
  +pokemon: ?{|
    +$fragmentRefs: PokemonDetails_pokemon$ref
  |}
|};
export type DetailsQuery = {|
  variables: DetailsQueryVariables,
  response: DetailsQueryResponse,
|};
*/


/*
query DetailsQuery(
  $pokemonID: String!
) {
  pokemon(id: $pokemonID) {
    ...PokemonDetails_pokemon
    id
  }
}

fragment PokemonDetails_pokemon on Pokemon {
  id
  name
  number
  resistant
  types
  image
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "pokemonID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "pokemonID",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemon",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PokemonDetails_pokemon",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemon",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "plural": false,
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
            "name": "resistant",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "types",
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
    "name": "DetailsQuery",
    "id": null,
    "text": "query DetailsQuery(\n  $pokemonID: String!\n) {\n  pokemon(id: $pokemonID) {\n    ...PokemonDetails_pokemon\n    id\n  }\n}\n\nfragment PokemonDetails_pokemon on Pokemon {\n  id\n  name\n  number\n  resistant\n  types\n  image\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c306394f87d6defa47b523f657141003';
module.exports = node;
