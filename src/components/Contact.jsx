// components/Contact.js
import React, { useState } from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ch3sa2a",
        "template_usgujjh",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
        },
        "xu5dFSJkANWVmNK1E",
      )
      .then(
        (result) => {
          // Show alert
          alert("Thank you! Your message has been sent.");

          // Clear input fields
          setFormData({
            name: "",
            email: "",
            phone: "",
            program: "",
            message: "",
          });

          // Optional: reset status if you want
          setStatus({ type: "success", message: "" });
        },
        (error) => {
          console.error(error.text);
          alert("Oops! Something went wrong. Please try again.");
          setStatus({ type: "error", message: error.text });
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your journey? Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    5 Oyawuyi Lane Morogbo Junction Lagos State Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Phone Number
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    (+234) 901 744 2039
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Email Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    twbi2023@gmail.com
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Office Hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Facebook",
                    icon: <FaFacebook />,
                    link: "https://www.facebook.com/share/14SbBM1q8gT/?mibextid=qi2Omg",
                  },
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

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
          rounded-xl shadow-sm focus:shadow-md 
          focus:ring-2 focus:ring-amber-500 focus:border-transparent 
          transition-all duration-200 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
          rounded-xl shadow-sm focus:shadow-md 
          focus:ring-2 focus:ring-amber-500 focus:border-transparent 
          transition-all duration-200 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
          rounded-xl shadow-sm focus:shadow-md 
          focus:ring-2 focus:ring-amber-500 focus:border-transparent 
          transition-all duration-200 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
          rounded-xl shadow-sm focus:shadow-md 
          focus:ring-2 focus:ring-amber-500 focus:border-transparent 
          transition-all duration-200 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a program</option>
                    <option value="Diploma of Biblical Studies">
                      Diploma of Biblical Studies
                    </option>
                    <option value="Bachelor of Biblical Studies">
                      Bachelor of Biblical Studies
                    </option>
                    <option value="Cert. in Christian Praise & Worship">
                      Cert. in Christian Praise & Worship
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your interests and questions..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
        rounded-xl shadow-sm focus:shadow-md 
        focus:ring-2 focus:ring-amber-500 focus:border-transparent 
        transition-all duration-200 
        bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 
      bg-linear-to-r from-amber-500 to-amber-600 
      hover:from-amber-600 hover:to-amber-700
      text-white font-semibold tracking-wide 
      py-4 px-6 rounded-xl 
      transition-all duration-300 
      transform hover:scale-[1.02] 
      shadow-lg hover:shadow-2xl"
              >
                {status.type === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
                Please click the button once and wait for confirmation.
              </p>

              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-xl text-center font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
