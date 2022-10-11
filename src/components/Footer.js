import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/mingweisoo/">
          {" "}
          <LinkedInIcon />
        </a>
        <a href="https://mail.google.com/mail/u/mingweisoo@gmail.com/?view=cm&to=mingweisoo@gmail.com">
          <EmailIcon />
        </a>

        <GitHubIcon />
      </div>
      <p> &copy; 2022 mingweisoo.com</p>
    </div>
  );
}

export default Footer;
