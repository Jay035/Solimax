import footerLogo from '../components/assets/icons/footer-logo.svg';
import twitterLogo from '../components/assets/icons/twitter.svg';
import telegramLogo from '../components/assets/icons/telegram.svg';

export default function Footer() {
  return (
    <footer id="contact">
        {/* footer Logo */}
        <img
          class="footer-logo"
          src={footerLogo}
          alt="footer logo"
        />
        {/* NAV LINKS */}
        <ul>
          <li class=""><a href="#about-us">About us</a></li>
          <li class=""><a href="#tokenomics">Tokenomics</a></li>
          <li class=""><a href="#roadmap">Roadmap</a></li>
          <li class=""><a href="#how-to-buy">How to buy</a></li>
          <li class=""><a href="#contact">Contact us</a></li>
        </ul>

        {/* SOCIAL-MEDIA-LINKS */}
        <div class="social-media-links">
          {/* TWITTER */}
          <a href="https://twitter.com/solimax_?s=21&t=9kRJw2sM-LP9OHpM9DIrrA"
            ><img src={twitterLogo} alt="twitter logo"
          /></a>

          {/* TELEGRAM */}
          <a href="https://t.me/SoliMax_Official"
            ><img src={telegramLogo} alt="telegram logo"
          /></a>
        </div>
      </footer>
  )
}
