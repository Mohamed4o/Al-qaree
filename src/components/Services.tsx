import React from 'react';

interface ServicesProps {
  language: string;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const services = [
    {
      titleAr: "حفظ القرآن للأطفال",
      titleEn: "Quran Memorization for Kids",
      descriptionAr: "برنامج حفظ منظم مصمم خصيصاً للأطفال من سن 5-15 سنة، مع أنشطة تفاعلية ونظام مكافآت.",
      descriptionEn: "Structured memorization program designed specifically for children aged 5-15, with engaging activities and rewards system.",
      featuresAr: ["طرق تعلم تفاعلية", "فصول صغيرة", "تتبع التقدم", "تقييمات شهرية"],
      featuresEn: ["Interactive learning methods", "Small class sizes", "Progress tracking", "Monthly assessments"],
      durationAr: "2-4 سنوات",
      durationEn: "2-4 years",
      icon: "🧒",
      color: "from-green-600 to-green-800"
    },
    {
      titleAr: "حفظ القرآن للبالغين",
      titleEn: "Quran Memorization for Adults", 
      descriptionAr: "برنامج حفظ مرن للبالغين مع جداول تعلم متنوعة ومناهج شخصية.",
      descriptionEn: "Flexible memorization program for adults with various learning schedules and personalized approaches.",
      featuresAr: ["مواعيد مرنة", "جلسات فردية", "فصول نهاية الأسبوع", "خيارات أونلاين"],
      featuresEn: ["Flexible timing", "One-on-one sessions", "Weekend classes", "Online options"],
      durationAr: "3-5 سنوات",
      durationEn: "3-5 years",
      icon: "👨‍🎓",
      color: "from-blue-600 to-blue-800"
    },
    {
      titleAr: "دروس التجويد",
      titleEn: "Tajweed Lessons",
      descriptionAr: "تعلم النطق الصحيح وقواعد تلاوة القرآن مع مدربين معتمدين.",
      descriptionEn: "Learn the proper pronunciation and rules of Quranic recitation with certified instructors.",
      featuresAr: ["تدريب النطق", "قواعد التجويد", "ممارسة صوتية", "شهادة متاحة"],
      featuresEn: ["Pronunciation training", "Tajweed rules", "Audio practice", "Certification available"],
      durationAr: "6-12 شهر",
      durationEn: "6-12 months",
      icon: "🎵",
      color: "from-purple-600 to-purple-800"
    },
    {
      titleAr: "الدروس المباشرة الأونلاين",
      titleEn: "Live Online Classes",
      descriptionAr: "جلسات تفاعلية أونلاين مع معلمين مؤهلين من أي مكان في العالم.",
      descriptionEn: "Interactive online sessions with qualified teachers from anywhere in the world.",
      featuresAr: ["فصول فيديو عالية الجودة", "سبورة تفاعلية", "تسجيل متاح", "دعم 24/7"],
      featuresEn: ["HD video classes", "Interactive whiteboard", "Recording available", "24/7 support"],
      durationAr: "مستمر",
      durationEn: "Ongoing",
      icon: "💻",
      color: "from-red-600 to-red-800"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
            {language === 'en' ? 'Our Services' : 'خدماتنا'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 group"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h4 className={`text-2xl font-bold text-white mb-2 ${language === 'ar' ? 'arabic-font' : ''}`}>
                  {language === 'en' ? service.titleEn : service.titleAr}
                </h4>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-center">
                {language === 'en' ? service.descriptionEn : service.descriptionAr}
              </p>

              <div className="space-y-3 mb-6">
                {(language === 'en' ? service.featuresEn : service.featuresAr).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-red-800/30 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-400">
                      {language === 'en' ? 'Duration:' : 'المدة:'}
                    </span>
                    <span className="text-red-300 font-semibold ml-2">
                      {language === 'en' ? service.durationEn : service.durationAr}
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      // FIX: Add enrollment functionality
                      alert(language === 'en' ? 'Enrollment form will open here' : 'سيتم فتح نموذج التسجيل هنا');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        alert(language === 'en' ? 'Enrollment form will open here' : 'سيتم فتح نموذج التسجيل هنا');
                      }
                    }}
                    aria-label={`${language === 'en' ? 'Enroll in' : 'التسجيل في'} ${language === 'en' ? service.titleEn : service.titleAr}`}
                    className="w-full bg-gradient-to-r from-red-900 to-red-950 hover:from-red-800 hover:to-red-900 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {language === 'en' ? 'Enroll Now' : 'سجل الآن'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-8 border border-red-700/30 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              {language === 'en' ? 'Special Offers' : 'عروض خاصة'}
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-lg font-semibold text-red-300 mb-2">
                  {language === 'en' ? 'Family Package' : 'باقة العائلة'}
                </div>
                <div className="text-sm text-gray-300">
                  {language === 'en' ? '25% discount for families with 3+ students' : '25% خصم للعائلات مع 3+ طلاب'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-lg font-semibold text-red-300 mb-2">
                  {language === 'en' ? 'Early Bird' : 'التسجيل المبكر'}
                </div>
                <div className="text-sm text-gray-300">
                  {language === 'en' ? '15% off for registrations before month end' : '15% خصم للتسجيل قبل نهاية الشهر'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-lg font-semibold text-red-300 mb-2">
                  {language === 'en' ? 'Scholarship' : 'منحة دراسية'}
                </div>
                <div className="text-sm text-gray-300">
                  {language === 'en' ? 'Merit-based scholarships available' : 'منح دراسية على أساس الجدارة متاحة'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;