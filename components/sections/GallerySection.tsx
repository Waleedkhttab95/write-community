'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images: string[] = [
  '/images/gallery/مصنع القصص.jpeg',
  '/images/gallery/مجالس الكتابة.JPG',
  '/images/gallery/كتابة النص المفتوح.JPG',
  '/images/gallery/كتابة القصة القصيرة.jpeg',
  '/images/gallery/قصائد الأطفال.jpeg',
  '/images/gallery/قصائد الأطفال (2).jpeg',
  '/images/gallery/رسم اللوحات الشعرية.jpeg',
  '/images/gallery/الكتابة على الكتابة.jpg',
  '/images/gallery/الكتابة الابداعية.jpeg',
  '/images/gallery/البناء بالكلمات.jpeg',
  '/images/gallery/ابجديات الكتابة.jpeg',
  '/images/gallery/DSC09086.JPG',
  '/images/gallery/DSC09060.JPG',
  '/images/gallery/DSC09051.JPG',
  '/images/gallery/DSC09034.JPG',
  '/images/gallery/DSC09032.JPG',
  '/images/gallery/DSC09016.JPG',
  '/images/gallery/DSC08997.JPG',
  '/images/gallery/DSC08995.JPG',
  '/images/gallery/DSC08373.jpg',
  '/images/gallery/DSC08356.jpg',
  '/images/gallery/DSC07146.JPG',
  '/images/gallery/DSC07128.JPG',
  '/images/gallery/DSC07105.JPG',
  '/images/gallery/DSC07042.JPG',
  '/images/gallery/DSC07033.JPG',
  '/images/gallery/DSC07028.JPG',
  '/images/gallery/DSC07025.JPG',
  '/images/gallery/DSC07020.JPG',
  '/images/gallery/DSC06993.JPG',
  '/images/gallery/DSC0702يي5.JPG',
  '/images/gallery/CSP09908.jpg',
  '/images/gallery/CSP09885.jpg',
  '/images/gallery/CSP00349.jpg',
  '/images/gallery/CSP00319.jpg',
  '/images/gallery/CSP00275.jpg',
  '/images/gallery/CSP00271.jpg',
  '/images/gallery/CSP00156.jpg'
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">معرض الصور </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-[500px] object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 