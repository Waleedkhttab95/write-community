'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { scrollToElement } from '@/lib/utils';

const navItems = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'من نحن', href: '#about' },
  { name: 'مساراتنا', href: '#tracks' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'مشاريعنا', href: '#programs' },
  { name: 'المقالات', href: '#articles' },
  { name: 'تواصل معنا', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = href.substring(1);
    scrollToElement(id);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center"
          >
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="مجتمع الكتابة"
                width={48}
                height={48}
                className="ml-2 w-auto h-12"
                priority
              />
              {/* <span className={cn(
                "text-2xl font-bold transition-colors duration-300",
                scrolled ? "text-gold" : "text-gold-light"
              )}>
                مجتمع الكتابة
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors duration-200",
                  scrolled ? 
                    "text-gray-700 hover:text-gold hover:bg-gold-light/10" : 
                    "text-white hover:text-gold-light hover:bg-white/10"
                )}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-gold hover:bg-gold-dark text-white px-6 mr-6" 
              onClick={() => window.open('#contact', '_self')}
            >
              انضم إلينا
            </Button>

            <Button 
              className="bg-gold hover:bg-gold-dark text-white px-6 mr-3" 
              onClick={() => window.open('https://store-write-community.com', '_blank')}
            >
              المتجر
            </Button>

          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                scrolled ? 
                  "text-gray-700 hover:bg-gray-100" : 
                  "text-white hover:bg-white/10"
              )}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-16 w-full">
          <nav className="container-custom py-5">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-md text-gray-700 hover:bg-gold-light/10 hover:text-gold font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-gold hover:bg-gold-dark text-white mt-4 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToElement('contact');
                }}
              >
                انضم إلينا
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}