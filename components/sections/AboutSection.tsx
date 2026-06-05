import { Target, BookText, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <h2 className="decorated-heading animated-element">من نحن</h2>
          <p className="animated-element max-w-3xl text-lg text-muted-foreground">
           جهة متخصصة في تقديم برامج بناء القدرات وتأهيل الكفاءات في الكتابة بمختلف المجالات،
           معتمدين على أهم منهجيات التدريب والتصميم التعليمي،
           ومنطلقين من خبرة معمقة في فهم الكتابة وأدواتها. 

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="card animated-element p-8 bg-card">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Target className="text-gold h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">رؤيتنا</h3>
            <p className="text-muted-foreground">
            الوجهة الأولى في برامج الكتابة و تصميم التجارب التعليمية المبتكرة لبناء القدرات الكتابية. 
            </p>
          </div>

          {/* Mission */}
          <div className="card animated-element p-8 bg-card">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mb-6">
              <BookText className="text-red h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">قصتنا</h3>
            <p className="text-muted-foreground text-right">
              انطلق مجتمع الكتابة في 1/1/1444هـ من مدينة الريــــاض في المملكــة العـربيــة السعــوديــة، من خلال عدة مسارات متكاملة تلبي احتياجات الكتّاب في مختلف المجالات للمساهمة في بناء القدرات وتطوير المنتجات الكتابية وتطوير المنتجات الكتابية باللغة العربية .
            </p>
          </div>

          {/* Values */}
          <div className="card animated-element p-8 bg-card">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="text-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">قيمنا</h3>
            <p className="text-muted-foreground">
            الابتكار: سؤالــنا الأول وغايتنا الأولى.<br />
              الإتقان: منهجنا الثابت وعهدنا الدائم.<br />
              التعاون: حالتــــنا الذهنــية المستـمرة وذروة مرونتنا.
            </p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-20">
          <div className="mb-12 max-w-3xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">منهجياتنا</h3>
            <span className="text-muted-foreground text-lg max-w-3xl block">
              انطلاقًا من منهجية التصميم المرتكز حول الإنسان، ومنهجية التفكير التصميمي، ومناهج التدريب العالمية، وضعنا عددًا من المنهجيات الخاصة التي نصمم برامجنا وفقًا لها
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animated-element space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">١</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">منهجية تصميم البرامج التدريبية</h4>
                    <p className="text-muted-foreground">تصميم برامج تدريبية متكاملة ومتخصصة تلبي احتياجات المتدربين</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">٢</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">منهجية تصميم الحقائب التدريبية</h4>
                    <p className="text-muted-foreground">تطوير حقائب تدريبية احترافية ومتكاملة</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">٣</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">منهجية بناء برامج الكتابة للأطفال</h4>
                    <p className="text-muted-foreground">برامج متخصصة لتنمية مهارات الكتابة لدى الأطفال</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">٤</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">منهجية بناء برامج الكتابة للكبار</h4>
                    <p className="text-muted-foreground">برامج متقدمة لتنمية مهارات الكتابة لدى الكبار</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">٥</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">منهجية تيسير البرامج التدريبية</h4>
                    <p className="text-muted-foreground">أساليب متطورة لتيسير وتنفيذ البرامج التدريبية</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">٦</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">منهجية قياس أثر التدريب</h4>
                    <p className="text-muted-foreground">طرق علمية لقياس وتقييم أثر البرامج التدريبية</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animated-element relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-writers.jpg"
                  alt="مجموعة من الكتّاب يتناقشون"
                  width={1260}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-96 lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-3 p-6 sm:-bottom-8 sm:-left-8 sm:p-8 bg-card rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-primary mb-2">+٢٠٠٠</p>
                <p className="text-muted-foreground text-lg">مستفيد من برامجنا</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}