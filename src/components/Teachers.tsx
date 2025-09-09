import React from 'react';

interface TeachersProps {
  language: string;
}

const Teachers: React.FC<TeachersProps> = ({ language }) => {
  const teachers = [
    {
      nameAr: "القارئ أنس البرقي",
      nameEn: "AL-Qaree Anas Al-Barqy",
      titleAr: "رئيس الأكاديمية",
      titleEn: "Head of Academy",
      specializationAr: "حفظ القرآن والتجويد",
      specializationEn: "Quran Memorization & Tajweed",
      experienceAr: "20+ سنة",
      experienceEn: "20+ years",
      qualificationsAr: ["دكتوراه في الدراسات الإسلامية", "قارئ معتمد", "خريج الأزهر"],
      qualificationsEn: ["PhD in Islamic Studies", "Certified Qari", "Al-Azhar Graduate"],
      languagesAr: ["العربية", "الإنجليزية", "الأردية"],
      languagesEn: ["Arabic", "English", "Urdu"],
      image: <img 
  src="/Teacher.png" 
  alt="Ustadh Name" 
  className="w-25 h-25 object-cover rounded-xl"
/>

    },
    {
      nameAr: "الأستاذة فاطمة السوري",
      nameEn: "Ustadha Fatima Al-Souri",
      titleAr: "مدربة أولى",
      titleEn: "Senior Instructor",
      specializationAr: "برنامج القرآن للأطفال",
      specializationEn: "Children's Quran Program",
      experienceAr: "15+ سنة",
      experienceEn: "15+ years",
      qualificationsAr: ["ماجستير في الدراسات القرآنية", "معتمدة في علم نفس الطفل", "حافظة"],
      qualificationsEn: ["MA in Quranic Studies", "Child Psychology Certified", "Hafiza"],
      languagesAr: ["العربية", "الإنجليزية", "الفرنسية"],
      languagesEn: ["Arabic", "English", "French"],
      image: "👩‍🏫"
    },
    {
      nameAr: "الشيخ محمد الحفيظ",
      nameEn: "Sheikh Mohammed Al-Hafiz",
      titleAr: "أخصائي التجويد",
      titleEn: "Tajweed Specialist",
      specializationAr: "التجويد المتقدم والقراءات",
      specializationEn: "Advanced Tajweed & Qira'at",
      experienceAr: "18+ سنة",
      experienceEn: "18+ years",
      qualificationsAr: ["إجازة في 10 قراءات", "أستاذ تجويد", "خبير تدريب صوتي"],
      qualificationsEn: ["Ijaza in 10 Qira'at", "Tajweed Master", "Voice Training Expert"],
      languagesAr: ["العربية", "الإنجليزية", "التركية"],
      languagesEn: ["Arabic", "English", "Turkish"],
      image: "🧔"
    },
    {
      nameAr: "الأستاذة عائشة المدني",
      nameEn: "Ustadha Aisha Al-Madani",
      titleAr: "منسقة الدروس الأونلاين",
      titleEn: "Online Coordinator",
      specializationAr: "التعليم القرآني الرقمي",
      specializationEn: "Digital Quran Education",
      experienceAr: "12+ سنة",
      experienceEn: "12+ years",
      qualificationsAr: ["ماجستير في تكنولوجيا التعليم", "حافظة", "معتمدة في التدريس الأونلاين"],
      qualificationsEn: ["MSc in Educational Technology", "Hafiza", "Online Teaching Certified"],
      languagesAr: ["العربية", "الإنجليزية", "الماليزية"],
      languagesEn: ["Arabic", "English", "Malay"],
      image: "👩‍💻"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
            {language === 'en' ? 'Our Distinguished Teachers' : 'معلمونا المتميزون'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{teacher.image}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className={`text-2xl font-bold text-white mb-1 ${language === 'ar' ? 'arabic-font' : ''}`}>
                      {language === 'en' ? teacher.nameEn : teacher.nameAr}
                    </h4>
                    <div className="inline-block bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      {language === 'en' ? teacher.titleEn : teacher.titleAr}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400 text-sm font-medium">
                        {language === 'en' ? 'Specialization:' : 'التخصص:'}
                      </span>
                      <span className="text-white ml-2">
                        {language === 'en' ? teacher.specializationEn : teacher.specializationAr}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 text-sm font-medium">
                        {language === 'en' ? 'Experience:' : 'الخبرة:'}
                      </span>
                      <span className="text-red-300 ml-2 font-semibold">
                        {language === 'en' ? teacher.experienceEn : teacher.experienceAr}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 text-sm font-medium block mb-2">
                        {language === 'en' ? 'Qualifications:' : 'المؤهلات:'}
                      </span>
                      <div className="space-y-1">
                        {(language === 'en' ? teacher.qualificationsEn : teacher.qualificationsAr).map((qual, qualIndex) => (
                          <div key={qualIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{qual}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-gray-400 text-sm font-medium">
                        {language === 'en' ? 'Languages:' : 'اللغات:'}
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {(language === 'en' ? teacher.languagesEn : teacher.languagesAr).map((lang, langIndex) => (
                          <span
                            key={langIndex}
                            className="bg-red-800/30 text-red-300 px-2 py-1 rounded-md text-xs"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-8 border border-red-700/30 text-center max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-6">
              {language === 'en' ? 'Join Our Teaching Team' : 'انضم إلى فريق التدريس'}
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {language === 'en'
                ? 'We are always looking for qualified and passionate Islamic educators to join our academy. If you have expertise in Quranic studies and a desire to teach, we\'d love to hear from you.'
                : 'نحن نبحث دائماً عن معلمين إسلاميين مؤهلين ومتحمسين للانضمام إلى أكاديميتنا. إذا كان لديك خبرة في الدراسات القرآنية ورغبة في التدريس، فنحن نود أن نسمع منك.'
              }
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📜</div>
                <div className="text-lg font-semibold text-red-300 mb-2">
                  {language === 'en' ? 'Qualifications Required' : 'المؤهلات المطلوبة'}
                </div>
                <div className="text-sm text-gray-400">
                  {language === 'en' ? 'Islamic education degree or Ijaza' : 'شهادة في التعليم الإسلامي أو إجازة'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-lg font-semibold text-red-300 mb-2">
                  {language === 'en' ? 'Competitive Salary' : 'راتب تنافسي'}
                </div>
                <div className="text-sm text-gray-400">
                  {language === 'en' ? 'Based on experience and qualifications' : 'حسب الخبرة والمؤهلات'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-lg font-semibold text-red-300 mb-2">
                  {language === 'en' ? 'Remote Options' : 'خيارات العمل عن بُعد'}
                </div>
                <div className="text-sm text-gray-400">
                  {language === 'en' ? 'Teach from anywhere in the world' : 'علّم من أي مكان في العالم'}
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              {language === 'en' ? 'Apply to Teach' : 'تقدم للتدريس'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
