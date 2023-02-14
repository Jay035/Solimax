import arrowRight from "../assets/icons/arrow-right.svg";
import heroImg from "../assets/images/launchpad/hero-img.png";
import heroBg from "../assets/images/launchpad/hero-frame.png";
import dash from "../assets/icons/launchpad-hero-section-dash.png";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img className="bg" src={heroBg} alt="hero background" />

      <div className="hero-container">
        <div className="left-col">
          <h1 className="hero-title">
            A Secure Multi-chain Launch-pad with High Staking
          </h1>
          <img src={dash} alt="dash" />
          <p>Want to raise funds with SoliMax Launchpad?</p>
          {/* HERO BTN */}
          <button className="hero-btn">
            <a class="buy-slm-btn" href="https://egx10b579vb.typeform.com/to/MrD6iduN">
              Apply as a Project
              <img src={arrowRight} alt="arrow-right" />
            </a>
          </button>
        </div>
        <div className="right-col">
          <img src={heroImg} alt="hero img" />
        </div>
      </div>
    </section>
  );
}
