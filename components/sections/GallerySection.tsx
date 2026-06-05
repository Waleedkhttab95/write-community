'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const images: string[] = [
  '/images/gallery/مجالس الكتابة.JPG',
  '/images/gallery/الكتابة على الكتابة.jpg',
  '/images/gallery/DSC09032.JPG',
  '/images/gallery/DSC08995.JPG',
  '/images/gallery/DSC07042.JPG',
  '/images/gallery/DSC07020.JPG',
  '/images/gallery/CSP09908.jpg',
  '/images/gallery/CSP00275.jpg'
];

const AUTOPLAY_MS = 5000;

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const total = images.length;
  const hasMultiple = total > 1;
  // Auto-advance only when allowed: playing, not hovered/focused, motion is OK.
  const autoPlay = isPlaying && !isInteracting && !prefersReducedMotion && hasMultiple;

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [autoPlay, total]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  if (total === 0) return null;

  // Respect reduced-motion: no horizontal travel, instant cross-fade.
  const motionProps = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 },
      };

  const arrowBtn =
    'absolute top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center bg-card/90 hover:bg-card text-foreground rounded-full shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <h2 className="decorated-heading">معرض الصور</h2>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          role="group"
          aria-roledescription="معرض صور"
          aria-label="معرض صور مجتمع الكتابة"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => setIsInteracting(false)}
        >
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`صورة من فعاليات مجتمع الكتابة ${currentIndex + 1} من ${total}`}
                className="w-full h-64 sm:h-96 md:h-[500px] object-cover"
                {...motionProps}
              />
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <>
              {/* RTL: forward (next) sits on the left, back (previous) on the right. */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="الصورة التالية"
                className={`${arrowBtn} left-4`}
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={prevSlide}
                aria-label="الصورة السابقة"
                className={`${arrowBtn} right-4`}
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? 'إيقاف العرض التلقائي' : 'تشغيل العرض التلقائي'}
                className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center bg-card/90 hover:bg-card text-foreground rounded-full shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Play className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </>
          )}

          {/* Announce slide changes to screen readers without visual clutter. */}
          <p className="sr-only" aria-live="polite">
            صورة {currentIndex + 1} من {total}
          </p>
        </div>
      </div>
    </section>
  );
}
