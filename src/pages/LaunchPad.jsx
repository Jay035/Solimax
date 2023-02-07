import BuyButtons from "../components/LaunchPad/BuyButtons";
import HeroSection from "../components/LaunchPad/HeroSection";
import Pools from "../components/LaunchPad/Pools/Pools";
import Navbar from "../components/Navbar/Navbar";

export default function LaunchPad() {
  return (
    <>
      <Navbar />
      <main className="launchpad">
        <HeroSection />
        <BuyButtons />
        <Pools />
      </main>
    </>
  );
}
