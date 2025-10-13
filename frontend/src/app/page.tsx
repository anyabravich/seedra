import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Feedback from "@/components/Feedback";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Products />
      <Blog />
      <Feedback />
      <Help />
    </main>
  );
}
