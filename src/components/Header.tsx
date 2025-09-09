import React, { useState } from 'react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection, language, setLanguage }) => {
  // FIX: Add mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', en: 'About', ar: 'حول' },
    { id: 'services', en: 'Services', ar: 'خدماتنا' },
    { id: 'teachers', en: 'Teachers', ar: 'المعلمون' },
    { id: 'events', en: 'Events', ar: 'الفعاليات' },
    { id: 'contact', en: 'Contact', ar: 'اتصل بنا' }
  ];

  // FIX: Handle navigation with proper section switching and mobile menu close
  const handleNavigation = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to top when switching sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FIX: Handle language toggle with proper accessibility
  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // FIX: Handle mobile menu overlay click
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-40 backdrop-blur-md border-b border-red-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <img src="/Logo.png" alt="Academy Logo" className="h-16 w-auto" />

          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleNavigation('about')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('about');
              }
            }}
            aria-label={language === 'en' ? 'Go to home' : 'الذهاب للرئيسية'}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold arabic-font">ق</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white arabic-font">القارئ</h1>
              <p className="text-sm text-red-200">
                {language === 'en' ? 'Quran Academy' : 'أكاديمية القرآن'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`hidden md:flex space-x-8 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigation(item.id);
                  }
                }}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  currentSection === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-red-100 hover:text-white hover:bg-red-800/30'
                }`}
                aria-label={`${language === 'en' ? 'Navigate to' : 'الانتقال إلى'} ${language === 'en' ? item.en : item.ar}`}
              >
                <span className={`block text-sm font-medium ${language === 'ar' ? 'arabic-font' : ''}`}>
                  {language === 'en' ? item.en : item.ar}
                </span>
                
                {/* Decorative underline */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 ${
                  currentSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* FIX: Desktop Language Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLanguageToggle();
                }
              }}
              className="bg-red-800/30 hover:bg-red-700/50 text-white px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={language === 'en' ? 'Switch to Arabic' : 'التبديل للإنجليزية'}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* FIX: Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }
              }}
              className="md:hidden bg-red-800/30 hover:bg-red-700/50 text-white p-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 z-50"
              aria-label={language === 'en' ? 'Open navigation menu' : 'فتح قائمة التنقل'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* FIX: Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden relative z-50 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <nav className="py-4 space-y-1 bg-black bg-opacity-90 rounded-lg mt-2 backdrop-blur-md border border-red-800/30 mobile-menu-enter">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigation(item.id);
                  }
                }}
                className={`w-full text-left px-6 py-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg mx-2 cursor-pointer mobile-nav-button ${
                  currentSection === item.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-red-100 hover:text-white hover:bg-red-800/50'
                } ${language === 'ar' ? 'arabic-font text-right' : ''}`}
                aria-label={`${language === 'en' ? 'Navigate to' : 'الانتقال إلى'} ${language === 'en' ? item.en : item.ar}`}
                style={{ 
                  minHeight: '48px',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                {language === 'en' ? item.en : item.ar}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* FIX: Mobile menu overlay for outside click */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 cursor-pointer"
          onClick={handleOverlayClick}
          onTouchEnd={handleOverlayClick}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
