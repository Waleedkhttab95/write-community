'use client';

import React, { useEffect } from 'react';
import { Sparkles, PenTool, GraduationCap, Compass, Plus } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Service({ icon, title, description }: ServiceProps) {
  return (
    <div className="service-card animated-element opacity-0 relative">
      <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600" dir="rtl">{description}</p>
      {/* <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md"> */}
          {/* <div className="flex items-center gap-2">
            <p className="text-1xl font-bold text-gold mb-1">انضم إلينا</p>
            <Plus className="text-gold w-5 h-5" />
          </div> */}
          {/* <p className="text-gray-600 text-sm">مستفيد من برامجنا</p> */}
     
      {/* </div> */}
    </div>
  );
}

export default function ServicesSection() {
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
    <section id="services" className="section-padding relative bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">خدماتنا</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            نقدم مجموعة متنوعة من الخدمات المصممة للأفراد والجهات لمساعدة الكتاب على تطوير مهاراتهم والوصول إلى أهدافهم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Service 
            icon={<Sparkles className="text-orange h-8 w-8" />}
            title="تحفيز"
            description="نوقظ في الكتّاب شغف البداية، ونكسر حاجز الرهبة من الورقة البيضاء. من خلال المجالس والمحاضرات، نخلق بيئة تشجع على الانطلاق وتمنح الثقة. الكتابة ليست رفاهية، بل ممارسة يومية تبدأ من التحفيز وتكبر بالاستمرارية."
          />
          
          <Service 
            icon={<PenTool className="text-orange h-8 w-8" />}
            title="تصميم"
            description="نرسم برامج تأهيلية بعناية، تنطلق من احتياج حقيقي في سوق الكتابة. نصوغ المحتوى بأسلوب علمي، ونختار الأدوات التي تحقق الأثر الوظيفي والجمالي. كل برنامج نُصممه هو إجابة دقيقة عن سؤال واضح، وليس حشواً مكرراً."
          />
          
          <Service 
            icon={<GraduationCap className="text-orange h-8 w-8" />}
            title="تدريب"
            description="نقدّم ورشًا تخصصية ترتكز على المهارة، وتُمارس فيها الكتابة كما تُمارَس الحرفة. نتعامل مع المحتوى بجدّية، ومع الكتّاب كصنّاع أثر لا طلاب عابرين. التدريب لدينا ليس تلقينًا، بل تجربة تتشكل فيها الكفاءة باليد والعين معًا."
          />
          
          <Service 
            icon={<Compass className="text-orange h-8 w-8" />}
            title="توجيه"
            description="نرافق الكتّاب في رحلات تأليفهم، ونقدّم الدعم في لحظات التعثر والتفكير. خبراؤنا لا يمسكون القلم عنك، لكنهم يضيئون لك الطريق إلى وضوح النص. نحن هنا لنعينك على تحويل الفكرة إلى مخطوطة، والمخطوطة إلى أثر يستحق."
          />
          
          {/* <Service 
            icon={<GraduationCap className="text-orange h-8 w-8" />}
            title="إرشاد كتابي"
            description="برامج إرشادية مخصصة لمتابعة تطورك الكتابي على المدى الطويل."
          />
          
          <Service 
            icon={<BookMarked className="text-orange h-8 w-8" />}
            title="فرص النشر"
            description="مساعدة في التواصل مع دور النشر والوصول إلى فرص النشر المناسبة لعملك."
          /> */}
        </div>
        
        {/* Call to action */}
   
      </div>
    </section>
  );
}