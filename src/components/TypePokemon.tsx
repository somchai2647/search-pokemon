import React from "react";

type Props = {
  type: string;
};

export default function TypePokemon({ type }: Props) {
  switch (type.toLocaleLowerCase()) {
    case "fire":
      return (
        <span className="bg-red-500 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "water":
      return (
        <span className="bg-blue-500 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "grass":
      return (
        <span className="bg-green-500 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "electric":
      return (
        <span className="bg-yellow-500 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "normal":
      return (
        <span className="bg-gray-500 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "ice":
      return (
        <span className="bg-blue-300 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "fighting":
      return (
        <span className="bg-red-800 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "poison":
      return (
        <span className="bg-purple-500 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "ground":
      return (
        <span className="bg-yellow-800 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "flying":
      return (
        <span className="bg-blue-200 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "psychic":
      return (
        <span className="bg-pink-500 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "bug":
      return (
        <span className="bg-green-200 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "rock":
      return (
        <span className="bg-yellow-600 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "ghost":
      return (
        <span className="bg-indigo-500 text-white px-2 py-1 rounded-xl">
          {type}
        </span>
      );
    case "dark":
      return (
        <span className="bg-gray-800 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "dragon":
      return (
        <span className="bg-red-300 text-white px-2 py-1 rounded-xl">{type}</span>
      );
    case "steel":
      return (
        <span className="bg-gray-400 text-white px-2 py-1 rounded-xl">{type}</span>
      );
  }
}
