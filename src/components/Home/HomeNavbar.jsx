import { Link } from "react-router-dom";
import navLogo from "../../components/assets/icons/nav-logo.svg";
import { GlobalAuth } from "../../context/GlobalContext";
import HamburgerIcon from "../Navbar/HamburgerIcon";
import NavButton from "../Navbar/NavButton";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function HomeNavbar() {
  const { menuState, setCheckboxState, setMenuState } = GlobalAuth();

  return (
    <header>
      <Link to="/">
        <img className="nav-logo" src={navLogo} alt="logo" />
      </Link>

      <nav className="navbar">
        {/* MENU */}
        <ul className={`menu ${menuState ? `active` : ``}`}>
          {/* {menuItems.map((item) => [<NavMenuList item={item} />])} */}
          <li
            className="menu-item"
            onClick={() => {
              setMenuState((prevState) => !prevState);
              setCheckboxState((prevState) => !prevState);
            }}
          >
            <NavHashLink
              to="/#about-us"
              activeclassname="selected"
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
              activeclassname="selected"
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
            <NavLink to="/launchpad/staking" activeclassName="selected" smooth="true">
              Staking
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
              to="/#roadmap"
              activeclassname="selected"
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
            <NavLink to="/launchpad" activeclassname="selected" smooth="true">
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
              activeclassname="selected"
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
              activeclassname="selected"
              smooth="true"
            >
              Contact us
            </NavHashLink>
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
