import React, { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import Data from "./Data";
import close from "../../assets/images/close.svg";
const Portfolio = () => {
  const imgRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [Loaded, setLoaded] = useState(false);
  const [lengthImgs, setLength] = useState(0);
  const [workdata, setWorkData] = useState([]);
  const [popup, setPopUp] = useState(false);
  const nextSlide = () => {
    setCurrent(current == lengthImgs - 1 ? 0 : current + 1);
    setLoaded(false);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? lengthImgs - 1 : current - 1);
    setLoaded(false);
  };
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="main-title">
          <p>Portfolio</p>
        </div>
        <div className="portfolio-content">
          {Data.map((ele) => {
            const {
              id,
              image,
              title,
              images,
              description,
              category,
              technologies,
            } = ele;

            return (
              <div
                key={id}
                className="work"
                onClick={() => {
                  setWorkData(ele);
                  setPopUp(true);
                  setLength(images.length);
                  document.body.classList.add("overflow-hidden");
                }}
              >
                <img src={image} alt="" />
                <div className="caption">
                  <h4>{title}</h4>
                  <p>{category}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={popup ? "portfolio-popup" : "is-hidden"}>
          <div className="pp-content">
            <a>
              <div
                className="pp-header"
                onClick={() => {
                  setPopUp(false);
                  setCurrent(0);
                  setLength(0);
                  document.body.classList.remove("overflow-hidden");
                }}
              >
                <img src={close} alt="" />
              </div>
            </a>
            <div className="carousel-track-container">
              <ul ref={imgRef} className="carousel-track">
                {workdata?.images?.map((imgWork, index) => {
                  return (
                    <li key={index} className="carousel-slide current-slide">
                      {current == index && (
                        <img className="carousel-image" src={imgWork} alt="" />
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="carousel-button left " onClick={prevSlide}>
                <svg
                  viewBox="0 0 26 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.854 47.707L25.561 24L1.854 0.292999L0.438995 1.707L22.732 24L0.438995 46.293L1.854 47.707Z"
                    fill="#a12ca3"
                  />
                </svg>
              </div>
              <div className="carousel-button right" onClick={nextSlide}>
                <svg
                  viewBox="0 0 26 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.854 47.707L25.561 24L1.854 0.292999L0.438995 1.707L22.732 24L0.438995 46.293L1.854 47.707Z"
                    fill="#a12ca3"
                  />
                </svg>
              </div>

              <div className="carousel-nav">
                {workdata?.images?.map((imgWork, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        current === index
                          ? "carousel-indicator current-slide"
                          : "carousel-indicator"
                      }
                      onClick={() => setCurrent(index)}
                    ></span>
                  );
                })}

                <div></div>
              </div>
            </div>
            <div className="description">
              {workdata && (
                <>
                  <p>
                    <span>Title: </span> {workdata.title}
                  </p>
                  <p>
                    <span>Descreption:</span> {workdata.description}
                  </p>
                  <p>
                    <span>Technologies: </span> {workdata.technologies}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
