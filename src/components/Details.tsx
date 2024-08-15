"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useQuery } from "@apollo/client";
import { query } from "@/share/pokemon";

import type { PokemonResponseSingle } from "@/interface/pokemon.interface";

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
      <div className="w-full grid grid-cols-2">
        <div className="bg-white">
          <Image
            src={data.pokemon.image}
            alt={data.pokemon.name}
            width={200}
            height={200}
          />
        </div>
        <div className="bg-blue-400">d</div>
      </div>
    </>
  );
}
