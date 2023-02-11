import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import {
  ActivePools,
  UpcomingPools,
  CompletedPools,
} from "../components/LaunchPad/Pools/PoolsData";

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

  const [poolsData, setPoolsData] = useState([]);
  const [selectedPool, setSelectedPool] = useState("active");
  // const activePools = poolsData.filter(item => item.tag === "active");
  // const upcomingPools = poolsData.filter(item => item.tag === "upcoming");
  // const completedPools = poolsData.filter(item => item.tag === "completed");

  useEffect(() => {
    switch (selectedPool) {
      case "active":
        setPoolsData(ActivePools);
        break;
      case "upcoming":
        setPoolsData(UpcomingPools);
        break;
      case "completed":
        setPoolsData(CompletedPools);
        break;
      default:
        setPoolsData(ActivePools);
    }
    // setPoolsData(activePools);
  }, [selectedPool]);
  //   console.log(menuItems)

  return (
    <GlobalContext.Provider
      value={{
        menuState,
        checkboxState,
        menuItems,
        setMenuState,
        setCheckboxState,
        poolsData,
        selectedPool,
        setSelectedPool,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function GlobalAuth() {
  return useContext(GlobalContext);
}


GlobalContextProvider.propTypes = {
  poolProgressValue: PropTypes.number,
  menuState: PropTypes.bool
}