import { useState } from "react";
import styles from "./toggle.module.css";

const ThemeToggleBtn = () => {
  const [hasToggle, setHasToggle] = useState(false);

  const updateToggle = () => {
    setHasToggle((prev) => !hasToggle);
  };

  return (
    <>
      <label htmlFor="toggle">
        <input type="checkbox" id="toggle" onChange={updateToggle} className={styles.checkBox} />

        <div className={styles.outer}>
          <div
            className={
              hasToggle === true
                ? `${styles.inner} ${styles.on}`
                : styles.inner
            }
          ></div>
        </div>
      </label>
    </>
  );
};

export default ThemeToggleBtn;
