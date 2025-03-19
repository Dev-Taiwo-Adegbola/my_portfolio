// import Loader from "./components/loader/loader";
import NavigationBar from "./components/navigationBar/navigationBar";
import HeroSection from "./components/heroSection/heroSection";
import FooterSection from "./components/footer/footer";
import Projects from "./components/project/project";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Loader from "./components/loader/loader";
import Highlight from "./components/highlight/highlight";
import { useEffect, useState } from "react";

import "./App.css";
import "./variables.css";

function App() {
  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  const updateDarkMode = () => {
    setDarkMode(!darkMode);
    const BGcolor = document.getElementById("portfolio");
    darkMode === true
      ? (BGcolor.style.backgroundColor = "var(--background-colorDark)")
      : (BGcolor.style.backgroundColor = "var(--background-color)");
  };

  let rand = Math.ceil(Math.random() * 5001);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        console.log("DOM loaded");
        setLoad(true);
      },
      rand < 2000 ? rand + 2000 : rand
    );

    // Cleanup function to clear timeout when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {load === false ? (
        <Loader />
      ) : (
        <>
          <BackgroundAnimation />
          <NavigationBar />
          <HeroSection />
          <Highlight />
          {/* <Projects /> */}
          <FooterSection />
        </>
      )}
    </>
  );
}

export default App;
