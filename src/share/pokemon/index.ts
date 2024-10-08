import { gql } from "@apollo/client";

const GetList = gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      types
      image
    }
  }
`;

const GetByName = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        types
        image
      }
    }
  }
`;

const query = {
  GetList,
  GetByName,
};

export { query };
