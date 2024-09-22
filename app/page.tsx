import Hero from "./components/Hero";
import Jumbo from "./components/Jumbo";
import Features from "./components/Features";
import Books from "./components/Books";
import Banners from "./components/Banners";
import Selling from "./components/Selling";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen">
      <Hero />
      <Jumbo />
      <Features />
      <Books />
      <Banners />
      <Selling />
    </main>
  );
}
