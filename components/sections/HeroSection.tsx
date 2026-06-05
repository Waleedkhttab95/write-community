'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delayed animation for intro elements
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay keeps the headline legible over the photograph. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`inline-flex items-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Image
              src="/White.svg"
              alt="مجتمع الكتابة"
              width={64}
              height={64}
              className="w-auto h-16"
              priority
            />
          </div>

          <h1
            className={`text-white mb-10 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block mb-4">بيئتك الأمثل</span>
            <span className="text-gold">لتطوير قدراتك الكتابية</span>
          </h1>

          <div
            className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToElement('programs')}
            >
              استكشف مشاريعنا
            </Button>
            <Button 
              variant="outline" 
              className="border-gold text-gold-light hover:bg-gold-dark hover:text-white px-8 py-6 text-lg"
              onClick={() => scrollToElement('contact')}
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scrolldown indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">اكتشف المزيد</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
}