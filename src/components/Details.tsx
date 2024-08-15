"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useQuery } from "@apollo/client";
import { query } from "@/share/pokemon";

import type { PokemonResponseSingle } from "@/interface/pokemon.interface";

import TypePokemon from "@/components/TypePokemon";

type Props = {};

export default function Details({}: Props) {
  const name = useSearchParams().get("q");

  const { loading, error, data } = useQuery<PokemonResponseSingle>(
    query.GetByName,
    {
      variables: { name: name },
      skip: !name,
    }
  );

  if (!name) return null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.pokemon) return <p>Pokémon not found</p>;

  return (
    <>
      {JSON.stringify(data)}
      <div className="w-full grid grid-cols-2 rounded-xl overflow-hidden bg-white">
        <div className="">
          <div className="flex justify-center p-6 ">
            <Image
              src={data.pokemon.image}
              alt={data.pokemon.name}
              className="rounded-lg"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <h1 className="text-6xl">{data.pokemon.name}</h1>
          <div>
            <div className=" flex flex-wrap flex-row gap-4 ">
              {data.pokemon.types.map((type) => (
                <TypePokemon type={type} key={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
