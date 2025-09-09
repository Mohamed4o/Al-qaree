import React from 'react';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo Placeholder and Academy Name */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/20">
            <span className="text-white text-4xl font-bold arabic-font">ق</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-8">
            Al-Qaree
          </h1>
        </div>

        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
            {language === 'en' ? 'About Our Academy' : 'حول الأكاديمية'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-300">
              <h4 className={`text-2xl font-bold mb-4 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
                {language === 'en' ? 'Our Mission' : 'رسالتنا'}
              </h4>
              <p className="text-gray-200 leading-relaxed">
                {language === 'en' 
                  ? 'At Al-Qaree Academy, we are dedicated to preserving and teaching the sacred art of Quranic recitation and memorization. Our mission is to provide comprehensive Islamic education through traditional methods enhanced with modern teaching techniques.'
                  : 'في أكاديمية القارئ، نحن ملتزمون بالحفاظ على وتعليم فن تلاوة وحفظ القرآن الكريم. مهمتنا هي توفير تعليم إسلامي شامل من خلال الطرق التقليدية المعززة بتقنيات التدريس الحديثة.'
                }
              </p>
            </div>

            <div className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-300">
              <h4 className={`text-2xl font-bold mb-4 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
                {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
              </h4>
              <p className="text-gray-200 leading-relaxed">
                {language === 'en'
                  ? 'To become a leading center for Quranic education, nurturing students of all ages in the beautiful recitation, proper understanding, and practical application of the Holy Quran in their daily lives.'
                  : 'أن نصبح مركزاً رائداً للتعليم القرآني، نرعى الطلاب من جميع الأعمار في التلاوة الجميلة والفهم الصحيح والتطبيق العملي للقرآن الكريم في حياتهم اليومية.'
                }
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-8 border border-red-700/30">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white arabic-font">📖</span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {language === 'en' ? 'Established Excellence' : 'التميز المؤسس'}
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-300 mb-2">15+</div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' ? 'Years Experience' : 'سنة خبرة'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-300 mb-2">500+</div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' ? 'Graduates' : 'خريج'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-300 mb-2">20+</div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' ? 'Expert Teachers' : 'معلم خبير'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-300 mb-2">10+</div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' ? 'Countries Served' : 'دولة نخدمها'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm border border-red-800/30">
              <div className="text-center">
                <div className="text-4xl text-white arabic-font mb-4 opacity-80">
                  "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"
                </div>
                <p className="text-red-200 italic">
                  {language === 'en'
                    ? '"And We have certainly made the Qur\'an easy for remembrance, so is there any who will remember?"'
                    : '"ولقد يسرنا القرآن للذكر فهل من مدكر"'
                  }
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {language === 'en' ? '- Surah Al-Qamar: 17' : '- سورة القمر: ١٧'}
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