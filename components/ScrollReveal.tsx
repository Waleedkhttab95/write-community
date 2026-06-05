'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/*
 * Single page-wide scroll-reveal observer. Previously every section mounted its
 * own IntersectionObserver that queried *all* `.animated-element` nodes, so each
 * element was observed N times. This mounts once in the root layout and drives
 * every reveal from one observer. Re-runs on route change so animated elements
 * on client-navigated pages (e.g. /articles) get observed too.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.animated-element'));
    if (elements.length === 0) return;

    const reveal = (el: Element) => {
      el.classList.add('animate-fade-in-up');
      el.classList.remove('opacity-0');
    };

    // No IntersectionObserver (very old browsers): reveal everything up front.
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
