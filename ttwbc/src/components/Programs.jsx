import React from "react";

const Programs = () => {
  const schools = [
    {
      name: "School of Biblical Studies (SBS)",
      icon: "📚",
      color: "from-blue-500 to-indigo-600",
      programs: [
        {
          title: "Diploma of Biblical Studies",
          duration: "8 Trimesters",
          description:
            "A comprehensive program designed to provide students with a solid foundation in biblical knowledge and theological understanding.",
          icon: "📜",
          features: [
            "Old Testament Survey",
            "New Testament Survey",
            "Biblical Hermeneutics",
            "Systematic Theology I",
            "Biblical Greek I",
          ],
        },
        {
          title: "Bachelor of Biblical Studies",
          duration: "13 Trimesters",
          description:
            "An in-depth program preparing students for advanced ministry roles through comprehensive biblical and theological training.",
          icon: "🎓",
          features: [
            "Advanced Biblical Exegesis",
            "Systematic Theology II & III",
            "Biblical Greek II & III",
            "Biblical Hebrew",
            "Homiletics & Pastoral Ministry",
            "Church History",
          ],
        },
      ],
    },
    {
      name: "School of Biblical Music (SBM)",
      icon: "🎵",
      color: "from-amber-500 to-orange-600",
      programs: [
        {
          title: "Certificate in Christian Praise and Worship",
          duration: "Coming Soon",
          description:
            "A program designed to equip worship leaders and musicians with biblical foundations and practical skills for effective worship ministry.",
          icon: "🎼",
          features: [
            "Biblical Foundations of Worship",
            "Music Theory",
            "Vocal Training",
            "Instrumental Skills",
            "Worship Leading",
            "Songwriting",
          ],
          comingSoon: true,
        },
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive programs designed to equip you for
            effective ministry
          </p>
        </div>

        {schools.map((school, schoolIndex) => (
          <div key={schoolIndex} className="mb-16 last:mb-0">
            {/* School Header */}
            <div className="flex items-center mb-8">
              <div
                className={`bg-gradient-to-r ${school.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg`}
              >
                {school.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {school.name}
              </h3>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {school.programs.map((program, programIndex) => (
                <div
                  key={programIndex}
                  className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${
                    program.comingSoon ? "opacity-90" : ""
                  }`}
                >
                  {program.comingSoon && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 text-sm font-semibold">
                      Coming Soon
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div
                          className={`text-5xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {program.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {program.title}
                          </h4>
                          <span
                            className={`inline-block ${
                              program.comingSoon
                                ? "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200"
                                : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                            } text-sm font-medium px-4 py-1.5 rounded-full`}
                          >
                            {program.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                      <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                        Key Subjects
                      </h5>
                      <ul className="grid grid-cols-1 gap-3">
                        {program.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                          >
                            <svg
                              className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Info Bar */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-amber-600 dark:text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Trimester System
                </div>
                <div className="font-bold text-gray-900 dark:text-white">
                  4 Trimesters per Year
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-amber-600 dark:text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Faculty
                </div>
                <div className="font-bold text-gray-900 dark:text-white">
                  Experienced Scholars & Practitioners
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-amber-600 dark:text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Accreditation
                </div>
                <div className="font-bold text-gray-900 dark:text-white">
                  Nationally Recognized
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
