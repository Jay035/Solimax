import React from "react";
import { GlobalAuth } from "../../context/GlobalContext";

export default function NavMenuList({item}) {
  const { setCheckboxState, setMenuState } = GlobalAuth();
  return (
    <li
      class="menu-item"
      onClick={() => {
        setMenuState((prevState) => !prevState);
        setCheckboxState((prevState) => !prevState);
      }}
    >
      <a href={item.href}>{item.title}</a>
    </li>
  );
}
