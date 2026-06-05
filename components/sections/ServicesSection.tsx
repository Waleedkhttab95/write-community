import React from 'react';
import { Sparkles, PenTool, GraduationCap, Compass } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Service({ icon, title, description }: ServiceProps) {
  return (
    <div className="service-card animated-element opacity-0">
      <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground" dir="rtl">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <h2 className="decorated-heading animated-element opacity-0">خدماتنا</h2>
          <p className="animated-element opacity-0 max-w-3xl text-lg text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
}