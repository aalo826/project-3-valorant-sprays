const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-disclaimer">
          <p>
            Valorant Sprays isn't endorsed by Riot Games and doesn't reflect the views or opinions
            of Riot Games or anyone officially involved in producing or managing Riot Games
            properties. Riot Games, and all associated properties are trademarks or registered
            trademarks of Riot Games, Inc
          </p>
        </div>
        <div className="footer-copyright">
          <p>© 2022 Aaron Lo</p>
          <div className="footer-button">
            <a
              href="https://github.com/aalo826/project-3-valorant-sprays"
              className="button-github"
            >
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
