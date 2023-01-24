import React, { useState } from "react";
import NavTabs from "./NavTabs";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const styles = {
  header: {
    background: "white",
  },
  body: {
    background: "Turquoise",
  },
  footer: {
    background: "Blue",
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.header}>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <p id="about-me">
        <About />
      </p>
      <body id="portfolio" style={styles.body}>
        <Portfolio />
      </body>
      <body id="resume" style={styles.body}>
        <Resume />
      </body>
      <footer id="contact">
        <Contact />
      </footer>
    </div>
  );
}
