"use client";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-black/[0.96] text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://discord.gg/g2m3ExwP" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="https://t.me/NextSoftGroup" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm mb-2">
          &copy; {new Date().getFullYear()} NextSoft. All rights reserved.
        </p>
        <nav className="mt-4">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="https://discord.gg/g2m3ExwP" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
