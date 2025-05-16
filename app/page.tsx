import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TracksSection from '@/components/sections/TracksSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <ServicesSection />
      <ProgramsSection />
      <ArticlesSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}