import styles from "./projects.module.css";
import NavigationBar from "../../components/navigationBar/navigationBar";
import hero from "../../assets/img/hero.webp";

const HeroSection = () => {
  const ProjectCard = (props) => {
    return (
      <>
        <div className={styles.cardWrapper}>
          <div className={styles.cardImg}>
            <img src={props.img} alt="" />
          </div>

          <div className={styles.cardTitle}>
            {props.title} <br />
            <span>{props.tools}</span>
          </div>
          <div className={styles.overlay}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>view Project</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <NavigationBar /> */}
      <div className={styles.projectWrapper}>
        <ProjectCard title="Portfolio" tools="REACT, NODEJS" img={hero} />
        <ProjectCard title="Portfolio" tools="REACT, NODEJS" img={hero} />
        <ProjectCard title="Portfolio" tools="REACT, NODEJS" img={hero} />
        <ProjectCard title="Portfolio" tools="REACT, NODEJS" img={hero} />
        <ProjectCard title="Portfolio" tools="REACT, NODEJS" img={hero} />
        <ProjectCard title="Portfolio" tools="REACT, NODEJS" img={hero} />
      </div>
    </>
  );
};

export default HeroSection;
