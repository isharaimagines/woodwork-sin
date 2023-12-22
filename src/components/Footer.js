import "./footer.css";

import logo from "../assets/img/my_logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="f_container">
        <div className="align-items-center">
          <div className="col">
            <img src={logo} alt="Logo" />
            <p>Imaginalytic ORG.</p>
          </div>
          <div className="discription">
            <h4>About Company</h4>
            <small>
              Our company is a global powerhouse in computer science. We provide
              comprehensive consulting, development, and research services,
              empowering organizations to harness the full potential of
              technology in an ever-evolving digital landscape.
            </small>
            <small>
              <sup>©</sup>Copyright 2023. All Rights Reserved
            </small>
            <small>
              <a href="/">Privacy Policy</a>
            </small>
          </div>
          <div className="social">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ishara-siriwardhana-5b1732274/">
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href="https://github.com/ishararaviget9/">
                <i className="ri-github-fill"></i>
              </a>
              <a href="mailto:studymotivat01@gmail.com">
                <i className="ri-mail-send-fill"></i>
              </a>
              <a href="https://discord.gg/ZBPR3EP3B6">
                <i className="ri-discord-fill"></i>
              </a>
            </div>
            <div className="social-icon">
              <a href="https://t.me/DroidImaginalytic">
                <i className="ri-telegram-fill"></i>
              </a>
              <a href="https://ishararaviget9.github.io/myprofile/">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://ishararaviget9.github.io/myprofile/">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
            <p>
              Let's connect with us and comfort with<br></br>
              advanced technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
