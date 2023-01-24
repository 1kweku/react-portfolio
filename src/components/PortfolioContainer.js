import React, { useState } from "react";
import NavTabs from "./NavTabs";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <About />
      <Portfolio />
      <Resume />
      <footer>
        <Contact />
      </footer>
    </div>
  );
}
