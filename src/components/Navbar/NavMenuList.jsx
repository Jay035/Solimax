import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalAuth } from "../../context/GlobalContext";

export default function NavMenuList({ item }) {
  const { setCheckboxState, setMenuState } = GlobalAuth();

  return (
    <li
      key={item.id}
      className="menu-item"
      onClick={() => {
        setMenuState((prevState) => !prevState);
        setCheckboxState((prevState) => !prevState);
      }}
    >
      <NavLink to={item.href}>{item.title}</NavLink>
    </li>
  );
}
