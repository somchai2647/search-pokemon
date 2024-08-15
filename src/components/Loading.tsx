import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="flex flex-col">
      <Spainer />
    </div>
  );
}

export function Spainer({}: Props) {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white p-20">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
    </div>
  );
}
