'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { scrollToElement } from '@/lib/utils';
import ThemeToggle from '@/components/layout/ThemeToggle';

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
        scrolled ? 'bg-background/95 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'
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
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  scrolled ?
                    "text-foreground/80 hover:text-primary hover:bg-accent" :
                    "text-white hover:text-gold-light hover:bg-white/10"
                )}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle
              className={cn(
                "mr-2",
                scrolled
                  ? "text-foreground/80 hover:bg-accent"
                  : "text-white hover:bg-white/10"
              )}
            />
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 mr-6" 
              onClick={() => window.open('#contact', '_self')}
            >
              انضم إلينا
            </Button>

            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 mr-3" 
              onClick={() => window.open('https://store-write-community.com', '_blank')}
            >
              المتجر
            </Button>

          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle
              className={cn(
                scrolled || isMenuOpen
                  ? "text-foreground hover:bg-accent"
                  : "text-white hover:bg-white/10"
              )}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                scrolled || isMenuOpen ?
                  "text-foreground hover:bg-accent" :
                  "text-white hover:bg-white/10"
              )}
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-0 bg-background z-40 pt-16 w-full">
          <nav className="container-custom py-5">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-md text-foreground hover:bg-accent hover:text-primary font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToElement('contact');
                }}
              >
                انضم إلينا
              </Button>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2 w-full" 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://store-write-community.com', '_blank');
                }}
              >
                المتجر
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}