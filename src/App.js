import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import LaunchPad from "./pages/LaunchPad";

function App() {
  const [loadingState, setLoadingState] = useState(true);

  const loadPage = () => {
    window.addEventListener("load", function () {
      setTimeout(() => {
        setLoadingState((prevState) => !prevState);
        // document.getElementById("preloader").style.display = "none";
        // document.getElementById("main").classList.remove("hidden");
        console.log("loading");
      }, 3000);
    });
  };

  // useEffect(() => {
  loadPage();
  // }, [])

  return (
    <div className="App">
      <GlobalContextProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={loadingState ? <Loading /> : <Home />}
            />
            <Route path="launchpad" element={<LaunchPad />} />
          </Routes>
          <Footer />
        </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
