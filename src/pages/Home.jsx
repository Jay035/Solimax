import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import HowToBuy from "../components/HowToBuy";
import Mission from "../components/Mission";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";

export default function Home() {
  return (
    <main id="main" class="hidden">
      <HeroSection />
      <AboutUs />
      <Mission />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
    </main>
  );
}
