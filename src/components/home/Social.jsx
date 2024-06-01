import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://web.facebook.com/?_rdc=1&_rdr"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-facebook"></i>
      </a>
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
