import heroBg from '../../components/assets/images/hero-frame.png';
import arrowRight from '../../components/assets/icons/arrow-right.svg';

export default function HeroSection() {
  return (
    <section class="hero-section">
      <img
        class="hero-bg"
        src={heroBg}
        alt="hero background"
      />
      <div class="img-overlay"></div>

      <div class="hero-container">
        <h1 class="hero-title">
          A Global Hub for Farmers, Degens, and Tech Geeks
        </h1>
        <p>
          At the very core, we are yield farmers, community-centric creators,
          solidly maxis with one goal- “follow the liquidity but this time, take
          the community with us.”
        </p>
        {/* HERO BTN */}
        <button class="hero-btn">
          <a
            class="buy-slm-btn"
            href="https://equalizer.exchange/swap/?outputCurrency=0x39263a476aadf768be43a99b24c4e461098524a4"
          >
            Buy SLM Now
            <img src={arrowRight} alt="arrow-right" />
          </a>
        </button>
      </div>
    </section>
  );
}
