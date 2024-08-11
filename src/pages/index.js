import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductLists";
import CategoryProduct from "@/components/CategoryProduct";
import Testimonial from "@/components/Testimonial";
import CardCarousel from "@/components/CardCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hr = <hr className="w-full mt-16" />;

  return (
    <main>
      <Hero />
      <ProductList title="New Arrivals" />
      <hr className="max-w-[1240px] mx-auto w-full mt-16" />
      <ProductList title="Top Selling" />
      <CategoryProduct />
      <Testimonial />
    </main>
  );
}
