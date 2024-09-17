import Hero from "./components/Hero";
import Jumbo from "./components/Jumbo";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen">
      <Hero />
      <Jumbo />
    </main>
  );
}
