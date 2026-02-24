import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-20 bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">
              Now Accepting Applications
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Equipping Leaders for
            <span className="text-amber-400 block">God's Kingdom</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of faith and learning, dedicated to teaching the
            Word of God with excellence and passion for transformative ministry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <a href="#academicrequirements" className="underline-offset-0">
                Apply Now
              </a>
            </button>
            <button className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
              <a href="#programs">Explore Programs</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
