import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const menuItems = [
    {
      title: "About us",
      href: "#about-us",
    },
    {
      title: "Tokenomics",
      href: "#tokenomics",
    },
    {
      title: "Roadmap",
      href: "#roadmap",
    },
    {
      title: "Launchpad",
      href: "/launchpad",
    },
    {
      title: "How to buy",
      href: "#how-to-buy",
    },
    {
      title: "Contact us",
      href: "#contact",
    },
  ];
  //   console.log(menuItems)

  return (
    <GlobalContext.Provider
      value={{
        menuState,
        checkboxState,
        menuItems,
        setMenuState,
        setCheckboxState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function GlobalAuth() {
  return useContext(GlobalContext);
}
