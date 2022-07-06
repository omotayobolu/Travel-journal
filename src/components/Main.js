import React from "react";
import WebImg from "./Webimg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Main() {
  return (
    <div>
      <div className="container">
        <WebImg />
        <main className="content">
          <div className="intro-texts">
            <h2 className="name">Laura Smith</h2>
            <p className="job">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
          </div>
          <div className="contact-cta">
            <button className="btn email">
              <HiMail className="btn-icon" />
              Email
            </button>
            <button className="btn linkedIn">
              <FaLinkedin className="btn-icon" />
              LinkedIn
            </button>
          </div>
          <div className="more-info">
            <div className="about">
              <h3>About</h3>
              <p className="more-info-text">
                I am a frontend developer with a particular interest in making
                things simple and automating dily tasks. I try to keep up with
                security and best practices, and I'm always looking for new
                things to learn.
              </p>
            </div>
            <div className="interests">
              <h3>Interests</h3>
              <p className="more-info-text">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
          </div>
        </main>
        <footer>
          <div className="socials">
            <FaTwitter className="social" />
            <FaFacebookF className="social" />
            <FaInstagram className="social" />
            <FaGithub className="social" />
          </div>
        </footer>
      </div>
    </div>
  );
}
