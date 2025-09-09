import React from 'react';

const DecorativePattern: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-white">
          <path
            d="M10,10 Q50,10 50,50 T10,90 Q10,130 50,130 T90,90 Q130,90 130,130 T90,170 Q90,190 110,190"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 opacity-10 transform rotate-90">
        <svg viewBox="0 0 200 200" className="w-full h-full text-white">
          <circle cx="100" cy="50" r="20" fill="currentColor" className="animate-pulse" />
          <circle cx="50" cy="100" r="15" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="150" cy="100" r="18" fill="currentColor" className="animate-pulse" style={{animationDelay: '2s'}} />
          <path
            d="M20,180 Q100,120 180,180"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '0.5s'}}
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-52 h-52 opacity-10 transform -rotate-45">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-6xl text-white arabic-font animate-spin-slow">۩</div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-44 h-44 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-white">
          <polygon
            points="100,20 120,80 180,80 135,120 155,180 100,140 45,180 65,120 20,80 80,80"
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/3 text-2xl text-white opacity-5 animate-float arabic-font">
        ﴾ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ﴿
      </div>

      <div className="absolute top-3/4 right-1/4 text-xl text-white opacity-5 animate-float-delay arabic-font">
        ۞ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۞
      </div>

      {/* Geometric Patterns */}
      <div className="absolute top-1/2 left-10 w-16 h-16 opacity-5 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-10 w-12 h-12 opacity-5 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <path d="M50,10 L90,90 L10,90 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default DecorativePattern;