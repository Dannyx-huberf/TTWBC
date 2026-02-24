// components/Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Teach The World</h3>
                <p className="text-amber-400 text-sm">Bible College</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Equipping leaders for effective ministry through quality biblical
              education, spiritual formation, and practical training since 1985.
            </p>
            <div className="mt-8">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: <FaFacebookF />, link: "#" },
                  { name: "Twitter", icon: <FaTwitter />, link: "#" },
                  { name: "Instagram", icon: <FaInstagram />, link: "#" },
                  {
                    name: "YouTube",
                    icon: <FaYoutube />,
                    link: "https://www.youtube.com/@TeachtheWordBibleChurch",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg 
                                 bg-gray-200 dark:bg-gray-700 
                                 text-gray-600 dark:text-gray-400
                                 transition-all duration-300 
                                 hover:bg-amber-500 hover:text-white 
                                 hover:scale-110 hover:-translate-y-1
                                 shadow-md hover:shadow-lg"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Programs",
                "AcademicRequirements",
                "Faculty",
                "Admissions",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>

            <ul className="space-y-3">
              {[
                { name: "Diploma of Biblical Studies", link: "#diploma" },
                { name: "Bachelor of Biblical Studies", link: "#bachelor" },
                {
                  name: "Certificate in Christian Praise and Worship",
                  link: "#certificate",
                },
              ].map((program) => (
                <li key={program.name}>
                  <a
                    href={program.link}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amber-400 mt-1 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400">
                  5 Oyawuyi Lane Morogbo Junction Lagos State Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-amber-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-400">(+234) 901 744 2039</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-amber-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-400">twbi2023@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 md:flex-row text-center ">
          <p className="text-gray-400 text-sm text-center">
            © 2026 Teach The World Bible College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
