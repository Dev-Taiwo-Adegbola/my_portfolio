import styles from "./portfolioBody.module.css";
import files from "../../assets/icons/files.svg";
import search from "../../assets/icons/searchengin.svg";
import git from "../../assets/icons/git-alt.svg";
import settings from "../../assets/icons/gear.svg";
import user from "../../assets/icons/circle-user.svg";

const PortfolioBody = () => {
  return (
    <div className={styles.portfolioBody}>
      <div className={styles.MMCbtns}>
        <button className={`${styles.minimizebtn} ${styles.uiBtn}`}></button>
        <button className={`${styles.maximizebtn} ${styles.uiBtn}`}></button>
        <button className={`${styles.closebtn} ${styles.uiBtn}`}></button>
      </div>
      <div className={styles.vscodeMainUi}>
        <div className={styles.topNavigations}>
          <nav>
            <a href="#"> home</a>
            <a href="#"> projects</a>
            <a href="#"> skill</a>
            <a href="#"> contact</a>
          </nav>
        </div>
        <div
          className={`${styles.sideNavigations} ${styles.sideNavigationsNchild}`}
        >
          <div className={`${styles.top} ${styles.sideNavigationsNchild}`}>
            <img src={files} alt="" className={styles.filesIcon} />
            <img src={search} alt="" className={styles.searchIcon} />
            <img src={git} alt="" className={styles.gitIcon} />
          </div>

          <div className={`${styles.down} ${styles.sideNavigationsNchild}`}>
            <img src={settings} alt="" className={styles.gitIcon} />
            <img src={user} alt="" className={styles.gitIcon} />
          </div>
        </div>
        {/* <div className={styles.hiddenNavigations}></div> */}
        <div className={styles.tabs}></div>
        <div className={styles.mainBody}></div>
        <div className={styles.footer}>
          <div className="first">
            
          </div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBody;
