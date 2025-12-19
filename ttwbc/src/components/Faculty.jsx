// components/Faculty.js
import React from "react";

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. John Smith",
      role: "Dean of Theology",
      education: "PhD in Systematic Theology",
      experience: "20+ years teaching experience",
      image: "👨‍🏫",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Director of Biblical Studies",
      education: "ThD in Old Testament Studies",
      experience: "Published author and researcher",
      image: "👩‍🏫",
    },
    {
      name: "Rev. Michael Brown",
      role: "Professor of Practical Ministry",
      education: "MDiv, DMin Candidate",
      experience: "30+ years pastoral experience",
      image: "👨‍💼",
    },
    {
      name: "Dr. Emily Chen",
      role: "Chair of Christian Education",
      education: "EdD in Christian Education",
      experience: "Curriculum development specialist",
      image: "👩‍🎓",
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Faculty
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn from experienced scholars and practitioners dedicated to your
            growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {member.image}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>

              <div className="text-amber-600 dark:text-amber-400 font-medium mb-4">
                {member.role}
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-amber-500 mr-2"
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
                  {member.education}
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-amber-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {member.experience}
                </div>
              </div>

              <button className="mt-6 w-full bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                View Profile
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Distinguished Faculty
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're always looking for passionate educators committed to
              training the next generation of Christian leaders.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Faculty Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
