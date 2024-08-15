export interface PokemonResponseSingle {
  pokemon: Pokemon;
}

export interface PokemonResponseMultiple {
  pokemons: Pokemon[];
}

export interface Pokemon {
    id: string
    name: string
    image: string
    types: string[]
    attacks: Attacks
    evolutions: Evolution[]
  }
  
  export interface Attacks {
    fast: Fast[]
    special: Special[]
  }
  
  export interface Fast {
    name: string
    damage: number
  }
  
  export interface Special {
    name: string
    damage: number
  }
  
  export interface Evolution {
    name: string
    image: string
    types: string[]
  }