import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const styles = {
  icons: {
    display: "flex",
    alignItems: "right",
    flexWrap: "wrap",
    textAlign: "center",
    float: "right",
    paddingight: 100,
  },
};

export default function Footer() {
  return (
    <ul style={styles.icons}>
      <ol className="github">
        <a id="GitHub" href="https://github.com/1kweku?tab=repositories">
          {" "}
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </ol>
      <ol className="nav-item">
        <a href="#contact">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </ol>
      <ol className="email">
        <a
          rel="noreferrer"
          href="mailto:adarkwakweku@gmail.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </ol>
    </ul>
  );
}
