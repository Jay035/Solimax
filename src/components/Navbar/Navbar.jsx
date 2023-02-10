import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "./HamburgerIcon";
import NavButton from "./NavButton";
import NavMenuList from "./NavMenuList";
import { ConnectButton } from '@rainbow-me/rainbowkit';



export default function Navbar() {
  const { menuState, setCheckboxState, setMenuState } = GlobalAuth();

  // const menuItems = [
  //   {
  //     title: "About us",
  //     href: "/#about-us",
  //   },
  //   {
  //     title: "Tokenomics",
  //     href: "/#tokenomics",
  //   },
  //   {
  //     title: "Roadmap",
  //     href: "/#roadmap",
  //   },
  //   {
  //     title: "Launchpad",
  //     href: "/launchpad",
  //   },
  //   {
  //     title: "How to buy",
  //     href: "/#how-to-buy",
  //   },
  //   {
  //     title: "Contact us",
  //     href: "/#contact",
  //   },
  // ];

  return (
    <header id="launchpad-header">
      <Link to="/">
        <img class="nav-logo" src={navLogo} alt="logo" />
      </Link>

      <nav class="navbar">
        {/* MENU */}
        <ul class={`menu ${menuState ? `active` : ``}`}>
        <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#about-us" activeClassName="selected" smooth>About us</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#tokenomics" activeClassName="selected" smooth>Tokenomics</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#roadmap" activeClassName="selected" smooth>Roadmap</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavLink to="/launchpad" activeClassName="selected" smooth>Launchpad</NavLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#how-to-buy" activeClassName="selected" smooth>How to buy</NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink to="/#contact" activeClassName="selected" smooth>Contact us</NavHashLink>
          </li>

          <div className="btn" id="mobile-btn">
          <ConnectButton />
          </div>
        </ul>
      </nav>
      <div className="btn" id="desktop-btn">
      <ConnectButton />
      </div>

      {/* MENU ICON */}
      <HamburgerIcon />
    </header>
  );
}
