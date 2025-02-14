// components/Footer.tsx

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faFileLines,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-primary text-white px-10 py-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-12 py-4 md:gap-6">
        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Developer</h3>
          <span>cole wendling</span>
          <a href="mailto:cole@wendling.io" className="text-sm hover:underline">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            cole@wendling.io
          </a>
          <a
            href="tel:+19403935061"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            +1-940-393-5061
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Links</h3>
          <div className="flex flex-row gap-8">
            <a
              href="https://github.com/colewendling"
              className="group relative hover:text-slate-300"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white text-2xl"
              />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden md:group-hover:block px-2 py-1 text-xs bg-black bg-opacity-70 text-white rounded">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/colewendling/"
              className="group relative hover:text-slate-300"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-2xl"
              />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden md:group-hover:block px-2 py-1 text-xs bg-black bg-opacity-70 text-white rounded">
                LinkedIn
              </span>
            </a>
            <a
              href="https://wendling.io/"
              className="group relative hover:text-slate-300"
            >
              <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden md:group-hover:block px-2 py-1 text-xs bg-black bg-opacity-70 text-white rounded">
                Website
              </span>
            </a>
            <a
              href="https://wendling.io/resume"
              className="group relative hover:text-slate-300"
            >
              <FontAwesomeIcon
                icon={faFileLines}
                className="text-white text-2xl"
              />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden md:group-hover:block px-2 py-1 text-xs bg-black bg-opacity-70 text-white rounded">
                Resume
              </span>
            </a>
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Connect</h3>
          <a
            href="mailto:cole@wendling.io"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
            Contact Me
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-10">
        Cole Wendling &copy; 2025 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;