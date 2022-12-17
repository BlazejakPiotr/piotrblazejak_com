import React from "react";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="socials">
          <a href="dc">
            <BsDiscord />
          </a>
          <a href="https://github.com/blazejakpiotr">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/blazejakpiotr/">
            <BsLinkedin />
          </a>
          <div></div>
        </div>
        <p>© 2022 Piotr Blazejak - A Project Built with Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
