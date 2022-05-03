import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Contact = () => {
  return (
    <>
      <div className="wrapper">
        <section className="contact" id="contact">
          <div className="wrapper">
            <div className="socialIcons">
              <a href="#">
                <FontAwesomeIcon icon={brands("twitter")} />
                <span>Link to Twitter</span>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={brands("github")} />
                <span>Link to Pinterest</span>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={brands("Linkedin")} />
                <span>Link to LinkedIn</span>
              </a>
            </div>
            <div className="contactEmail">
              <h4>sprays@valorant.com</h4>
            </div>
            <div className="contactInfo">
              <p>416-825-7268(416-VALRANT)</p>
              <p>132 Terrybay Rd</p>
              <p>Toronto, ON</p>
              <p>M2Z2T3</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
