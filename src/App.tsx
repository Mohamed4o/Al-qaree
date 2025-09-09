import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Teachers from './components/Teachers';
import Events from './components/Events';
import Contact from './components/Contact';
import DecorativePattern from './components/DecorativePattern';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState('about');
  const [language, setLanguage] = useState('en'); // 'en' or 'ar'
  const [skipIntro, setSkipIntro] = useState(false);

  useEffect(() => {
    if (!skipIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 8000); // Show intro for 8 seconds to allow full verse animation

      return () => clearTimeout(timer);
    }
  }, [skipIntro]);

  // FIX: Handle skip intro functionality
  const handleSkipIntro = () => {
    setSkipIntro(true);
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen language={language} onSkip={handleSkipIntro} />;
  }

  return (
    <div className="min-h-screen bg-islamic-gradient text-white overflow-x-hidden relative">
      <DecorativePattern />
      <Header 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="relative z-20">
        {currentSection === 'about' && <About language={language} />}
        {currentSection === 'services' && <Services language={language} />}
        {currentSection === 'teachers' && <Teachers language={language} />}
        {currentSection === 'events' && <Events language={language} />}
        {currentSection === 'contact' && <Contact language={language} />}
      </main>
    </div>
  );
}

export default App;