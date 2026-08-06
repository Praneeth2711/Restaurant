import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import Chef from "@/components/Chef";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-bg relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <Chef />
      <Experience />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Footer />
    </main>
  );
}
