import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Soo Ming Wei</h2>
        <div className="prompt">
          <p>
            Computer Science and Design graduate with 3 months' experience in
            hardware development and software testing. Created and implemented
            customer information dashboard using React.js and Node.js
          </p>
          <a href="https://www.linkedin.com/in/mingweisoo/">
            {" "}
            <LinkedInIcon />
          </a>
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring, ExpressJS, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
