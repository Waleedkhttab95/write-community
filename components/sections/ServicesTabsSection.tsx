'use client';

import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  User, 
  Building2, 
  PenTool, 
  BookOpen, 
  Users, 
  GraduationCap,
  Lightbulb,
  Target,
  Award
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

function ServiceCard({ icon, title, description, features, buttonText }: ServiceCardProps) {
  const handleRequestService = () => {
    window.open('https://forms.gle/q36zENXnA1ouCmcb7', '_blank', 'noopener,noreferrer');
  };

  // Combine description and features into full text
  const fullDescription = `${description} ${features.join(' ')}`;

  return (
    <Card className="service-card h-full flex flex-col">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 mb-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 mb-6">
          <p className="text-gray-600 leading-relaxed text-justify" dir="rtl">
            {fullDescription}
          </p>
        </div>
        <Button 
          onClick={handleRequestService}
          className="w-full bg-orange hover:bg-orange/90 text-white"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ServicesTabsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
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

  const individualServices = [
    {
      icon: <PenTool className="text-orange h-8 w-8" />,
      title: "الاستشارات الكتابية",
      description: "تُقدَّم خدمة الاستشارات الكتابية لمساعدة الأفراد في تجاوز التحديات التي تواجههم أثناء تنفيذ مشاريعهم الكتابية، سواء كانت كتابًا أدبيًا أو مشروع كتابة وظيفية أو محتوى متخصص. تتيح هذه الخدمة للمستفيد طرح الأسئلة ومناقشة الإشكالات المرتبطة بالبنية، واللغة، والمنهجية، أو أسلوب السرد، ويُقدَّم له تحليل موضوعي ومهني لمشكلته مع مقترحات عملية للتطوير. لا تقتصر الاستشارة على تصحيح نصي، بل تشمل تهيئة الكاتب لاكتساب أدوات التحرير الذاتي وتعزيز وعيه النقدي. تعتمد الجلسات على قراءة مسبقة للنصوص ذات الصلة إن وُجدت، يليها لقاء مباشر أو افتراضي لعرض الملاحظات وتقديم التوجيه المناسب. تهدف هذه الخدمة إلى رفع جودة الكتابة وتوفير عين خبيرة تسهم في تسريع إنجاز العمل وتحسينه دون التدخل المباشر في إنتاج النص.",
      features: [
        "لا تقتصر الاستشارة على تصحيح نصي، بل تشمل تهيئة الكاتب لاكتساب أدوات التحرير الذاتي",
        "تعزيز الوعي النقدي للكاتب",
        "قراءة مسبقة للنصوص ذات الصلة",
        "لقاءات مباشرة أو افتراضية لعرض الملاحظات",
        "رفع جودة الكتابة وتوفير عين خبيرة"
      ],
      buttonText: "احجز استشارتك"
    },
    {
      icon: <BookOpen className="text-orange h-8 w-8" />,
      title: "الإرشاد الكتابي",
      description: "يُعد الإرشاد الكتابي مسارًا متقدمًا في دعم الكُتّاب، حيث يُخصَّص للكاتب مرافِق مهني يتابع تطوره خلال فترة زمنية محددة، من لحظة بلورة الفكرة وحتى اكتمال النص أو المشروع. بخلاف الاستشارة التي تتم لمرة واحدة، يقوم المرشد الكتابي بقراءة متتابعة للأعمال، وتقديم تغذية راجعة مرحلية، إلى جانب إرشادات منهجية مرتبطة بتقنيات الكتابة والتحرير والتنقيح. يشمل الإرشاد مراجعة أهداف الكاتب، وتحديد العقبات، وتقديم خطة تطويرية تتناسب مع مستواه وطبيعة نصه. كما يعمل المرشد على تحفيز الكاتب في لحظات التردد، ومساعدته في الحفاظ على زخم الإنتاج. الخدمة مثالية للكتّاب المستقلين، وطلاب الدراسات العليا، أو أي شخص يملك مشروع كتابة طويل ويبحث عن احترافية في تنفيذه دون أن يكون وحده في الرحلة.",
      features: [
        "إرشادات منهجية مرتبطة بتقنيات الكتابة والتحرير والتنقيح",
        "مراجعة أهداف الكاتب وتحديد العقبات",
        "تقديم خطة تطويرية تتناسب مع مستوى الكاتب",
        "تحفيز الكاتب في لحظات التردد",
        "مساعدة في الحفاظ على زخم الإنتاج"
      ],
      buttonText: "ابدأ الإرشاد"
    },
    {
      icon: <Target className="text-orange h-8 w-8" />,
      title: "كاتب الظل",
      description: "خدمة كاتب الظل (Ghostwriting) موجهة للأفراد الذين يملكون فكرة أو تجربة أو محتوى يرغبون بنقله إلى نص مكتوب متكامل، لكنهم لا يمتلكون الوقت أو المهارة الكافية لصياغته بأنفسهم. يقوم كاتب الظل بإجراء لقاءات مكثفة مع صاحب الفكرة لجمع المادة الخام، ثم يشرع في كتابتها بأسلوب مناسب للجمهور المستهدف، مع الحفاظ على روح الشخصية ومحتوى الفكرة. تشمل هذه الخدمة كتابة السير الذاتية، والكتب التوثيقية التخصصية. يُحرَص في هذه الخدمة على السرية الكاملة ووضوح الاتفاقات المتعلقة بالملكية الفكرية. لا يفرض كاتب الظل رؤيته بل يترجم رؤية المستفيد إلى نص متين قابل للنشر أو العرض، ويلتزم بأعلى معايير المهنية في تسليم العمل بجودة عالية وفي الوقت المحدد.",
      features: [
        "كتابة السير الذاتية والكتب التوثيقية التخصصية",
        "الحفاظ على روح الشخصية ومحتوى الفكرة",
        "السرية الكاملة ووضوح الاتفاقات",
        "ترجمة رؤية المستفيد إلى نص متين قابل للنشر",
        "التزام بأعلى معايير المهنية في التسليم"
      ],
      buttonText: "اطلب الخدمة"
    }
  ];

  const entityServices = [
    {
      icon: <Users className="text-orange h-8 w-8" />,
      title: "التأهيل",
      description: "تُقدَّم هذه الخدمة للجهات الثقافية والتعليمية والمؤسسات المهتمة بتطوير المهارات الكتابية لمنسوبيها أو جمهورها المستهدف، عبر تقديم ورش عمل متخصصة يقدّمها كتّاب محترفون وممارسون في مجالات متنوعة من الكتابة. تتراوح موضوعات الورش بين الكتابة الإبداعية، والكتابة الوظيفية، والكتابة للطفل، وتقنيات تحرير النصوص. تعتمد الورش على التفاعل والتطبيق العملي، وتُصمَّم لتناسب المدة الزمنية المحددة والمرحلة العمرية للمشاركين. تتيح هذه الخدمة للجهات استقطاب محتوى تدريبي جاهز، ومجرّب، وذو أثر مباشر على المشاركين، دون الحاجة للدخول في تصميم من الصفر. تُقدَّم كل ورشة بدليل مرافق، وتمارين عملية، وأدوات تقييم، وتُدار بمعايير عالية من المهنية والفعالية التعليمية.",
      features: [
        "تعتمد الورش على التفاعل والتطبيق العملي",
        "تُصمَّم لتناسب المدة الزمنية والمرحلة العمرية",
        "محتوى تدريبي جاهز ومجرّب وذو أثر مباشر",
        "دليل مرافق وتمارين عملية وأدوات تقييم",
        "إدارة بمعايير عالية من المهنية والفعالية"
      ],
      buttonText: "احجز التأهيل"
    },
    {
      icon: <GraduationCap className="text-orange h-8 w-8" />,
      title: "التصميم",
      description: "خدمة تصميم ورش العمل والدورات التدريبية موجّهة للجهات التي ترغب بتقديم محتوى تدريبي مخصص لجمهورها أو موظفيها، وتبحث عن بناء ورشة متكاملة من حيث الأهداف، والمنهجية، والمحتوى، والأنشطة التطبيقية. يعمل فريق مجتمع الكتابة على تصميم ورشة تعليمية فريدة تستجيب لاحتياجات الجهة، وتلبي خصائص الفئة المستهدفة، سواء من حيث المستوى المعرفي أو السياق المؤسسي. تبدأ عملية التصميم بفهم أهداف الجهة ومشكلاتها، ثم وضع خارطة تعلم متكاملة تتضمن: المحتوى النظري، والتمارين التطبيقية، وآليات التقييم، والمواد المصاحبة (عروض، كتيبات، أدوات قياس). كما تتضمن الخدمة تدريب مقدمي الورشة أو تهيئتهم لتقديمها بجودة عالية. تضمن هذه الخدمة حصول الجهة على منتج معرفي قابل للتنفيذ والتكرار، ويعزز صورتها كمبادِرة في بناء القدرات الثقافية والكتابية.",
      features: [
        "تصميم خارطة تعلم متكاملة (محتوى نظري، تمارين، تقييم)",
        "المواد المصاحبة (عروض، كتيبات، أدوات قياس)",
        "تدريب مقدمي الورشة أو تهيئتهم",
        "منتج معرفي قابل للتنفيذ والتكرار",
        "تعزيز صورة الجهة كمبادِرة في بناء القدرات"
      ],
      buttonText: "صمم ورشتك"
    },
    {
      icon: <Award className="text-orange h-8 w-8" />,
      title: "البناء",
      description: "تُقدَّم خدمة تصميم البرامج الثقافية للجهات التي تسعى لتطوير مبادرات ثقافية مؤثرة تستند إلى رؤية واضحة، وهوية فكرية متماسكة، وتخطيط منهجي. يتولى فريق مجتمع الكتابة بناء برنامج ثقافي متكامل، يتضمن تصور الفكرة، صياغة الأهداف، تحديد المسارات التنفيذية، وصف المخرجات، وآليات القياس والتقييم. يُراعى في التصميم ربط البرنامج بالسياق المحلي، وتحقيق التوازن بين التأثير الثقافي والاستدامة التشغيلية. كما تشمل الخدمة اقتراح الشراكات، والفعاليات، والخدمات المساندة التي تعزز قيمة البرنامج وتوسع أثره. سواء كان البرنامج مخصصًا للكُتّاب، أو القرّاء، أو المهتمين بالثقافة عمومًا، فإن فريق مجتمع الكتابة يعمل على ضمان اتساقه، قابليته للتطبيق، وتفرّده ضمن خارطة المشاريع الثقافية الوطنية.",
      features: [
        "ربط البرنامج بالسياق المحلي",
        "تحقيق التوازن بين التأثير الثقافي والاستدامة",
        "اقتراح الشراكات والفعاليات والخدمات المساندة",
        "ضمان اتساق البرنامج وقابليته للتطبيق",
        "تفرّد ضمن خارطة المشاريع الثقافية الوطنية"
      ],
      buttonText: "ابن برنامجك"
    }
  ];

  return (
    <section id="services-tabs" className="section-padding relative bg-white">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">خدماتنا المتخصصة</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            نقدم حلولاً كتابية متكاملة تلبي احتياجات الأفراد والجهات، مع التركيز على الجودة والاحترافية في كل خدمة
          </p>
        </div>

        <div className="animated-element opacity-0">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100">
              <TabsTrigger 
                value="individual" 
                className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-white"
              >
                <User className="w-4 h-4" />
                خدمات الأفراد
              </TabsTrigger>
              <TabsTrigger 
                value="entity" 
                className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-white"
              >
                <Building2 className="w-4 h-4" />
                خدمات الجهات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="individual" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {individualServices.map((service, index) => (
                  <div key={index} className="opacity-100 transform translate-y-0">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      buttonText={service.buttonText}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="entity" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {entityServices.map((service, index) => (
                  <div key={index} className="opacity-100 transform translate-y-0">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      buttonText={service.buttonText}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to action */}
        {/* <div className="mt-16 p-8 bg-gray-50 rounded-lg animated-element opacity-0">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">لديك احتياج خاص؟</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              نحن نؤمن بأن كل مشروع كتابي فريد. تواصل معنا لمناقشة احتياجاتك الخاصة وسنقوم بتصميم حل مخصص لك.
            </p>
            <Button 
              onClick={() => window.open('https://forms.gle/q36zENXnA1ouCmcb7', '_blank', 'noopener,noreferrer')}
              className="bg-gold hover:bg-gold/90 text-white px-8 py-3"
            >
              تواصل معنا الآن
            </Button>
          </div>
        </div> */}

<div className="mt-16 p-8 bg-white rounded-lg shadow-md animated-element opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">هل تحتاج إلى خدمة مخصصة؟</h3>
              <p className="text-gray-600 mb-6">
                نحن نقدم خدمات مخصصة تناسب تناسب احتياجات الأفراد والجهات . تواصل معنا لمناقشة كيف يمكننا مساعدتك في رحلتك الكتابية.
              </p>
              <a 
                href="#contact" 
                className="btn-primary inline-block"
              >
                تواصل معنا
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="مساعدة الكتاب" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-orange/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
