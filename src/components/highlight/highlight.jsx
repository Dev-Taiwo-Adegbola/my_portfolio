import { useEffect, useState } from "react";
import style from "./highlight.module.css";
import highlightSvg from "../../assets/highlightSvg.svg";

const Highlight = () => {
  return (
    <>
      <section className={style.highlightSection}>
        <h2>Key Highlights</h2>
        <div className={style.keyHighlight}>
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
              and modern libraries like React.js, creating engaging and
              responsive user interfaces.
            </li>

            <li>
              <h4>API Development:</h4> Adept at designing and integrating
              RESTful APIs, facilitating smooth communication between diverse
              system components.
            </li>

            <li>
              <h4>Database Management:</h4> Competent in working with databases
              such as PostgreSQL and MongoDB, ensuring data integrity and
              optimal performance.
            </li>
            <button className={`${style.resumeBtn} ${style.projectBtn}`}>
              <span className={style.buttonContent}>
                <span>View Resume</span>
                <span className={style.arrowContainer}>
                  <span className={style.arrLine0}></span>
                  <span className={style.arrLine1}></span>
                  <span className={style.arrLine2}></span>
                </span>
              </span>
            </button>
          </ul>
          <svg
            fill="beige"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xml:space="preserve"
            width="364px"
            height="364px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M1,1h39v3.5h1V0.5C41,0.2,40.8,0,40.5,0H0.5C0.2,0,0,0.2,0,0.5v58C0,58.8,0.2,59,0.5,59H32v-1H1V1z"></path>

                    <path d="M43.7,21.3l-2.8-6.6c-0.1-0.4-0.5-0.6-0.9-0.6s-0.7,0.2-0.9,0.6l-2.8,6.6C36.1,21.5,36,21.7,36,22v31v6c0,0.6,0.4,1,1,1 h6c0.6,0,1-0.4,1-1v-6V22C44,21.7,43.9,21.4,43.7,21.3z M38,23h4v29h-4V23z M40,17.5l1.5,3.5h-3L40,17.5z M42,58h-4v-4h4V58z"></path>{" "}
                    <path d="M59,38H48c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h11c0.6,0,1-0.4,1-1V39C60,38.4,59.6,38,59,38z M58,40v5h-9v-5H58z M49,58 V47h9v11H49z"></path>{" "}
                    <path d="M27,11c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S27,14.3,27,11z M17,11c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S17,13.2,17,11 z"></path>{" "}
                    <rect x="15" y="20" width="12" height="1"></rect>{" "}
                    <rect x="15" y="25" width="12" height="1"></rect>{" "}
                    <rect x="6" y="31" width="15" height="1"></rect>{" "}
                    <rect x="6" y="36" width="26" height="1"></rect>{" "}
                    <rect x="6" y="41" width="26" height="1"></rect>{" "}
                    <rect x="6" y="46" width="8" height="1"></rect>{" "}
                    <rect x="6" y="51" width="11" height="1"></rect>{" "}
                    <rect x="21" y="46" width="8" height="1"></rect>{" "}
                    <rect x="21" y="51" width="11" height="1"></rect>{" "}
                  </g>{" "}
                </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </section>

      <section className={style.touchsection}>
        <div className={style.touchGroup}>
          <div className={style.touch}>
            <h2>Personal Touch</h2>
            <p>
              Beyond coding, I am passionate about continuous learning and
              staying updated with the latest industry trends. I enjoy
              collaborating with cross-functional teams to deliver innovative
              solutions that drive business success and enhance user
              satisfaction.
            </p>
          </div>
          <img src={highlightSvg} className={style.highlightSvg} alt="" />
        </div>
      </section>

      <section className={style.touchsectionProject}>
        <div className={style.touchGroup}>
          {/* <img src={highlightSvg} className={style.highlightSvg} alt="" /> */}
          <div className={style.touch}>
            <h2>
              I design and <br /> implement
            </h2>
            <p>
              dynamic web applications, transforming complex problems into
              intuitive, user-friendly digital experiences
            </p>
            <button className={style.projectBtn}>
              <span className={style.buttonContent}>
                <span>see my works</span>
                <span className={style.arrowContainer}>
                  <span className={style.arrLine0}></span>
                  <span className={style.arrLine1}></span>
                  <span className={style.arrLine2}></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className={style.touchsectionForm}>
        <div className={style.touchGroup}>
          <h2>
            Get in Touch.. <br />
            <span>
              <small>Send me a message</small>
            </span>
          </h2>
          <form action="">
            <input
              type="text"
              id="fullName"
              placeholder="Enter Your Fullname"
            />
            <input
              type="text"
              id="fullName"
              placeholder="Enter Your Email address"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Email address"
            ></textarea>
          </form>
          <button className={`${style.messageBtn} ${style.projectBtn}`}>
            <span className={style.buttonContent}>
              <span>see my works</span>
              <span className={style.arrowContainer}>
                <span className={style.arrLine0}></span>
                <span className={style.arrLine1}></span>
                <span className={style.arrLine2}></span>
              </span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Highlight;
