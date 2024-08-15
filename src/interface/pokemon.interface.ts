export interface PokemonResponseSingle {
  pokemon: Pokemon;
}

export interface PokemonResponseMultiple {
  pokemons: Pokemon[];
}

export interface Pokemon {
  __typename: string;
  id: string;
  name: string;
  types: string[];
  attacks: Attacks;
  evolutions: Evolution[];
}

export interface Attacks {
  __typename: string;
  fast: Fast[];
  special: Special[];
}

export interface Fast {
  __typename: string;
  name: string;
  type: string;
  damage: number;
}

export interface Special {
  __typename: string;
  name: string;
  type: string;
  damage: number;
}

export interface Evolution {
  __typename: string;
  id: string;
  name: string;
}
