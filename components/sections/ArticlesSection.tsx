'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, User } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

function Article({ title, excerpt, author, date, category, image, slug }: ArticleProps) {
  return (
    <div className="article-card animated-element opacity-0">
      <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-gold text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User size={14} className="ml-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="ml-1" />
            <span>{formatDate(date)}</span>
          </div>
        </div>
        
        <Link href={`/articles/${slug}`}>
          <Button variant="link" className="text-gold p-0 hover:text-gold-dark">
            قراءة المزيد
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ArticlesSection() {
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
    <section id="articles" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">المقالات والمنشورات</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            اطلع على أحدث المقالات والمنشورات من مجتمع الكتابة والمساهمين فيه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Articles */}
          <Article 
            title="أسس الكتابة الإبداعية للمبتدئين"
            excerpt="تتناول هذه المقالة الأسس الأولية للكتابة الإبداعية وتقدم نصائح عملية للكتاب المبتدئين لتطوير مهاراتهم الكتابية والتغلب على تحديات البداية."
            author="أحمد الشمري"
            date="2025-08-15"
            category="مقالات تعليمية"
            image="https://images.pexels.com/photos/6980425/pexels-photo-6980425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="writing-basics"
          />
          
          <Article 
            title="دور القراءة في تطوير مهارات الكتابة"
            excerpt="كيف تساهم القراءة المنتظمة في تطوير أسلوب الكاتب ومفرداته وقدرته على التعبير؟ هذه المقالة تستكشف العلاقة المتبادلة بين القراءة والكتابة."
            author="سارة المنصور"
            date="2025-07-22"
            category="مقالات رأي"
            image="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="reading-writing"
          />
          
          <Article 
            title="تقنيات السرد الحديثة في الرواية العربية"
            excerpt="دراسة تحليلية لأبرز التقنيات السردية المستخدمة في الرواية العربية المعاصرة وتأثيرها على تطور الشكل الروائي العربي في العقود الأخيرة."
            author="محمد العلي"
            date="2025-06-30"
            category="مقالات نقدية"
            image="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="modern-narrative"
          />

          {/* Translations */}
          <Article 
            title="نصائح كتابية من إرنست همنغواي"
            excerpt="ترجمة لمقالة تضم أهم النصائح الكتابية التي قدمها الروائي الأمريكي الشهير إرنست همنغواي للكتاب الطموحين، مع تعليقات توضيحية."
            author="ترجمة: نورة القحطاني"
            date="2025-08-05"
            category="ترجمات أدبية"
            image="https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="hemingway-tips"
          />
          
          <Article 
            title="التحرير الذاتي: دليل الكاتب لتنقيح عمله"
            excerpt="ترجمة لدليل شامل حول كيفية تحرير ومراجعة النصوص ذاتياً، يقدم خطوات عملية للكشف عن نقاط الضعف في النص وتحسينه."
            author="ترجمة: خالد العبيدي"
            date="2025-07-12"
            category="ترجمات عملية"
            image="https://images.pexels.com/photos/6980464/pexels-photo-6980464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="self-editing"
          />
          
          <Article 
            title="مستقبل النشر الرقمي: توقعات وتحديات"
            excerpt="ترجمة لدراسة استشرافية حول مستقبل صناعة النشر الرقمي عالمياً وعربياً، وأبرز التحديات والفرص التي ستواجه الكتاب والناشرين."
            author="ترجمة: لمياء الصالح"
            date="2025-06-18"
            category="ترجمات تقنية"
            image="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="digital-publishing"
          />

          {/* Contributions */}
          <Article 
            title="رحلتي مع الكتابة: من الهواية إلى الاحتراف"
            excerpt="تجربة شخصية لكاتب شاب يشارك رحلته في عالم الكتابة، والتحديات التي واجهها، وكيف تحولت الكتابة من هواية إلى مهنة احترافية."
            author="عبدالله النجدي"
            date="2025-08-20"
            category="تجارب شخصية"
            image="https://images.pexels.com/photos/4050319/pexels-photo-4050319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="writing-journey"
          />
          
          <Article 
            title="الكتابة في زمن السوشيال ميديا"
            excerpt="تأملات حول تأثير وسائل التواصل الاجتماعي على أسلوب الكتابة المعاصر، وكيف يمكن للكاتب الموازنة بين متطلبات المنصات الرقمية والقيمة الأدبية."
            author="هدى المالكي"
            date="2025-07-25"
            category="تأملات كتابية"
            image="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="social-media-writing"
          />
          
          <Article 
            title="قصتي القصيرة: صدى الصمت"
            excerpt="قصة قصيرة فائزة في مسابقة مجتمع الكتابة السنوية، تستكشف عالم امرأة تعيش في عزلة اختيارية وعلاقتها المعقدة مع الكلمات والصمت."
            author="سمية الدوسري"
            date="2025-06-10"
            category="إبداعات"
            image="https://images.pexels.com/photos/6471854/pexels-photo-6471854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            slug="echo-of-silence"
          />
        </div>
        
        {/* <div className="mt-12 text-center animated-element opacity-0">
          <Button className="bg-gold hover:bg-gold-dark text-white px-8">
            عرض المزيد من المقالات
          </Button>
        </div> */}
      </div>
    </section>
  );
}