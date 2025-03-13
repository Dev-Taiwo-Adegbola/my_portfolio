// import Loader from "./components/loader/loader";
import NavigationBar from "./components/navigationBar/navigationBar";
import HeroSection from "./components/heroSection/heroSection";
import FooterSection from "./components/footer/footer";
import Projects from "./components/project/project";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";

import "./App.css";
import "./variables.css";

function App() {
  const [load, setload] = useState(false);
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      // alert("hi")
      setload(!load);
    }, 2000);
  });
  return (
    <>
      {load === false ? (
        <Loader />
      ) : (
          <BackgroundAnimation />
        // <>
        //   <NavigationBar />
        //   <HeroSection />
        //   <Projects />
        //   <FooterSection />
        // </>
      )}
    </>
  );
}

export default App;
