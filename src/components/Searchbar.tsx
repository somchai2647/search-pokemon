"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import PokeballSVG from "@/svg/pokeball.svg";
import SearchSVG from "@/svg/search.svg";

type Props = {};

export default function Searchbar({}: Props) {
  const router = useRouter();
  const name = useSearchParams().get("q");

  const [search, setSearch] = useState("");

  function onClickSearch() {
    if (search === "") {
      router.replace("/");
      return;
    }
    router.replace(`/?q=${search}`);
  }

  useEffect(() => {
    if (!name) {
      setSearch("");
    } else {
      setSearch(name);
    }
  }, [name]);

  return (
    <>
      <div className="rounded-lg overflow-hidden w-full">
        <div className="relative">
          <Image
            src={PokeballSVG}
            alt="pokeball"
            width={20}
            height={20}
            className="absolute text-gray-400 top-5 left-4"
          />

          <input
            type="text"
            placeholder="Search for Pokémon"
            className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute top-4 right-5 border-l pl-4">
            <Image
              src={SearchSVG}
              alt="pokeball"
              className="hover:cursor-pointer"
              width={20}
              height={20}
              onClick={onClickSearch}
            />
          </span>
        </div>
      </div>
    </>
  );
}
