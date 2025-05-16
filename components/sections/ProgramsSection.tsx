'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ProgramProps {
  title: string;
  description: string;
  bgColor: string;
}

function Program({ title, description, bgColor }: ProgramProps) {
  return (
    <div className={`program-card animated-element opacity-0 border-r-4 ${bgColor}`}>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex flex-col space-y-3 mb-6">
      </div>
    </div>
  );
}

export default function ProgramsSection() {
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
    <section id="programs" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">مشاريعنا</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            نقدم مجموعة متنوعة من البرامج المتخصصة في مختلف مجالات الكتابة لمساعدتك على تطوير مهاراتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Adult Writing Programs */}
          <Program 
            title="الكتابة على الكتابة"
            description="ورشة تغوص في فن مراجعة الكتب، وتكشف أسراره وأثره في الحراك الثقافي. يُمارس المشاركون مهارات التحليل والتأطير والنشر بمهنية. هي كتابة تستند إلى قراءة واعية، وتُعيد تقديم الكتابة من منظور ناقد."
            bgColor="border-gold"
          />
          
          <Program 
            title="كتابة النص المفتوح"
            description="ورشة تمهّد لفهم النص المفتوح كنمط حرّ يتجاوز حدود الأجناس الأدبية. يناقش المشاركون جذوره وتحوّلاته ومفاهيمه كالتجنيس والانفتاح. يخرج المتدرب بنصّه الخاص، ممتلئًا برؤية أدبية معاصرة لا تحدّها القوالب."
            bgColor="border-gold"
          />
          
          <Program 
            title="الكتابة الإبداعية"
            description="محاضرة تعريفية تسلط الضوء على فنون الكتابة الإبداعية وأهميتها في الحياة. يتعرف المشاركون على أنواعها، وطرق بنائها، ودوافع ممارستها. هي نقطة انطلاق فكرية تُلهب الحافز وتوسّع أفق التعبير."
            bgColor="border-red"
          />

          {/* Children's Programs */}
          <Program 
            title="نهايات متخيلة"
            description="ورشة تفتح للطفل باب الإبداع عبر إعادة تخيّل نهايات لحكايات عالمية مألوفة. يتعلم الطفل كتابة القصة بتسلسل منطقي وبناء حبكة جديدة. الهدف هو تحويل القارئ الصغير إلى كاتب قادر على كسر النمط وصنع البديل."
            bgColor="border-orange"
          />
          
          <Program 
            title="مصنع القصص"
            description="ورشة تدرّب الطفل على كتابة القصص القصيرة ضمن تصانيف محددة. يخوض الطفل تجربة القراءة والكتابة ضمن النوع الذي يستهويه، ليكتشف صوته الخاص، وصولًا إلى عقل مرن، ومخيّلة منضبطة، ووعي بأنماط السرد وتنوعاته."
            bgColor="border-gold"
          />
          
          <Program 
            title="قصائد الأطفال"
            description="ورشة شعرية تعلم الأطفال التعبير عن مشاعرهم من خلال لغة موزونة وعذبة. يتعرف الطفل على بنية القصيدة، ويجرب كتابة أبياته الأولى. في هذه الورشة، يصبح الشعر وسيلة للتعبير، لا لغزًا معقدًا."
            bgColor="border-red"
          />

          {/* Additional Program */}
          <Program 
            title="رسم اللوحات الشعرية"
            description="ورشة تدمج بين الرسم والشعر، ليتعلّم الطفل كيف يحول الأبيات إلى صور بصرية. يُمارس الطفل التعبير الفني عبر دمج الكلمات بالألوان والمشاعر. هنا تتحول القصيدة إلى لوحة، ويكتشف الطفل أن الإبداع لا يعترف بالحدود."
            bgColor="border-gold"
          />
          
          <Program 
            title="مجالس الكتابة"
            description='لقاءات دورية تمنح الكتّاب بيئة محفزة للتفرغ والكتابة، بعيدًا عن الانشغالات. نوفّر أدوات دعم مثل "عيادة الكتابة" التي تفك حبسة النص، وتفتح الطريق أمام الإبداع. في هذا المجلس، تُولد الأفكار، وتُنجز النصوص، ويستعيد الكاتب علاقته بالكتابة.'
            bgColor="border-red"
          />
          
          <Program 
            title="الكتابة الإبداعية للقصة القصيرة"
            description="ورشة تتناول عناصر القصة القصيرة من الفكرة إلى الحبكة والتشويق. يندمج المشاركون في تجربة تأليف حقيقية، تعزز خيالهم وتعمّق أدواتهم السردية. تزرع الورشة في الكاتب وعيًا بفن القصة، وتمنحه مفاتيح البناء القصصي المحكم."
            bgColor="border-gold"
          />
          
          <Program 
            title="البناء بالكلمات"
            description="ورشة تفتح نافذة على النقد المعماري، بوصفه كتابة تتقاطع فيها الحواس والمعرفة. يتعرف المشاركون على مدارس النقد وأثره في تشكيل الذائقة المعمارية. هي دعوة للكتابة بالبُعد الثالث، حيث تتجسد الكلمات في الفضاء."
            bgColor="border-orange"
          />
          
          <Program 
            title="أبجديات الكتابة"
            description="مدخل تأسيسي يضع المبتدئين على أول الطريق لفهم أدوات الكتابة وممكناتها. يبدأ المتدرب رحلته من العتبة الأولى، ليرسم خطته الشخصية نحو النص. تُبسط الورشة المفاهيم دون تفريط، وتفتح أفقًا عمليًا للانطلاق بثقة."
            bgColor="border-gold"
          />
          
          {/* Empty placeholders to maintain grid structure */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>
        
        {/* <div className="mt-16 text-center animated-element opacity-0">
          <Button className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-lg">
            عرض جميع البرامج
          </Button>
        </div> */}
      </div>
    </section>
  );
}