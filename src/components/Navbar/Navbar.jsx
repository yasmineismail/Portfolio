import "./navbar.scss";
import { useState, useEffect } from "react";

import yasLogo from "../../assets/images/logoyas.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [close, setClose] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div className={colorChange ? "nav colorChange" : "nav"}>
        <div className="logo">
          <img src={yasLogo} alt="" />{" "}
        </div>

        <nav className={`nav-header ${close ? "background-on " : ""}`}>
          <ul className={`nav-web ${close ? "" : "nav-mobile"}`}>
            <li>
              <HashLink smooth to="/#home">
                Home{" "}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About{" "}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio">
                Portfolio{" "}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experience">
                Experience{" "}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact{" "}
              </HashLink>
            </li>
          </ul>
        </nav>
        <div
          className="mobile-button"
          onClick={() => {
            setClose(!close);
          }}
        >
          <span className={`label ${close ? "labelclose" : "label1"}`}></span>
          <span className={close ? "close" : "label label2"}></span>
          <span className={`label ${close ? "labelclose2" : "label3"}`}></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
