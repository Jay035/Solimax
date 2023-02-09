import { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { GlobalContextProvider } from "./context/GlobalContext";
import ErrorPage from "./pages/ErrorPage";
import PoolCardDetails from "./pages/PoolCardDetails";
// const Navbar = lazy(import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const LaunchPad = lazy(() => import("./pages/LaunchPad"));

function App() {
  const [loadingState, setLoadingState] = useState(true);

  // const loadPage = () => {
  //   window.addEventListener("load", function () {
  //     setTimeout(() => {
  //       setLoadingState((prevState) => !prevState);
  //       // document.getElementById("preloader").style.display = "none";
  //       // document.getElementById("main").classList.remove("hidden");
  //       console.log("loading");
  //     }, 3000);
  //   });
  // };

  // useEffect(() => {
  // loadPage();
  // }, [])

  return (
    <div className="App">
      <GlobalContextProvider>
        <Router>
          {/* <Navbar /> */}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home />}
                // element={loadingState ? <Loading /> : <Home />}
              />
              <Route path="/launchpad" element={<LaunchPad />} />
              <Route path="/launchpad/pool/:id" element={<PoolCardDetails />} />
              {/* when a user goes to a non-existent route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
