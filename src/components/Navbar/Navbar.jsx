import { Link } from "react-router-dom";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "./HamburgerIcon";
import NavButton from "./NavButton";
import NavMenuList from "./NavMenuList";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  const { menuItems, menuState } = GlobalAuth();

  return (
    <header id="launchpad-header">
      <Link to="/">
        <img class="nav-logo" src={navLogo} alt="logo" />
      </Link>

      <nav class="navbar">
        {/* MENU */}
        <ul class={`menu ${menuState ? `active` : ``}`}>
          {menuItems.map((item) => [<NavMenuList item={item} />])}
          <div className="btn" id="mobile-btn">
            <NavButton link="" value="Connect Wallet" />
          </div>
        </ul>
      </nav>
      <div className="btn" id="desktop-btn">
      <ConnectButton />
        {/* <NavButton link="" value="Connect Wallet" /> */}
      </div>

      {/* MENU ICON */}
      <HamburgerIcon />
    </header>
  );
}
