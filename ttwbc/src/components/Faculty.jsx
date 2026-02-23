// components/Faculty.js
import React from "react";

const Faculty = () => {
  const founder = {
    name: "Bro. Chukwuemeka Tony Ndubuisi",
    role: "Founder & Lead Minister",
    image: "👨‍🏫",
    biography:
      "Tony is a minister of God, founder of Teach the Word Bible Church and Teach the Word Bible Institute, a book-by-book Bible Institute where faithful leaders are trained to train others.",
    education: "Graduate of Educational Management",
    experience: [
      "Teacher of young and adult Bible studies",
      "Sunday School teacher",
      "Former Pastor at Redeemed Christian Church of God (RCCG)",
      "One-time Christian Corps Coordinator with NYSC",
      "Evangelism Coordinator with NYSC",
      "House Fellowship Coordinator with RCCG",
    ],
    family:
      "Married to Sis. Precious and they are blessed with a son. They reside in Lagos, Nigeria where they coordinate the affairs of the ministries the Lord has committed into their care.",
  };

  return (
    <section id="faculty" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Founder
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the visionary leader behind Teach The World Bible College
          </p>
        </div>

        {/* Main Faculty Card - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Simple Teacher Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-5xl mx-auto border-4 border-white dark:border-gray-800 shadow-lg">
                  {founder.image}
                </div>
              </div>

              {/* Name and Title */}
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {founder.name}
              </h3>
              <div className="text-amber-600 dark:text-amber-400 font-semibold text-lg mb-6">
                {founder.role}
              </div>

              {/* Biography - Simple and Clean */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {founder.biography}
                </p>
              </div>

              {/* Education Badge - Simple */}
              <div className="inline-flex items-center bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582a1 1 0 01.552.894 1 1 0 01-.552.894L11 9.677V11a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5h2.323l1.582-3.954A1 1 0 0111 2z" />
                </svg>
                {founder.education}
              </div>

              {/* Contact Button */}
              <button className="w-full cursor-pointer bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Bro. Tony
              </button>
            </div>
          </div>

          {/* Detailed Information Section */}
          <div className="space-y-6">
            {/* Ministry Experience */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg
                  className="w-7 h-7 text-amber-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Ministry Experience
              </h4>
              <ul className="space-y-4">
                {founder.experience.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Family & Personal Life */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg
                  className="w-7 h-7 text-amber-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Family & Personal Life
              </h4>
              <div className="flex items-start">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 mr-4 shadow-md">
                  <svg
                    className="w-8 h-8 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {founder.family}
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-amber-500">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg
                  className="w-7 h-7 text-amber-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                Ministry Vision
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                "A book-by-book Bible Institute where faithful leaders are
                trained to train others."
              </p>
              <div className="mt-4 flex items-center text-amber-600 dark:text-amber-400">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">
                  Training faithful leaders to train others
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Connect with Our Founder
            </h3>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Bro. Tony is passionate about training faithful leaders who will
              go on to train others. Reach out to learn more about his vision
              and ministry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2349017442039?text=Hello,%20I%20would%20like%20to%20schedule%20a%20meeting."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer bg-white text-amber-600 hover:bg-amber-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule a Meeting
              </a>
              <a
                href="https://www.youtube.com/@TeachtheWordBibleChurch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Watch His Teachings
              </a>
            </div>
            <p className="text-amber-100 text-sm mt-6">
              Based in Lagos, Nigeria • Ministering globally through Teach the
              Word Bible Institute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
