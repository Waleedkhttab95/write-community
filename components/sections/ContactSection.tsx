import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import NewsletterForm from '@/components/forms/NewsletterForm';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <h2 className="decorated-heading animated-element opacity-0">تواصل معنا</h2>
          <p className="animated-element opacity-0 max-w-3xl text-lg text-muted-foreground">
            نحن هنا للإجابة على استفساراتك ومساعدتك في الانضمام إلى مجتمعنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animated-element opacity-0">
            <div className="bg-card rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">أرسل لنا رسالة</h3>
              <ContactForm />
            </div>
          </div>
          
          <div className="animated-element opacity-0">
            <div className="bg-card rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="text-gold h-5 w-5" />
                  </div>
                  <div className="mr-4">
                    <h4 className="font-bold text-foreground mb-1">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:Writing.community22@gmail.com" className="hover:text-primary">
                        Writing.community22@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-gold h-5 w-5" />
                  </div>
                  <div className="mr-4">
                    <h4 className="font-bold text-foreground mb-1">الموقع</h4>
                    <p className="text-muted-foreground">
                      المملكة العربية السعودية - الرياض
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="text-gold h-5 w-5" />
                  </div>
                  <div className="mr-4">
                    <h4 className="font-bold text-foreground mb-1">التواصل الاجتماعي</h4>
                    <p className="text-muted-foreground">
                      <a href="https://twitter.com/WritingKSA" target="_blank" rel="noopener noreferrer" className="hover:text-primary block">
                        X: WritingKSA
                      </a>
                      <a href="https://www.instagram.com/Writing_community22" target="_blank" rel="noopener noreferrer" className="hover:text-primary block">
                        انستغرام: Writing_community22
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-8">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}