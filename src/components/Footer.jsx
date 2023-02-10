import footerLogo from "../components/assets/icons/footer-logo.svg";
import twitterLogo from "../components/assets/icons/twitter.svg";
import telegramLogo from "../components/assets/icons/telegram.svg";
import { NavHashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer id="contact">
      {/* footer Logo */}
      <img className="footer-logo" src={footerLogo} alt="footer logo" />

      {/* NAV LINKS */}
      <ul>
        <li className="menu-item">
          <NavHashLink to="/#about-us" activeclassname="selected">
            About us
          </NavHashLink>
        </li>
        <li className="menu-item">
          <NavHashLink to="/#tokenomics" activeclassname="selected">
            Tokenomics
          </NavHashLink>
        </li>
        <li className="menu-item">
          <NavHashLink to="/#roadmap" activeclassname="selected">
            Roadmap
          </NavHashLink>
        </li>
        <li className="menu-item">
          <NavHashLink to="/#how-to-buy" activeclassname="selected">
            How to buy
          </NavHashLink>
        </li>
        <li className="menu-item">
          <NavHashLink to="/#contact" activeclassname="selected">
            Contact us
          </NavHashLink>
        </li>
      </ul>

      {/* SOCIAL-MEDIA-LINKS */}
      <div className="social-media-links">
        {/* TWITTER */}
        <a href="https://twitter.com/solimax_?s=21&t=9kRJw2sM-LP9OHpM9DIrrA">
          <img src={twitterLogo} alt="twitter logo" />
        </a>

        {/* TELEGRAM */}
        <a href="https://t.me/SoliMax_Official">
          <img src={telegramLogo} alt="telegram logo" />
        </a>
      </div>
    </footer>
  );
}
