"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Props = {};

export default function Details({}: Props) {
  const name = useSearchParams().get("q");

  async function fetchPokemon() {
    
  }

  useEffect(() => {
    if (!name) return;
    console.log(name);
  }, [name]);

  return (
    <>
      <div className="w-full grid grid-cols-2">
        <div className="bg-white">d</div>
        <div className="bg-blue-400">d</div>
      </div>
    </>
  );
}
