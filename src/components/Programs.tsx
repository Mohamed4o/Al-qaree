import React from 'react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "حفظ القرآن للأطفال",
      englishTitle: "Quran Memorization for Kids",
      description: "Structured memorization program designed specifically for children aged 5-15, with engaging activities and rewards system.",
      features: ["Interactive learning methods", "Small class sizes", "Progress tracking", "Monthly assessments"],
      duration: "2-4 years",
      icon: "🧒",
      color: "from-green-600 to-green-800"
    },
    {
      title: "حفظ القرآن للبالغين",
      englishTitle: "Quran Memorization for Adults", 
      description: "Flexible memorization program for adults with various learning schedules and personalized approaches.",
      features: ["Flexible timing", "One-on-one sessions", "Weekend classes", "Online options"],
      duration: "3-5 years",
      icon: "👨‍🎓",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "دروس التجويد",
      englishTitle: "Tajweed Lessons",
      description: "Learn the proper pronunciation and rules of Quranic recitation with certified instructors.",
      features: ["Pronunciation training", "Tajweed rules", "Audio practice", "Certification available"],
      duration: "6-12 months",
      icon: "🎵",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "الدروس الأونلاين",
      englishTitle: "Online Live Classes",
      description: "Interactive online sessions with qualified teachers from anywhere in the world.",
      features: ["HD video classes", "Interactive whiteboard", "Recording available", "24/7 support"],
      duration: "Ongoing",
      icon: "💻",
      color: "from-red-600 to-red-800"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white arabic-font">
            برامجنا ودوراتنا
          </h2>
          <h3 className="text-3xl font-semibold mb-8 text-red-200">Our Programs & Courses</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 group"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{program.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-white arabic-font mb-2">
                  {program.title}
                </h4>
                <h5 className="text-xl font-semibold text-red-200 mb-4">
                  {program.englishTitle}
                </h5>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-center">
                {program.description}
              </p>

              <div className="space-y-3 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-red-800/30 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-400">Duration:</span>
                    <span className="text-red-300 font-semibold ml-2">{program.duration}</span>
                  </div>
                  <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-8 border border-red-700/30 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Special Offers</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-lg font-semibold text-red-300 mb-2">Family Package</div>
                <div className="text-sm text-gray-300">25% discount for families with 3+ students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-lg font-semibold text-red-300 mb-2">Early Bird</div>
                <div className="text-sm text-gray-300">15% off for registrations before month end</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-lg font-semibold text-red-300 mb-2">Scholarship</div>
                <div className="text-sm text-gray-300">Merit-based scholarships available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;