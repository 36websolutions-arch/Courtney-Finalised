import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Courtney from "@/components/Courtney";
import Gallery from "@/components/Gallery";
import GalleryActor from "@/components/GalleryActor";
import Headshots from "@/components/Headshots";
import Hero from "@/components/Hero";
import MyResume from "@/components/MyResume";
import ProfileLayout from "@/components/ProfileLayout";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courtney />
      <Headshots />
      <Gallery />
      <GalleryActor />
      <MyResume />
      <ProfileLayout />
      <Footer />
    </main>
  );
}
