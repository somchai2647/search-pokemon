"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client";

import { query } from "@/share/pokemon";

type Props = {};

export default function Details({}: Props) {
  const name = useSearchParams().get("q");

  const { loading, error, data } = useQuery(query.GetByName, {
    variables: { name: name },
    skip: !name,
  });

  if(!name) return null

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.pokemon) return <p>Pokémon not found</p>;

  return (
    <>
      <div className="w-full grid grid-cols-2">
        <div className="bg-white">{JSON.stringify(data)}</div>
        <div className="bg-blue-400">d</div>
      </div>
    </>
  );
}
