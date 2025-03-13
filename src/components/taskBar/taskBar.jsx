import styles from "./taskBar.module.css";
import vsCode from "./../../assets/icons/vs code.svg";
import myself from "./../../assets/img/hero.webp";

import powerBtn from "../../assets/icons/power-off.svg";

const TaskBar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={`${styles.topIcon} ${styles.flexTaskbar}`}>
        <img src={myself} alt="" className={styles.myself} />
        <img src={vsCode} alt="" className={styles.iconsWrapper} />
      </div>
      <div className={`${styles.buttomIcon} ${styles.flexTaskbar}`}>
        {/* <img src={powerBtn} alt="" className={styles.powerBtn} /> */}
        <img src={powerBtn} alt="" className={styles.powerBtn} />
      </div>
    </div>
  );
};

export default TaskBar;
