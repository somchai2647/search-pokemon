import React from "react";
import Image from "next/image";
import TypePokemon from "./TypePokemon";

interface Props {
  pokemon: {
    id: string;
    name: string;
    image: string;
    types: string[];
  };
}

export default function MiniInfo({ pokemon }: Props) {
  return (
    <div className="flex flex-col gap-1 h-full justify-center drop-shadow-lg p-2 bg-white rounded-xl hover:cursor-pointer">
      <div className="flex justify-center">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={100}
          height={100}
        />
      </div>
      <p className="text-center font-bold">{pokemon.name}</p>
      <div className="flex gap-1">
        {pokemon.types.map((type) => (
          <TypePokemon type={type} key={type} />
        ))}
      </div>
    </div>
  );
}
