import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
  language: string;
  onSkip: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ language, onSkip }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showPatterns, setShowPatterns] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // FIX: The verse must always be in Arabic regardless of language setting - EXACT COMPLETE TEXT
  const verse = "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ";
  
  useEffect(() => {
    setShowPatterns(true);
    
    const timer = setTimeout(() => {
      // FIX: Use proper Arabic text segmentation to handle diacritics correctly and show COMPLETE verse
      let segments: string[];
      try {
        // Use Intl.Segmenter for proper Arabic grapheme handling to prevent breaking diacritics
        const segmenter = new Intl.Segmenter('ar', { granularity: 'grapheme' });
        segments = Array.from(segmenter.segment(verse), s => s.segment);
      } catch (error) {
        // Fallback for browsers without Intl.Segmenter support - split by characters
        segments = Array.from(verse);
      }
      
      let index = 0;
      const typeWriter = setInterval(() => {
        if (index < segments.length) {
          // FIX: Join segments properly to display complete text progressively
          setDisplayedText(segments.slice(0, index).join(''));
          index++;
        } else {
          // FIX: Ensure final complete text is displayed
          setDisplayedText(verse);
          clearInterval(typeWriter);
          setAnimationComplete(true);
        }
      }, 100); // FIX: Adjusted timing for complete verse display
      
      return () => clearInterval(typeWriter);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-islamic-gradient flex items-center justify-center relative overflow-hidden">
      {/* FIX: Add skip button with proper z-index and accessibility */}
      <button
        onClick={onSkip}
        className="absolute top-8 right-8 z-50 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label={language === 'en' ? 'Skip introduction' : 'تخطي المقدمة'}
      >
        {language === 'en' ? 'Skip' : 'تخطي'}
      </button>

      {/* Animated Background Patterns */}
      <div className={`absolute inset-0 transition-opacity duration-2000 ${showPatterns ? 'opacity-20' : 'opacity-0'}`}>
        <div className="absolute top-10 right-10 text-white text-6xl animate-float">﴾</div>
        <div className="absolute top-32 left-20 text-white text-4xl animate-float-delay">۩</div>
        <div className="absolute bottom-20 right-32 text-white text-5xl animate-float">﴿</div>
        <div className="absolute bottom-32 left-10 text-white text-6xl animate-float-delay">﷽</div>
        <div className="absolute top-1/2 left-1/4 text-white text-3xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-white text-4xl animate-pulse">❋</div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-12 fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 arabic-font">
            القارئ
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>
        
        <div className="bg-black bg-opacity-30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-red-800/30">
          {/* FIX: Proper RTL container with overflow handling for Arabic text */}
          <div 
            className="text-2xl md:text-4xl leading-relaxed arabic-font text-center min-h-[160px] flex items-center justify-center px-4"
            dir="rtl"
            style={{ 
              whiteSpace: 'normal', 
              wordBreak: 'keep-all',
              overflowWrap: 'normal',
              maxWidth: '100%'
            }}
          >
            <span className="text-white font-medium tracking-wide">
              {displayedText}
              {!animationComplete && <span className="animate-pulse">|</span>}
            </span>
          </div>
          
          <div className="mt-8 text-lg text-red-200 italic">
            {language === 'en' 
              ? '"We have sent down an Arabic Quran so that you might understand"'
              : '"ولقد أنزلناه قرآناً عربياً لعلكم تعقلون"'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;