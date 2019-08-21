/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PokemonListItem_pokemon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PokemonList_pokemons$ref: FragmentReference;
export type PokemonList_pokemons = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: PokemonListItem_pokemon$ref,
  +$refType: PokemonList_pokemons$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PokemonList_pokemons",
  "type": "Pokemon",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PokemonListItem_pokemon",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd82ae444746c612302e5c47bb769913e';
module.exports = node;
