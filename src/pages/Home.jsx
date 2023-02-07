import AboutUs from "../components/Home/AboutUs";
import HeroSection from "../components/Home/HeroSection";
import HowToBuy from "../components/Home/HowToBuy";
import Mission from "../components/Home/Mission";
import HomeNavbar from "../components/Home/HomeNavbar";
import Roadmap from "../components/Home/Roadmap";
import Tokenomics from "../components/Home/Tokenomics";

export default function Home() {
  return (
    <>
    <HomeNavbar />
      <main
        id="main"
        // class="hidden"
      >
        <HeroSection />
        <AboutUs />
        <Mission />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
      </main>
    </>
  );
}
