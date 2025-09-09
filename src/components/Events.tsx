import React from 'react';

interface EventsProps {
  language: string;
}

const Events: React.FC<EventsProps> = ({ language }) => {
  const upcomingEvents = [
    {
      titleAr: "مسابقة الحفظ السنوية",
      titleEn: "Annual Memorization Competition",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      locationAr: "القاعة الرئيسية للأكاديمية",
      locationEn: "Academy Main Hall",
      typeAr: "مسابقة",
      typeEn: "Competition",
      descriptionAr: "مسابقة سنوية للطلاب لإظهار مهاراتهم في الحفظ مع جوائز للفائزين.",
      descriptionEn: "Annual competition for students to showcase their memorization skills with prizes for winners.",
      icon: "🏆",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      titleAr: "محاضرة التفسير",
      titleEn: "Tafsir Lecture Series",
      date: "2024-03-08", 
      time: "7:00 PM - 9:00 PM",
      locationAr: "أونلاين وحضورياً",
      locationEn: "Online & In-person",
      typeAr: "محاضرة",
      typeEn: "Lecture",
      descriptionAr: "محاضرات أسبوعية حول تفسير القرآن من قبل علماء مشهورين.",
      descriptionEn: "Weekly lectures on Quranic interpretation by renowned scholars.",
      icon: "📚",
      color: "from-blue-600 to-blue-800"
    },
    {
      titleAr: "ورشة التجويد",
      titleEn: "Tajweed Workshop",
      date: "2024-03-22",
      time: "2:00 PM - 6:00 PM", 
      locationAr: "فصل الأكاديمية 2",
      locationEn: "Academy Classroom 2",
      typeAr: "ورشة عمل",
      typeEn: "Workshop",
      descriptionAr: "ورشة عمل مكثفة تركز على قواعد التجويد المتقدمة وتقنيات النطق.",
      descriptionEn: "Intensive workshop focusing on advanced Tajweed rules and pronunciation techniques.",
      icon: "🎵",
      color: "from-green-600 to-green-800"
    },
    {
      titleAr: "ليلة القرآن",
      titleEn: "Quran Night",
      date: "2024-03-29",
      time: "8:00 PM - 11:00 PM",
      locationAr: "القاعة الرئيسية للأكاديمية",
      locationEn: "Academy Main Hall",
      typeAr: "تجمع",
      typeEn: "Gathering",
      descriptionAr: "أمسية خاصة من تلاوة القرآن والأناشيد والتواصل المجتمعي.",
      descriptionEn: "Special evening of Quranic recitation, nasheeds, and community bonding.",
      icon: "🌙",
      color: "from-purple-600 to-purple-800"
    }
  ];

  const pastEvents = [
    {
      titleAr: "برنامج رمضان الخاص",
      titleEn: "Ramadan Special Program",
      date: "2024-04-10",
      attendanceAr: "200+ مشارك",
      attendanceEn: "200+ participants",
      image: "🌟"
    },
    {
      titleAr: "المؤتمر القرآني الدولي",
      titleEn: "International Quranic Conference",
      date: "2024-02-15",
      attendanceAr: "500+ مشارك",
      attendanceEn: "500+ participants",
      image: "🌍"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
            {language === 'en' ? 'Our Events & Activities' : 'فعالياتنا وأنشطتنا'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-white mb-8 text-center">
            {language === 'en' ? 'Upcoming Events' : 'الفعاليات القادمة'}
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs font-medium mb-2">
                      {language === 'en' ? event.typeEn : event.typeAr}
                    </div>
                    <h5 className={`text-2xl font-bold text-white mb-1 ${language === 'ar' ? 'arabic-font' : ''}`}>
                      {language === 'en' ? event.titleEn : event.titleAr}
                    </h5>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {language === 'en' ? event.descriptionEn : event.descriptionAr}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400">📅</span>
                    <span className="text-gray-300">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400">⏰</span>
                    <span className="text-gray-300">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400">📍</span>
                    <span className="text-gray-300">
                      {language === 'en' ? event.locationEn : event.locationAr}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => {
                      // FIX: Add event registration functionality
                      alert(language === 'en' ? 'Event registration will open here' : 'سيتم فتح تسجيل الفعالية هنا');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        alert(language === 'en' ? 'Event registration will open here' : 'سيتم فتح تسجيل الفعالية هنا');
                      }
                    }}
                    aria-label={`${language === 'en' ? 'Register for' : 'التسجيل في'} ${language === 'en' ? event.titleEn : event.titleAr}`}
                    className="w-full bg-gradient-to-r from-red-900 to-red-950 hover:from-red-800 hover:to-red-900 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {language === 'en' ? 'Register for Event' : 'سجل في الفعالية'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-white mb-8 text-center">
            {language === 'en' ? 'Recent Highlights' : 'أبرز الأحداث الأخيرة'}
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-6 border border-red-700/30 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{event.image}</div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-white mb-2">
                      {language === 'en' ? event.titleEn : event.titleAr}
                    </h5>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{new Date(event.date).toLocaleDateString()}</span>
                      <span className="text-red-300 font-semibold">
                        {language === 'en' ? event.attendanceEn : event.attendanceAr}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;