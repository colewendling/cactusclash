// components/Footer.tsx

import React from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, FileText, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-primary text-white px-10 py-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-12 py-4 md:gap-6">
        {/* Logo and Site Name */}
        <div className="flex items-center justify-center">
          <Image
            src="/logos/logo.png"
            alt="Texas Waterway Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Developer</h3>
          <span>cole wendling</span>
          <a
            href="mailto:cole@wendling.io"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            <Mail className="w-5 h-5" />
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
          <div className="flex flex-row gap-3 lg:gap-6">
            <a
              href="https://github.com/colewendling"
              className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-blue-500 text-slate-600 hover:text-white shadow-md shadow-black/50 w-8 h-8"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/colewendling/"
              className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-blue-500 text-slate-600 hover:text-white shadow-md shadow-black/50 w-8 h-8"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="https://wendling.io/"
              className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-blue-500 text-slate-600 hover:text-white shadow-md shadow-black/50 w-8 h-8"
            >
              <Globe className="size-5" />
            </a>
            <a
              href="https://wendling.io/resume"
              className="flex items-center justify-center bg-white p-1 rounded-full hover:bg-blue-500 text-slate-600 hover:text-white shadow-md shadow-black/50 w-8 h-8"
            >
              <FileText className="size-5" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg font-bold mb-3">Connect</h3>
          <a
            href="mailto:cole@wendling.io"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-10">
        Cactus Clash &copy; 2024 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
