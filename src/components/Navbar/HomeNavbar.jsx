import { Link } from "react-router-dom";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "./HamburgerIcon";
import NavButton from "./NavButton";
import NavMenuList from "./NavMenuList";

export default function HomeNavbar() {
  const { menuItems, menuState } = GlobalAuth();

  return (
    <header>
      <Link to="/">
        <img class="nav-logo" src={navLogo} alt="logo" />
      </Link>

      <nav class="navbar">
        {/* MENU */}
        <ul class={`menu ${menuState ? `active` : ``}`}>
          {menuItems.map((item) => [<NavMenuList item={item} />])}
          <button id="mobile-btn">

          <NavButton value="SLM LaunchPad" />
          </button>
        </ul>
      </nav>
      <button id="desktop-btn">
        <NavButton value="SLM LaunchPad" />
      </button>

      {/* MENU ICON */}
      <HamburgerIcon />
    </header>
  );
}
