import styles from "./footer.module.css";
import codee from "./../../assets/icons/gear-complex-code0.svg";
import facebook from "./../../assets/icons/facebook.svg";
import x from "./../../assets/icons/x-twitter.svg";
import linkedin from "./../../assets/icons/linkedin-in.svg";
import github from "./../../assets/icons/github.svg";

import NavigationBar from "../navigationBar/navigationBar";
import hero from "../../assets/img/hero.webp";

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer} ${styles.flex}`}>
        <div className={`${styles.startConvo} ${styles.flex}`}>
          <h2>Interested in collaborating with me?</h2>
          <p>
            I’m always open to discussing product design work or partnership
            opportunities.
          </p>
          <button>Let's Talk</button>
          <div className={styles.backbtn}></div>
        </div>
        <div className={styles.logo}>
          <img src={codee} alt="" className={styles.codee} />
          <p className={styles.name}>taiwo adegbola enoch</p>
        </div>
        <div className={styles.line} />
        <div className={styles.copyright}>
          <p> &copy; Taiwo Adegbola Enoch {new Date().getFullYear()}</p>
          <div>
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
            <img src={facebook} className={styles.social} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
