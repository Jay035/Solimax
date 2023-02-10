import dash from "../assets/icons/PoolCardDetails/dash.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import telegramIcon from "../assets/icons/telegram.svg";
import radioIcon from "../assets/icons/radio.svg";
import webIcon from "../assets/icons/web.svg";
import heroBg from "../assets/images/launchpad/hero-frame.png";
import PoolCard from "./PoolCard";

export default function HeroSection({ pool }) {

  return (
    <section className="hero-section">
      <img class="bg" src={heroBg} alt="hero background" />
      <div class="hero-container">
        <div className="left-col">
          <div className="logo">{pool[0].logo}</div>
          <h1 class="hero-title">{pool[0].projectTitle}</h1>
          <img src={dash} alt="dash" />
          <p>{pool[0].projectDescription}</p>
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
        </div>
        <div className="right-col">
          <PoolCard pool={pool} />
        </div>
      </div>
    </section>
  );
}
