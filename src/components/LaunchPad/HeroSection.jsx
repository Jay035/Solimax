import arrowRight from "../assets/icons/arrow-right.svg";
import heroImg from "../assets/images/launchpad/hero-img.png";
import heroBg from "../assets/images/launchpad/hero-frame.png";
import dash from '../assets/icons/launchpad-hero-section-dash.png';

export default function HeroSection() {
  return (
    <section class="hero-section">
      <img
        class="bg"
        src={heroBg}
        alt="hero background"
      />
      {/* <div class="img-overlay"></div> */}

      <div class="hero-container">
        <div className="left-col">
          <h1 class="hero-title">
            A Secure Multi-chain Launch-pad with High Staking
          </h1>
          <img src={dash} alt="dash" />
          <p>Want to raise funds with SoliMax Launchpad?</p>
          {/* HERO BTN */}
          <button class="hero-btn">
            <a
              class="buy-slm-btn"
              href="https://equalizer.exchange/swap/?outputCurrency=0x39263a476aadf768be43a99b24c4e461098524a4"
            >
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
