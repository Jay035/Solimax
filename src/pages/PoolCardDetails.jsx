import AboutProject from "../components/LaunchPad/PoolCardDetails/AboutProject";
import HeroSection from "../components/LaunchPad/PoolCardDetails/HeroSection";
import PoolInformation from "../components/LaunchPad/PoolCardDetails/PoolInformation";
import TokenInformation from "../components/LaunchPad/PoolCardDetails/TokenInformation";
import Navbar from "../components/Navbar/Navbar";

export default function PoolCardDetails() {
  return (
    <div className="pool-card-details">
      <Navbar />
      <HeroSection />
      <section className="pool-token-information">
        <PoolInformation />
        <TokenInformation />
      </section>
      <AboutProject />
    </div>
  );
}
