import codee from "./../../assets/icons/gear-complex-code.svg";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.body}>
      <div className={styles.logo}>
        <img src={codee} alt="" className={styles.codee} />
        <p className={styles.name}>taiwo adegbola enoch</p>
      </div>
    </div>
  );
};

export default Loader;
