import { Link } from "react-router-dom";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "../Navbar/HamburgerIcon";
import NavButton from "../Navbar/NavButton";
import NavMenuList from "../Navbar/NavMenuList";

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
          <div className="btn" id="mobile-btn">

          <NavButton value="SLM LaunchPad" />
          </div>
        </ul>
      </nav>
      <div className="btn" id="desktop-btn">
        <NavButton value="SLM LaunchPad" />
      </div>

      {/* MENU ICON */}
      <HamburgerIcon />
    </header>
  );
}
