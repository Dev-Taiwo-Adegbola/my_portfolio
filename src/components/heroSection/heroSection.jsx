import { useEffect, useState } from "react";
import styles from "./heroSection.module.css";

import hero from "../../assets/img/hero.webp";
import hero0 from "../../assets/img/hero0.webp";
import hero00 from "../../assets/img/hero00.webp";
import hero000 from "../../assets/img/hero000.webp";
import hero0000 from "../../assets/img/hero0000.webp";
import code from "../../assets/icons/display-code.svg";
import py from "../../assets/icons/python.svg";

const HeroSection = () => {
  
  const textArr = [
    "Front-End Developer",
    "Back-End Developer",
    "Python Enthusiast",
    "I'm Taiwo Adegbola Enoch!",
  ];
  const [text, setText] = useState("I'm Taiwo Adegbola Enoch!");
  const [ind, setInd] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(textArr[ind]);
      // console.log(text);
      setInd((prev) => (prev + 1) % textArr.length);
    }, 3000);
    return () => clearInterval(intervalId);
  });

  const [toggle0, setToggle0] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.herogroup}>
        <div className={styles.hero}>
          <img src={hero} alt="" className={styles.heroimg} />
        </div>
        <div className={styles.heroDescrition}>
          <p>
            <span id="introText" className={styles.introText}>
              <span > {text}</span>
            </span>
            a passionate Full-Stack Developer with hands-on experience in
            building dynamic and scalable web applications. My expertise lies in
            leveraging modern and powerful technologies to build robust and
            scalable solutions.
          </p>
        </div>
      </div>
      <div className={styles.expertise}>
        <div>
          <img src={code} alt="" />
          <p>FULLSTACK DEVELOPER</p>
        </div>
        <div></div>
        <div>
          <img src={py} alt="" />
          <p>PYTHON ENTHUSIAST</p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
