import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <div className="left-footer">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>
      </div>

      <div className="mid-footer">
        <Link to="/">
          <img
            className="footer-logo"
            src={logo}
            alt="logo"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </Link>

        <p>Copyright 2026 &copy; Peter de Keijzer</p>
      </div>

      <div className="right-footer">
        <a href="https://github.com/Artoriun" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/peterdekeijzer/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
