import FeaturesGrid from "./_components/FeaturesGrid";
import FinalCTA from "./_components/FinalCTA";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import InteractiveDemo from "./_components/InteractiveDemo";
import Navigation from "./_components/Navigation";
import TestimonialsCarousel from "./_components/TestimonialsCarousel";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Navigation />
      <HeroSection />
      <FeaturesGrid />
      <InteractiveDemo />
      {/* <TestimonialsCarousel /> */}
      <FinalCTA />
      <Footer />
    </main>
  )
};

export default Home
