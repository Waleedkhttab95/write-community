'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function PartnersSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const partners = [
    { name: 'هيئة الأدب والنشر والترجمة', image: '/هيئة_الأدب_والنشر_والترجمة.png' },
    { name: 'مكتبة صوفيا', image: '/مكتبة-صوفيا-1.webp' },
    { name: 'Riyadh', image: '/ZlebknvXTf6S3Q6UCRrP_logo-Riyadh.webp' },
    { name: 'Zan', image: '/Zan-logo-colored.webp' },
    { name: 'ALC', image: '/alc-logo.webp' },
    { name: 'Logo', image: '/logo.webp' },
    { name: 'IT', image: '/it.jpg' },
    { name: 'Images', image: '/images.png' },
    { name: '2282104', image: '/2282104.png' },
    // { name: 'Logo SVG', image: '/logo.svg' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">شركاؤنا</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            نفتخر بالتعاون مع مجموعة من المؤسسات الرائدة في مجال النشر والثقافة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center animated-element opacity-0">
              <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
                <div className="relative w-full h-24">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}