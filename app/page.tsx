import Navbar from "@/components/common/Navbar";
import Courtney from "@/components/Courtney";
import Gallery from "@/components/Gallery";
import Headshots from "@/components/Headshots";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courtney />
      <Headshots />
      <Gallery/>
    </main>
  );
}
