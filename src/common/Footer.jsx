import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="section">
      <div className="max-container">
        <h2 className="title">Contact Me</h2>
        <p className="description">skjb6996@gmail.com</p>
        <p className="description">skjb6996@naver.com</p>
        <ul className="contact_links">
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <Link
              to="https://lee19941226.github.io/YongJae-Portfolio/"
              className="contact_link"
            >
              https://lee19941226.github.io/YongJae-Portfolio/
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
