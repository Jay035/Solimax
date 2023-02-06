import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <img class="nav-logo" src="./assets/icons/nav-logo.svg" alt="logo" />
      </Link>
      <nav class="navbar">
        {/* MENU */}
        <ul class="menu">
          <li class="menu-item"><a href="#about-us">About us</a></li>
          <li class="menu-item"><a href="#tokenomics">Tokenomics</a></li>
          <li class="menu-item"><a href="#roadmap">Roadmap</a></li>
          <li class="menu-item"><a href="#how-to-buy">How to buy</a></li>
          <li class="menu-item"><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
      {/* MENU ICON */}
      <div class="hamburger">
        <input id="input" type="checkbox" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
      </div>
    </header>
  )
}
