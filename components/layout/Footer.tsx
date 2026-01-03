import React from 'react';
import Link from 'next/link';
import { Instagram, Send, ArrowRight, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NewsletterForm from '@/components/forms/NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brown-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">مجتمع الكتابة</h3>
            <p className="text-gray-300 mb-4">
              بيئة حاضنة لتطوير المهارات الكتابية من خلال برامج وورش عمل وملتقيات متخصصة.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-6">
              <a 
                href="https://x.com/WritingKSA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold/20 p-2 rounded-full hover:bg-gold/40 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  className="text-gold-light"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/Writing_community22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold/20 p-2 rounded-full hover:bg-gold/40 transition-colors"
              >
                <Instagram size={20} className="text-gold-light" />
              </a>
              <a 
                href="https://t.me/writing_community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold/20 p-2 rounded-full hover:bg-gold/40 transition-colors"
              >
                <Send size={20} className="text-gold-light" />
              </a>
              <a 
                href="https://www.linkedin.com/company/writingcommunity/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold/20 p-2 rounded-full hover:bg-gold/40 transition-colors"
              >
                <Linkedin size={20} className="text-gold-light" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-gold-light flex items-center">
                  <ArrowRight size={16} className="ml-1" />
                  <span>من نحن</span>
                </Link>
              </li>
              <li>
                <Link href="#tracks" className="text-gray-300 hover:text-gold-light flex items-center">
                  <ArrowRight size={16} className="ml-1" />
                  <span>مساراتنا</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-gold-light flex items-center">
                  <ArrowRight size={16} className="ml-1" />
                  <span>خدماتنا</span>
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-gray-300 hover:text-gold-light flex items-center">
                  <ArrowRight size={16} className="ml-1" />
                  <span>مشاريعنا</span>
                </Link>
              </li>
              <li>
                <Link href="#articles" className="text-gray-300 hover:text-gold-light flex items-center">
                  <ArrowRight size={16} className="ml-1" />
                  <span>المقالات</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <p className="text-gray-300 mb-2">
              البريد الإلكتروني:
            </p>
            <p className="text-gold-light mb-4 hover:underline">
              <a href="mailto:Writing.community22@gmail.com">
                Writing.community22@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mb-2">
                X:
            </p>
            <p className="text-gold-light mb-4 hover:underline">
              <a href="https://x.com/WritingKSA" target="_blank" rel="noopener noreferrer">
                WritingKSA
              </a>
            </p>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">النشرة البريدية</h3>
            <p className="text-gray-300 mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والفعاليات.
            </p>
            <NewsletterForm inFooter={true} />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gold/20 text-center">
          <p className="text-gray-400">
            © {currentYear} جميع الحقوق محفوظة لمجتمع الكتابة
          </p>
        </div>
      </div>
    </footer>
  );
}