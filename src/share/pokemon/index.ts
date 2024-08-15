import { gql } from "@apollo/client";

const GetByName = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
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
      }
    }
  }
`;

const query = {
  GetByName,
};

export { query };
