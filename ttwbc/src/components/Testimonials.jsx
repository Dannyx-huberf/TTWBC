// components/Testimonials.js
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "My time at Teach The World Bible College transformed my understanding of Scripture and equipped me for effective ministry. The faculty genuinely care about both your academic and spiritual growth.",
      author: "David Wilson",
      role: "Class of 2020, Pastor",
      image: "🙂",
    },
    {
      quote:
        "The practical ministry training I received was invaluable. I felt prepared to step into my pastoral role immediately after graduation and have been serving faithfully for 5 years.",
      author: "Rebecca Martinez",
      role: "Class of 2019, Missionary",
      image: "😊",
    },
    {
      quote:
        "The community at TTWBC is unlike any other. I formed lifelong friendships and was mentored by professors who are leaders in their fields. The education I received continues to impact my ministry daily.",
      author: "James Thompson",
      role: "Class of 2021, Youth Director",
      image: "😄",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our graduates about their transformative experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="text-6xl mb-6">❝</div>

            <div className="min-h-[200px]">
              <div key={currentTestimonial} className="animate-fadeIn">
                <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-gray-100">
                  {testimonials[currentTestimonial].quote}
                </p>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-amber-300">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-amber-400"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">35+</div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">2,000+</div>
            <div className="text-gray-300">Graduates Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-gray-300">Ministry Placement Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
