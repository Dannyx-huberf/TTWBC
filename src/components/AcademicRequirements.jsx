// components/AcademicRequirements.js
import React, { useState } from "react";

const AcademicRequirements = () => {
  const [activeTab, setActiveTab] = useState("diploma");

  const requirements = {
    diploma: {
      title: "Diploma of Biblical Studies",
      duration: "2 Years",
      code: "DBS",
      icon: "📜",
      color: "from-emerald-500 to-teal-600",
      description:
        "Foundational biblical education for those beginning their journey in ministry and theological studies.",
      requirements: [
        {
          category: "Standard Admission",
          items: [
            "High School Certificate or equivalent",
            "English Language credit pass ",
            "Official academic transcripts",
            "Completed application form",
          ],
        },
        {
          category: "Mature Student Pathway",
          items: [
            "Minimum 2 years of active ministry experience",
            "Must demonstrate ability to read and write in English",
            "Letter of recommendation from church pastor/leadership",
            "Personal interview with admissions committee",
            "Written testimony of faith and calling",
          ],
        },
      ],
      documents: [
        "Completed Application Form",
        "High School Certificate (or equivalent)",
        "Academic Transcripts",
        "Two Letters of Recommendation",
        "Passport Photographs (2 copies)",
        "Application Fee Receipt",
        "Personal Statement (300-500 words)",
      ],
      specialNote:
        "Waiver may be granted to mature ministers with proven ministry experience. Please note that minister must be able to read and write in English Language.",
    },
    bachelor: {
      title: "Bachelor of Biblical Studies",
      duration: "4 Years",
      code: "BBS",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600",
      description:
        "Comprehensive theological education for those called to pastoral ministry, teaching, or advanced academic study.",
      pathways: [
        {
          title: "Direct Entry (Year 1)",
          requirements: [
            "High School Certificate or equivalent",
            "English Language credit pass ",
            "Minimum GPA of 2.5 or equivalent",
            "Official academic Statement of Result",
          ],
        },
        {
          title: "Advanced Standing - Year 2",
          requirements: [
            "Recognized Diploma in Biblical/Theological Studies",
            "High School Certificate or equivalent",
            "English Language credit pass",
            "Minimum GPA of 3.0 in diploma program",
            "Statement of Result from previous institution",
          ],
        },
        {
          title: "Advanced Standing - Year 3",
          requirements: [
            "TWBI Diploma in Biblical Studies",
            "High School Certificate or equivalent",
            "English Language proficiency",
            "Official TWBI Statement of Result",
            "Faculty recommendation",
          ],
        },
      ],
      documents: [
        "Completed Application Form",
        "High School Certificate",
        "Previous Diploma Certificate (if applicable)",
        "All Academic Transcripts",
        "Two Letters of Recommendation",
        "Passport Photographs (1 copy)",
        "Application Fee Receipt",
        "Personal Statement (500-700 words)",
      ],
      specialNote:
        "Applicants with TWBI Diploma are admitted directly into Year 3. Other recognized diplomas qualify for Year 2 entry.",
    },
  };

  const currentReq = requirements[activeTab];

  return (
    <section
      id="academicrequirements"
      className="py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Your Journey Begins Here
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Requirements
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We've designed our admission process to be accessible while
            maintaining academic excellence. Find the requirements that match
            your educational journey.
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg inline-flex flex-col sm:flex-row">
            <button
              onClick={() => setActiveTab("diploma")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "diploma"
                  ? "bg-linear-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-105"
                  : "text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              <span className="mr-2">📜</span>
              Diploma Program
            </button>
            <button
              onClick={() => setActiveTab("bachelor")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "bachelor"
                  ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <span className="mr-2">🎓</span>
              Bachelor Program
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Program Header Card */}
          <div
            className={`bg-linear-to-r ${currentReq.color} rounded-3xl p-8 md:p-12 mb-8 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="text-6xl mb-4">{currentReq.icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  {currentReq.title}
                </h2>
                <p className="text-xl opacity-90">{currentReq.description}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold">{currentReq.duration}</div>
                <div className="text-sm opacity-90">Program Duration</div>
                <div className="mt-2 text-lg font-semibold">
                  {currentReq.code}
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Requirements */}
            <div className="lg:col-span-2 space-y-8">
              {activeTab === "diploma"
                ? // Diploma Requirements
                  currentReq.requirements.map((section, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span
                          className={`w-10 h-10 bg-linear-to-r ${currentReq.color} rounded-full flex items-center justify-center text-white mr-4`}
                        >
                          {index + 1}
                        </span>
                        {section.category}
                      </h3>
                      <ul className="space-y-4">
                        {section.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700 dark:text-gray-300"
                          >
                            <svg
                              className="w-6 h-6 text-emerald-500 mr-3 shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                : // Bachelor Pathways
                  currentReq.pathways.map((pathway, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span
                          className={`w-10 h-10 bg-gradient-to-r ${currentReq.color} rounded-full flex items-center justify-center text-white mr-4`}
                        >
                          {index + 1}
                        </span>
                        {pathway.title}
                      </h3>
                      <ul className="space-y-4">
                        {pathway.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700 dark:text-gray-300"
                          >
                            <svg
                              className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
            </div>

            {/* Sidebar - Required Documents */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-amber-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Required Documents
                </h3>
                <ul className="space-y-3 mb-8">
                  {currentReq.documents.map((doc, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>

                {/* Application Fee */}
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Application Fee:
                    </span>
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                      N5000
                    </span>
                  </div>
                </div>

                {/* Deadline Info */}
                {/* <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Application Deadlines
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Fall Semester:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        August 15
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Spring Semester:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        January 10
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Special Note */}
          <div className="bg-linear-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl p-8 mb-8 border-l-8 border-amber-500">
            <div className="flex items-start">
              <svg
                className="w-8 h-8 text-amber-600 dark:text-amber-400 mr-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Important Note
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {currentReq.specialNote}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Comparison Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
              Quick Program Comparison
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="py-2 sm:py-4 px-3 sm:px-6 text-left text-gray-700 dark:text-gray-300 font-semibold">
                      Program
                    </th>
                    <th className="py-2 sm:py-4 px-3 sm:px-6 text-left text-gray-700 dark:text-gray-300 font-semibold">
                      Duration
                    </th>
                    <th className="py-2 sm:py-4 px-3 sm:px-6 text-left text-gray-700 dark:text-gray-300 font-semibold">
                      Entry Requirements
                    </th>
                    <th className="hidden sm:table-cell py-2 sm:py-4 px-3 sm:px-6 text-left text-gray-700 dark:text-gray-300 font-semibold">
                      Advanced Standing
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-4 px-3 sm:px-6 font-medium text-gray-900 dark:text-white">
                      Diploma
                    </td>
                    <td className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      2 years
                    </td>
                    <td className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      High School Certificate
                    </td>
                    <td className="hidden sm:table-cell py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      Mature student waiver available
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-4 px-3 sm:px-6 font-medium text-gray-900 dark:text-white">
                      Bachelor (Direct)
                    </td>
                    <td className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      4 years
                    </td>
                    <td className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      High School Certificate
                    </td>
                    <td className="hidden sm:table-cell py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      N/A
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-4 px-3 sm:px-6 font-medium text-gray-900 dark:text-white">
                      Bachelor (Advanced)
                    </td>
                    <td className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      2-3 years
                    </td>
                    <td className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      Previous Diploma
                    </td>
                    <td className="hidden sm:table-cell py-2 sm:py-4 px-3 sm:px-6 text-gray-600 dark:text-gray-400">
                      Year 2 or 3 entry
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                Downlaoad the Application Form and start to you journey in
                learning more about God.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://form.jotform.com/260545102374046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white cursor-pointer text-amber-600 hover:bg-amber-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Fill Application Form
                </a>
              </div>
              <p className="text-amber-100 text-sm mt-6">
                Have questions? Call us at{" "}
                <span className="font-bold">(234) 901 744 2039</span> or email{" "}
                <span className="font-bold">twbi2023@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicRequirements;
