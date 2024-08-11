import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductLists";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList title="New Arrivals" />
      <ProductList title="Top Selling" />
    </main>
  );
}
