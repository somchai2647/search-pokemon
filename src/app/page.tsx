import Image from "next/image";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <main className="p-32">
      <h1 className="text-4xl font-bold text-center my-4">Pokemon Search</h1>
      <Searchbar />
    </main>
  );
}
