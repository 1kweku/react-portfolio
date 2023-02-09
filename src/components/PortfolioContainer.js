import React, { useState } from "react";
import NavTabs from "./NavTabs";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";

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
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  return (
    <div>
      {
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      }
      {renderPage()}
      {<Footer />}
    </div>
  );
}
