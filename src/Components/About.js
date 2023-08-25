// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       This is an about component.

//     </div>
//   )
// }

// export default About
import React from "react";
import "./styleab.css"; // Make sure to adjust the path to your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import todolistpic from "./todolistpic.jpg"; // Make sure to adjust the path to your image file

function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About the App</h1>
          </div>
          <div className="content">
            <h3>Message from the developer</h3>
            <p>
              Hii, This is Abhinandan Mukherjee. Introducing my streamlined
              React JS to-do list website, featuring a user-friendly interface
              with two seamlessly navigable sections: 'Home' and 'About'.
              Harnessing the power of React hooks, effortlessly switch between
              pages while enjoying a smooth task management experience.
              Embracing convenience, your to-do tasks are securely stored using
              local storage, ensuring your progress is always saved. Elevate
              your productivity with our minimalist design and intuitive
              functionality. Stay organized and efficient with ease. To know
              more about the app you may click the button below. It will
              redirect you to its github repository for more information.
            </p>
            <div className="button">
              <a href="https://github.com/officialabhinandan">Know More</a>
            </div>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/abhinandan.mukherjee.56863/"
              //role="link"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com/i_m_AbhinandanM"
              //role="link"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/being.abhinandan/"
              //role="link"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/officialabhinandan"
              //role="link"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinandan-mukherjee-6293991ba/"
              //role="link"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src={todolistpic} alt="Todo List" />
        </div>
      </div>
    </div>
  );
}

export default About;
