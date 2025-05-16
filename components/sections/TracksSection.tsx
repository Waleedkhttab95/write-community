'use client';

import React, { useEffect } from 'react';
import { Pencil, UserRound, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrackProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function Track({ icon, title, description, index }: TrackProps) {
  return (
    <div className="track-card animated-element opacity-0">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="absolute top-4 left-4 bg-gold/10 w-8 h-8 rounded-full flex items-center justify-center">
        <span className="text-gold font-bold">{index}</span>
      </div>
    </div>
  );
}

export default function TracksSection() {
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

  return (
    <section id="tracks" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">مساراتنا</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            نوفر ثلاثة مسارات رئيسية لتطوير مهارات الكتابة، تناسب مختلف الاحتياجات والمستويات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Track 
            icon={<Pencil className="text-gold h-10 w-10" />}
            title="مجلس الكتابة"
            description="مساحة هادئة وملهمة تُعقد فيها لقاءات دورية تتيح للكتّاب التفرغ التام للكتابة، بعيدًا عن ضجيج الانشغالات. هنا تُصقل النصوص، وتولد الأفكار، وتُنجز المشاريع في حضرة التركيز والجمال."
            index={1}
          />
          
          <Track 
            icon={<UserRound className="text-gold h-10 w-10" />}
            title="معمل الكتابة"
            description="ورشة إبداع متواصلة تجمع بين التدريب العملي والتأهيل المنهجي، لإكساب الكتّاب أدوات الكتابة في مختلف المجالات. هنا تُبنى المهارات، وتُختبر التجارب، وتُعاد صياغة القدرة على التعبير."
            index={2}
          />
          
          <Track 
            icon={<Users className="text-gold h-10 w-10" />}
            title="ملتقى الكتابة"
            description="منصة فكرية تجمع الكتّاب والمهتمين للنقاش وتبادل الرؤى حول قضايا الكتابة وفنونها. في الملتقى تنفتح الآفاق، وتتقاطع الخبرات، وتتخلق المعرفة من الحوار الحيّ."
            index={3}
          />
        </div>
        
        {/* <div className="mt-12 text-center animated-element opacity-0">
          <Button className="bg-gold hover:bg-gold-dark text-white px-8">
            سجل في أحد مساراتنا
          </Button>
        </div> */}
      </div>
    </section>
  );
}