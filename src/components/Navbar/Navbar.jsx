import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "./HamburgerIcon";
import NavButton from "./NavButton";

export default function Navbar() {
  const { menuState, setCheckboxState, setMenuState } = GlobalAuth();

  return (
    <header id="launchpad-header">
      <Link to="/">
        <img className="nav-logo" src={navLogo} alt="logo" />
      </Link>

      <nav className="navbar">
        {/* MENU */}
        <ul className={`menu ${menuState ? `active` : ``}`}>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink
              to="/#about-us"
              activeClassName="selected"
              smooth="true"
            >
              About us
            </NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink
              to="/#tokenomics"
              activeClassName="selected"
              smooth="true"
            >
              Tokenomics
            </NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink
              to="/#roadmap"
              activeClassName="selected"
              smooth="true"
            >
              Roadmap
            </NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavLink to="/launchpad" activeClassName="selected" smooth="true">
              Launchpad
            </NavLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink
              to="/#how-to-buy"
              activeClassName="selected"
              smooth="true"
            >
              How to buy
            </NavHashLink>
          </li>
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink
              to="/#contact"
              activeClassName="selected"
              smooth="true"
            >
              Contact us
            </NavHashLink>
          </li>

          <div className="btn" id="mobile-btn">
            <NavButton link="" value="Connect Wallet" />
          </div>
        </ul>
      </nav>
      <div className="btn" id="desktop-btn">
        <NavButton link="" value="Connect Wallet" />
      </div>

      {/* MENU ICON */}
      <HamburgerIcon />
    </header>
  );
}
