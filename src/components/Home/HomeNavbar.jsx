import { Link } from "react-router-dom";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "../Navbar/HamburgerIcon";
import NavButton from "../Navbar/NavButton";
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";

export default function HomeNavbar() {
  const { menuState, setCheckboxState, setMenuState } = GlobalAuth();
 
  return (
    <header>
      <Link to="/">
        <img class="nav-logo" src={navLogo} alt="logo" />
      </Link>

      <nav class="navbar">
        {/* MENU */}
        <ul class={`menu ${menuState ? `active` : ``}`}>
          {/* {menuItems.map((item) => [<NavMenuList item={item} />])} */}
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink exact to="/#about-us" activeClassname="selected" smooth>About us</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#tokenomics" activeClassname="selected" smooth>Tokenomics</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#roadmap" activeClassname="selected" smooth>Roadmap</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavLink to="/launchpad" activeClassname="selected" smooth>Launchpad</NavLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#how-to-buy" activeClassname="selected" smooth>How to buy</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#contact" activeClassname="selected" smooth>Contact us</NavHashLink>
          </li>

          <div className="btn" id="mobile-btn">
            <NavButton link="/launchpad" value="SLM LaunchPad" />
          </div>
        </ul>
      </nav>
      <div className="btn" id="desktop-btn">
        <NavButton link="/launchpad" value="SLM LaunchPad" />
      </div>

      {/* MENU ICON */}
      <HamburgerIcon />
    </header>
  );
}
