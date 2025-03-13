import codee from "./../../assets/icons/gear-complex-code0.svg";
import styles from "./navigationBar.module.css";
import ThemeToggleBtn from "../toggleBtn/toggle";

import { useState } from "react";

const Loader = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const updateToggleNav = () => {
    setToggleNav((prev) => !toggleNav);
  };

  return (
    <div className={styles.navigationBar}>
      <div className={styles.logo}>
        <img src={codee} alt="" className={styles.codee} />
        <p className={styles.name}>taiwo adegbola enoch</p>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
      {toggleNav === true ? (
        <nav className={styles.navigationMob}>
          <ul>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Veiw Resume</a>
            </li>

            <button className={styles.hireMeMob}>Hire me</button>
          </ul>

          <div className={styles.toggleContainer}>
            <ThemeToggleBtn />
            <nav>
              <a href="http://#"></a>
            </nav>
          </div>
        </nav>
      ) : null}

      <button className={styles.hireMe}>Hire me</button>
      <div className={styles.menu} onClick={updateToggleNav}>
        <div
          className={
            toggleNav === true
              ? `${styles.line1} ${styles.line1ani}`
              : `${styles.line1} ${styles.line1aniR}`
          }
        ></div>
        <div
          className={
            toggleNav === true
              ? `${styles.line2} ${styles.line2ani}`
              : `${styles.line2} ${styles.line2aniR}`
          }
        ></div>
      </div>
    </div>
  );
};

export default Loader;
