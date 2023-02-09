import dash from "../../assets/icons/PoolCardDetails/dash.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import radioIcon from "../../assets/icons/radio.svg";
import webIcon from "../../assets/icons/web.svg";
import heroBg from "../../assets/images/launchpad/hero-frame.png";

export default function HeroSection() {
  return (
    <section className="hero-section">
        <img
        class="bg"
        src={heroBg}
        alt="hero background"
      />
      <div class="hero-container">
        <div className="left-col">
          <div className="logo">Logo</div>
          <h1 class="hero-title">Project 1</h1>
          <img src={dash} alt="dash" />
          <p>
            Menzy is a passive move-to-earn project with additional features
            such as compete to earn and activity classification based on machine
            vision.Menzy is a passive move-to-earn project with additional
            features such as compete to earn and activity classification based
            on machine vision.
          </p>
          {/* HERO LOGO LINKS */}
          <div className="social-icons">
            {/* TWITTER ICON */}
            <a href="">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
            {/* TELEGRAM ICON */}
            <a href="">
              <img src={telegramIcon} alt="telegram icon" />
            </a>
            {/* RADIO ICON */}
            <a href="">
              <img src={radioIcon} alt="radio icon" />
            </a>
            {/* WEBSITE ICON */}
            <a href="">
              <img src={webIcon} alt="website icon" />
            </a>
          </div>
          {/* <button class="hero-btn">
            <a
              class="buy-slm-btn"
              href="https://equalizer.exchange/swap/?outputCurrency=0x39263a476aadf768be43a99b24c4e461098524a4"
            >
              Apply as a Project
              <img src={arrowRight} alt="arrow-right" />
            </a>
          </button> */}
        </div>
        <div className="right-col">
          {/* <img src={heroImg} alt="hero img" /> */}
        </div>
      </div>
    </section>
  );
}
