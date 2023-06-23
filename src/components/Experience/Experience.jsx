import React, { useEffect, useRef } from "react";
import "./experience.scss";
import { TagCloud } from "react-tagcloud";
import gsap from "gsap";
import { Power4 } from "gsap";
const data = [
  { value: "Python", count: 25 },
  { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 },
  { value: "ReactJs", count: 30 },

  { value: "Bootstrap", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "CSS3", count: 30 },
  { value: "Git", count: 22 },
  { value: "Agile", count: 7 },
  { value: "Django Rest Framework", count: 15 },
  { value: "scrum", count: 15 },
  { value: "Gsap.js", count: 17 },
  { value: "Django", count: 30 },
  { value: "PostgreSQL", count: 15 },
  { value: "Redux", count: 30 },
  { value: "NPM", count: 11 },
];

const Experience = () => {
  let experience = new gsap.timeline();

  const title = useRef(null);
  useEffect(() => {
    experience.to(".skills", {
      duration: 1,
      x: 0,
      ease: Power4.easeOut,
    });
  });
  return (
    <div className="skills" id="experience">
      <div className="container">
        <div className="main-title">
          <p>Skills and Experience</p>
        </div>
        <div className="skills-inter">
          <div className="skills-details">
            <div className="experience-row">
              <div className="experience-box">
                <h3>Full Stack developer</h3>
                <span> 2021-2022</span>
                <p>Freelance</p>
              </div>
              <div className="experience-box">
                <h3>Full Stack developer</h3>
                <span> 2020-2021</span>
                <p>ED SYNERGY</p>
              </div>
            </div>
            <div className="chart">
              <span>Frontend</span>
              <footer>
                <div data-width="55%" style={{ width: "55%" }}></div>{" "}
              </footer>
            </div>
            <div className="chart">
              <span>Backend</span>
              <footer>
                <div
                  data-width="50%"
                  style={{ backgroundColor: "#08fdd8", width: "50%" }}
                ></div>
              </footer>
            </div>
            <div className="chart">
              <span>React</span>
              <footer>
                <div data-width="60%" style={{ width: "60%" }}></div>{" "}
              </footer>
            </div>
            <div className="chart">
              <span>Django</span>
              <footer>
                <div
                  data-width="55%"
                  style={{ backgroundColor: "#08fdd8", width: "55%" }}
                ></div>
              </footer>
            </div>
          </div>
          <div className="contents">
            <TagCloud
              minSize={12}
              maxSize={35}
              tags={data}
              style={{ width: 300, textAlign: "left" }}
              className="myTagCloud"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
