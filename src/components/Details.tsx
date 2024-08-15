"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useQuery } from "@apollo/client";
import { query } from "@/share/pokemon";

import type { PokemonResponseSingle } from "@/interface/pokemon.interface";

import TypePokemon from "@/components/TypePokemon";
import MiniInfo from "@/components/MiniInfo";

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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden bg-white">
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
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Attacks</h2>
            <div className="pl-4">
              <h3 className="text-xl">Fast</h3>
              <ul className="pl-3">
                {data.pokemon.attacks.fast.map((attack) => (
                  <li key={attack.name}>
                    {attack.name} - {attack.damage}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-4">
              <h3 className="text-xl">Special</h3>
              <ul className="pl-3">
                {data.pokemon.attacks.special.map((attack) => (
                  <li key={attack.name}>
                    {attack.name} - {attack.damage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {data.pokemon.evolutions && (
            <div>
              <h2 className="text-3xl">Evolutions</h2>
              <div className="flex flex-row gap-4 mt-4">
                {data.pokemon.evolutions.map((evolution) => (
                  <Link key={evolution.id} href={`/?q=${evolution.name}`} className="hover:scale-110">
                    <MiniInfo pokemon={evolution} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
