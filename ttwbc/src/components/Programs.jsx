import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Theology",
      duration: "4 Years",
      description:
        "Comprehensive biblical and theological training for pastoral ministry and academic advancement.",
      icon: "📖",
      features: [
        "Biblical Languages",
        "Systematic Theology",
        "Church History",
        "Pastoral Ministry",
      ],
    },
    {
      title: "Christian Leadership",
      duration: "3 Years",
      description:
        "Develop essential leadership skills grounded in biblical principles for various ministry contexts.",
      icon: "👑",
      features: [
        "Leadership Theory",
        "Organizational Management",
        "Team Building",
        "Strategic Planning",
      ],
    },
    {
      title: "Biblical Counseling",
      duration: "4 Years",
      description:
        "Learn to provide compassionate, biblically-based counseling for individuals and families.",
      icon: "💬",
      features: [
        "Counseling Theory",
        "Family Systems",
        "Crisis Intervention",
        "Discipleship",
      ],
    },
    {
      title: "Missions & Evangelism",
      duration: "3 Years",
      description:
        "Prepare for cross-cultural ministry and effective evangelism in diverse contexts.",
      icon: "🌍",
      features: [
        "Cultural Anthropology",
        "World Religions",
        "Church Planting",
        "Urban Ministry",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our diverse range of programs designed to equip you for
            effective ministry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {program.title}
                  </h3>
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-medium px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-amber-500 mr-2"
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
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
