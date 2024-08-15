"use client";
import { Suspense } from "react";
import Dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const Detail = Dynamic(() => import("@/components/Details"));
const PokeList = Dynamic(() => import("@/components/PokeList"));
import Loadding from "@/components/Loading";

export default function HomeWrapper() {
  return (
    <Suspense fallback={<Loadding />}>
      <Home />
    </Suspense>
  );
}

function Home() {
  const name = useSearchParams().get("q");
  return (
    <>
      <div className="mt-4">{name ? <Detail /> : <PokeList />}</div>
    </>
  );
}
