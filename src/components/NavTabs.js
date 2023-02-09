import React from "react";

const styles = {
  nav: {
    display: "flex",
    flexWrap: "wrap",
  },
};
export default function NavTabs(props) {
  return (
    <nav>
      <ul className="nav" style={styles.nav}>
        <ol
          className="nav-item"
          onClick={(e) => props.handlePageChange("About")}
        >
          <a href="#about"> About me </a>{" "}
        </ol>
        <ol
          className="nav-item"
          onClick={(e) => props.handlePageChange("Contact")}
        >
          <a href="#contact"> Contact </a>{" "}
        </ol>
        <ol
          className="nav-item"
          onClick={(e) => props.handlePageChange("Resume")}
        >
          <a href="#resume"> Resume </a>{" "}
        </ol>
        <ol
          className="nav-item"
          onClick={(e) => props.handlePageChange("Portfolio")}
        >
          <a href="#portfolio"> Portfolio </a>{" "}
        </ol>
      </ul>
    </nav>
  );
}
