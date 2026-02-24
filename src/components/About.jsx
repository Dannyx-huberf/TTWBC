import React from "react";

const About = () => {
  const facts = [
    {
      number: "01",
      title: "Government Accreditation",
      description:
        "This school is not accredited by the Government of Nigeria and does not intend doing so in the future.",
      highlight: "Not Government Accredited",
      icon: "📜",
    },
    {
      number: "02",
      title: "Transferrable Credit",
      description:
        "Her credit is not accredited by the government or any other religious bodies. Please if you are looking for accredited Bible institute to earn a transferrable credit, this may not be the right school for you.",
      highlight: "Non-Transferrable Credits",
      icon: "🎓",
    },
    {
      number: "03",
      title: "Academic Strength",
      description:
        "Her credits are however strong enough to help you compete favourably with similar institutions.",
      highlight: "Competitive Excellence",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Graduate Quality",
      description:
        "Graduate of this school can effectively preach, teach and defend the truth of the Holy Bible.",
      highlight: "Biblical Proficiency",
      icon: "📖",
    },
    {
      number: "05",
      title: "Spiritual Depth",
      description:
        "This school will help you to dig deep into the Scripture, it will foster your drive for spiritual growth.",
      highlight: "Deep Scripture Study",
      icon: "🌱",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative Background Elements - No Images */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 dark:bg-amber-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-50/30 via-transparent to-transparent dark:from-amber-900/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Welcome to TWBI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-amber-600 dark:text-amber-400 relative">
              Teach the Word Bible Institute
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5C50 1 150 1 199 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        {/* Main Description - Rich Text */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-linear-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 md:p-12 shadow-xl border border-amber-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-20 shrink-0">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg transform rotate-12">
                  ✝️
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-bold text-amber-600 dark:text-amber-400 text-2xl">
                    TWBI
                  </span>{" "}
                  is one of the teaching ministries of Teach the Word Bible
                  Church, it is a church-based Bible Institute committed to the
                  training of Teach the Word Bible Church workers, pastors and
                  non-pastors.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="text-3xl mb-3">📚</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      In-Depth Study
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The institute is a place where individuals are focused on
                      in-depth study of the Holy Bible and are trained to
                      effectively teach same to others.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="text-3xl mb-3">🌱</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Spiritual Growth
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Is a place of spiritual growth, a place where individual
                      learn how to effectively evangelize to the lost. A place
                      of sound doctrine.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-100 dark:bg-amber-900/20 rounded-xl p-6 border-l-8 border-amber-500 mt-6">
                  <p className="text-lg text-gray-800 dark:text-gray-200 italic font-medium">
                    "If you are hoping to be well grounded, well equipped to
                    preach and teach the word of God and also to grow in your
                    spiritual walk with God, then look no further because you
                    are at the right place."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facts Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Some Facts About The School
            </h3>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Number */}
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-100 dark:text-gray-700/30 select-none">
                  {fact.number}
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                    {fact.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {fact.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {fact.description}
                  </p>

                  {/* Highlight Tag */}
                  <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium">
                    {fact.highlight}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-amber-200/20 to-transparent dark:from-amber-800/20 rounded-tl-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                ⚠️
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">
                  Important Note for Prospective Students
                </h4>
                <p className="text-amber-100 text-lg">
                  If you are looking for an accredited Bible institute to earn
                  transferrable credit, this may not be the right school for
                  you. But if you desire to be well-grounded in God's Word,
                  you've found your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
