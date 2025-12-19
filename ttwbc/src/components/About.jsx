import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Our College
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Training faithful servants to impact the world for Christ since 1985
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl p-1 inline-block mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  1985
                </div>
                <div className="text-amber-600 font-medium">Founded</div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Training Faithful Servants for Ministry
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Teach The World Bible College is committed to providing quality
              biblical education that transforms lives and impacts communities.
              Our mission is to equip men and women for effective ministry
              through rigorous academic study, spiritual formation, and
              practical training.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We believe that every believer is called to ministry, and our
              programs are designed to help you discover and fulfill your
              God-given purpose. Whether you're preparing for pastoral ministry,
              missions, Christian education, or simply want to deepen your
              understanding of Scripture, we have a program for you.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                Our Mission
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-500 hover:text-amber-600 font-bold py-3 px-6 rounded-full transition-all duration-300">
                Meet Our Leadership
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl aspect-video"></div>
                <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl aspect-square"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-2xl aspect-square"></div>
                <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl aspect-video"></div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">35+</div>
              <div className="font-medium">Years of Faithful Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
