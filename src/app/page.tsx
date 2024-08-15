"use client";
import Dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const Detail = Dynamic(() => import("@/components/Details"));
const PokeList = Dynamic(() => import("@/components/PokeList"));

export default function Home() {
  const name = useSearchParams().get("q");

  return (
    <>
      <div className="mt-4">{name ? <Detail /> : <PokeList />}</div>
    </>
  );
}
