import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Searchbar from "@/components/Searchbar";
import Providers from "@/components/Provider";

const inter = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Pokemon Search",
  description:
    "PokéDex Search is an intuitive and user-friendly platform designed for Pokémon enthusiasts to quickly find detailed information on their favorite Pokémon. Whether you're a seasoned trainer or just starting your journey, our site allows you to search by name, type, generation, or specific abilities. Each Pokémon entry includes comprehensive stats, evolutions, moves, and locations where they can be found in the game. With a sleek design and responsive interface, PokéDex Search is your ultimate resource for all things Pokémon.",
  keywords: ["pokemon, pokemondex, search"],
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 md:p-16 ">
          <Providers>
            <h1 className="text-7xl font-bold text-center my-8">
              Pokemon Search
            </h1>
            <Searchbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
