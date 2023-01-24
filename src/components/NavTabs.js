import React from "react";
import "../styles/navTabs.css";
const styles = {
  nav: {
    margin: 10,
  },
};
// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <a href="#about-me" style={styles.nav}>
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" style={styles.nav}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#resume" style={styles.nav}>
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" style={styles.nav}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
