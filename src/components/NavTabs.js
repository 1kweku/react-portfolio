import React from "react";
//import "/styles/NavTabs";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul
        className="nav nav-tabs"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            About me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </a>
        </li>
        {/* <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Portfolio")}
          //  TODO: Add a comment explaining what this logic is doing

          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </li> */}
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing

            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>

      {/* CONTACT ICONS  */}

      <ul class="contact-icons">
        <li className="nav-item">
          <a
            img
            src="../public/github-icon.png"
            id="GitHub"
            alt="restaurant"
            href="https://github.com/1kweku?tab=repositories"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Twitter
          </a>
        </li>
        <li className="nav-item">
          <a
            img
            src="public/email-icon.png"
            rel="noreferrer"
            href="mailto:kwe11_mason@yahoo.com"
            target="_blank"
            class="btn btn-primary"
          >
            Email Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
