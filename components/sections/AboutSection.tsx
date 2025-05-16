'use client';

import React, { useEffect, useRef } from 'react';
import { BookOpen, BookText, UsersRound } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element">من نحن</h2>
          <p className="animated-element max-w-3xl mx-auto text-lg text-gray-600">
          مجتمع الكتابة، جهة متخصصة في تقديم برامج بناء القدرات وتأهيل الكفاءات في الكتابة بمختلف المجالات، معتمدين على أهم منهجيات التدريب والتصميم التعليمي، ومنطلقين من خبرة معمقة في فهم الكتابة وأدواتها. 

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="card animated-element p-8 bg-white border-t-4 border-gold text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-gold h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">رؤيتنا</h3>
            <p className="text-gray-600">
            الوجهة الأولى في برامج الكتابة و تصميم تجارب تعليمية مبتكرة لبناء القدرات الكتابية. 
            </p>
          </div>

          {/* Mission */}
          <div className="card animated-element p-8 bg-white border-t-4 border-red text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookText className="text-red h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">قصتنا</h3>
            <p className="text-gray-600 text-right">
              انطلق مجتمع الكتابة في 1/1/1444هـ من مدينة الريــــاض في المملكــة العـربيــة السعــوديــة، من خلال عدة مسارات متكاملة تلبي احتياجات الكتّاب في مختلف المجالات للمساهمة في بناء القدرات وتطوير المنتجات الكتابية في المملكة العربية السعودية.
            </p>
          </div>

          {/* Values */}
          <div className="card animated-element p-8 bg-white border-t-4 border-orange text-center">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UsersRound className="text-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">قيمنا</h3>
            <p className="text-gray-600">
              الابتكار: سؤالــنا الأول وغايتنا الأولى، وبـه نتـجـدد ونكـتـشف.<br />
              الإتقان: منهجنا الثابت وعهدنا الدائم.<br />
              التعاون: حالتــــنا الذهنــية المستـمرة وذروة مرونتنا.
            </p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">منهجيتنا</h3>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animated-element space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">١</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">منهجية تصميم البرامج التدريبية</h4>
                    <p className="text-gray-600">تصميم برامج تدريبية متكاملة ومتخصصة تلبي احتياجات المتدربين</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">٢</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">منهجية تصميم الحقائب التدريبية</h4>
                    <p className="text-gray-600">تطوير حقائب تدريبية احترافية ومتكاملة</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">٣</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">منهجية بناء برامج الكتابة للأطفال</h4>
                    <p className="text-gray-600">برامج متخصصة لتنمية مهارات الكتابة لدى الأطفال</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">٤</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">منهجية بناء برامج الكتابة للكبار</h4>
                    <p className="text-gray-600">برامج متقدمة لتنمية مهارات الكتابة لدى الكبار</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">٥</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">منهجية تيسير البرامج التدريبية</h4>
                    <p className="text-gray-600">أساليب متطورة لتيسير وتنفيذ البرامج التدريبية</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">٦</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">منهجية قياس أثر التدريب</h4>
                    <p className="text-gray-600">طرق علمية لقياس وتقييم أثر البرامج التدريبية</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animated-element relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="مجموعة من الكتاب يتناقشون" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-gold mb-2">+٢٠٠٠</p>
                <p className="text-gray-600 text-lg">مستفيد من برامجنا</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}