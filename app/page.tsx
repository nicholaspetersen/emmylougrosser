import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedResource from "@/components/FeaturedResource";
import FAQ from "@/components/FAQ";
import SupportCTA from "@/components/SupportCTA";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedResource />
        <FAQ />
        <SupportCTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
