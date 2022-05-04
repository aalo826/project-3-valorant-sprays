import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="socialIcons">
          <a href="https://github.com/aalo826/project-3-valorant-sprays">
            <FontAwesomeIcon className="icons" icon={brands("github")} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/aaron-lo-677248233/">
            <FontAwesomeIcon className="icons" icon={brands("Linkedin")} size="2x" />
          </a>
        </div>
        <div className="contactEmail">
          <p>sprays@valorant.com</p>
        </div>
        <div className="contactInfo">
          <p>416-825-7268(416-VALRANT)</p>
          <p>132 Terrybay Rd</p>
          <p>Toronto, ON</p>
          <p>M2Z2T3</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
