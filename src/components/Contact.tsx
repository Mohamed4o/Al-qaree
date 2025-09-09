import React, { useState } from 'react';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    type: 'inquiry' // inquiry, registration, complaint
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // FIX: Proper form submission with feedback
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // FIX: Simulate form submission with proper error handling
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Simulate success/error randomly for demo
      const isSuccess = Math.random() > 0.1; // 90% success rate
      
      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          type: 'inquiry'
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        // Clear error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📍",
      titleAr: "العنوان",
      titleEn: "Address",
      details: ["123 Islamic Center St", "Education District", "City, Country 12345"]
    },
    {
      icon: "📞",
      titleAr: "الهاتف",
      titleEn: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: "📧",
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      details: ["info@alqari-academy.com", "admissions@alqari-academy.com"]
    },
    {
      icon: "⏰",
      titleAr: "ساعات العمل",
      titleEn: "Working Hours",
      details: language === 'en' 
        ? ["Mon-Fri: 9:00 AM - 9:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"]
        : ["الإثنين-الجمعة: 9:00 ص - 9:00 م", "السبت-الأحد: 10:00 ص - 6:00 م"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 text-white ${language === 'ar' ? 'arabic-font' : ''}`}>
            {language === 'en' ? 'Contact & Registration' : 'اتصل بنا وسجل الآن'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border border-red-800/30">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">
              {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-red-200 text-sm font-semibold mb-2">
                    {language === 'en' ? 'Full Name *' : 'الاسم الكامل *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-red-950/30 border border-red-800/50 rounded-lg text-white placeholder-red-300/50 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder={language === 'en' ? 'Enter your full name' : 'أدخل اسمك الكامل'}
                  />
                </div>
                <div>
                  <label className="block text-red-200 text-sm font-semibold mb-2">
                    {language === 'en' ? 'Email *' : 'البريد الإلكتروني *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-red-950/30 border border-red-800/50 rounded-lg text-white placeholder-red-300/50 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-red-200 text-sm font-semibold mb-2">
                    {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-red-950/30 border border-red-800/50 rounded-lg text-white placeholder-red-300/50 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-red-200 text-sm font-semibold mb-2">
                    {language === 'en' ? 'Inquiry Type' : 'نوع الاستفسار'}
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-red-950/30 border border-red-800/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="inquiry">
                      {language === 'en' ? 'General Inquiry' : 'استفسار عام'}
                    </option>
                    <option value="registration">
                      {language === 'en' ? 'Course Registration' : 'تسجيل في دورة'}
                    </option>
                    <option value="complaint">
                      {language === 'en' ? 'Complaint/Feedback' : 'شكوى/ملاحظات'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-red-200 text-sm font-semibold mb-2">
                  {language === 'en' ? 'Service of Interest' : 'الخدمة المهتم بها'}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-red-950/30 border border-red-800/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="">
                    {language === 'en' ? 'Select a service' : 'اختر خدمة'}
                  </option>
                  <option value="kids-memorization">
                    {language === 'en' ? 'Kids Quran Memorization' : 'حفظ القرآن للأطفال'}
                  </option>
                  <option value="adult-memorization">
                    {language === 'en' ? 'Adult Quran Memorization' : 'حفظ القرآن للبالغين'}
                  </option>
                  <option value="tajweed">
                    {language === 'en' ? 'Tajweed Lessons' : 'دروس التجويد'}
                  </option>
                  <option value="online-classes">
                    {language === 'en' ? 'Live Online Classes' : 'الدروس المباشرة الأونلاين'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-red-200 text-sm font-semibold mb-2">
                  {language === 'en' ? 'Message *' : 'الرسالة *'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-red-950/30 border border-red-800/50 rounded-lg text-white placeholder-red-300/50 focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder={language === 'en' 
                    ? 'Please share your questions, requirements, or any additional information...'
                    : 'يرجى مشاركة أسئلتك أو متطلباتك أو أي معلومات إضافية...'
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (!isSubmitting) {
                      handleSubmit(e as any);
                    }
                  }
                }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25'
                } text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
                aria-label={language === 'en' ? 'Submit contact form' : 'إرسال نموذج الاتصال'}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {language === 'en' ? 'Sending...' : 'جاري الإرسال...'}
                  </div>
                ) : (
                  language === 'en' ? 'Send Message' : 'إرسال الرسالة'
                )}
              </button>

              {/* FIX: Form submission feedback */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-900/50 border border-green-700/50 rounded-lg text-green-200 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span>✅</span>
                    <span>
                      {language === 'en' 
                        ? 'Thank you for your message! We will get back to you soon.'
                        : 'شكراً لك على رسالتك! سنعود إليك قريباً.'
                      }
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900/50 border border-red-700/50 rounded-lg text-red-200 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span>❌</span>
                    <span>
                      {language === 'en' 
                        ? 'Sorry, there was an error sending your message. Please try again.'
                        : 'عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.'
                      }
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  onClick={() => {
                    // FIX: Add actual social media functionality
                    window.open('#', '_blank');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.open('#', '_blank');
                    }
                  }}
                  className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-6 border border-red-700/30 hover:border-red-600/50 transition-all duration-300"
                  aria-label={`${language === 'en' ? 'Contact us via' : 'تواصل معنا عبر'} ${language === 'en' ? info.titleEn : info.titleAr}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div className="flex-1">
                      <h5 className={`text-xl font-bold text-white mb-1 ${language === 'ar' ? 'arabic-font' : ''}`}>
                        {language === 'en' ? info.titleEn : info.titleAr}
                      </h5>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-black bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm border border-red-800/30">
              <h5 className="text-xl font-bold text-white mb-4 text-center">
                {language === 'en' ? 'Follow Us' : 'تابعنا'}
              </h5>
              <div className="flex justify-center space-x-4">
                {[
                  { name: 'Facebook', icon: '📘' },
                  { name: 'Instagram', icon: '📷' },
                  { name: 'YouTube', icon: '📺' },
                  { name: 'WhatsApp', icon: '💬' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl p-6 border border-red-700/30">
              <h5 className="text-xl font-bold text-white mb-4 text-center">
                {language === 'en' ? 'Quick Actions' : 'إجراءات سريعة'}
              </h5>
              <div className="space-y-3">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg hover:shadow-red-500/25">
                  📝 {language === 'en' ? 'Register for Classes' : 'سجل في الفصول'}
                </button>
                <button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg hover:shadow-red-500/25">
                  📅 {language === 'en' ? 'Schedule a Visit' : 'حدد موعد زيارة'}
                </button>
                <button className="w-full border border-red-600 text-red-300 hover:bg-red-600 hover:text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  💰 {language === 'en' ? 'Fee Structure' : 'هيكل الرسوم'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;