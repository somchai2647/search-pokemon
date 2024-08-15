"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useQuery } from "@apollo/client";
import { query } from "@/share/pokemon";

import type { PokemonResponseMultiple } from "@/interface/pokemon.interface";

import TypePokemon from "@/components/TypePokemon";
import MiniInfo from "@/components/MiniInfo";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";

type Props = {};

export default function PokeList({}: Props) {
  const { loading, error, data } = useQuery<PokemonResponseMultiple>(
    query.GetList,
    {
      variables: { first: 6 },
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.pokemons) return <NotFound />;

  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.pokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/?q=${pokemon.name}`} >
            <MiniInfo pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
