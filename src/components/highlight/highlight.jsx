import { useEffect, useState } from "react";
import style from "./highlight.module.css";

const Highlight = () => {
  return (
    <div className={style.highlightSection}>
      <div className={style.keyHighlight}>
        <h2>Key Highlights</h2>
        <ul>
          <li>
            <h4>Full-Stack Development:</h4> Proficient in both front-end and
            back-end technologies, ensuring seamless integration and
            functionality of web applications.
          </li>

          <li>
            <h4>Python Expertise:</h4> Extensive experience with Python
            frameworks, enabling the development of high-performance
            applications.
          </li>

          <li>
            <h4>Front-End Technologies:</h4> Skilled in HTML, CSS, JavaScript,
            and modern libraries like React.js, creating engaging and responsive
            user interfaces.
          </li>

          <li>
            <h4>API Development:</h4> Adept at designing and integrating RESTful
            APIs, facilitating smooth communication between diverse system
            components.
          </li>

          <li>
            <h4>Database Management:</h4> Competent in working with databases
            such as PostgreSQL and MongoDB, ensuring data integrity and optimal
            performance.
          </li>
        </ul>
      </div>
      <div className={style.touch}>
        <h2>Personal Touch</h2>
        <p>
          Beyond coding, I am passionate about continuous learning and staying
          updated with the latest industry trends. I enjoy collaborating with
          cross-functional teams to deliver innovative solutions that drive
          business success and enhance user satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Highlight;
