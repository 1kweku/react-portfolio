import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="contact">
      <ul>
        <li className="github">
          <a id="GitHub" href="https://github.com/1kweku?tab=repositories">
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="email">
          <a
            rel="noreferrer"
            href="mailto:adarkwakweku@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
}
