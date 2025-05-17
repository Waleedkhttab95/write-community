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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.pinimg.com/736x/61/06/13/61061386a9070bf2fa53efb7f13a5c1f.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gold opacity-10 blur-3xl"></div>
      <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-red opacity-10 blur-3xl"></div>
      
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`inline-flex items-center mb-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-gold/30 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Image
              src="/White.svg"
              alt="مجتمع الكتابة"
              width={50}
              height={50}
              className="ml-3 w-auto h-[50px]"
              priority
            />
            {/* <span className="text-gold-light text-lg">مجتمع الكتابة</span> */}
          </div>
          
          <h1 
            className={`text-white mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block mb-4">بيئتك الأمثل</span> 
            <span className="text-gold">لتطوير قدراتك الكتابية</span>
          </h1>
          
          <p 
            className={`text-gray-300 text-lg mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
           
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg"
              onClick={() => scrollToElement('programs')}
            >
              استكشف مشاريعنا
            </Button>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-6 text-lg"
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