'use client';

import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import { TranslationsProvider, useTranslations } from '@/contexts/translations-context';

import Header from '@/components/shared/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import AiWellnessSection from '@/components/sections/ai-wellness';
import CtaSection from '@/components/sections/cta';
import PortfolioSection from '@/components/sections/portfolio';
import TestimonialsSection from '@/components/sections/testimonials';
import BlogSection from '@/components/sections/blog';
import LinkedInSection from '@/components/sections/linkedin';
import ResourcesSection from '@/components/sections/resources';
import ContactSection from '@/components/sections/contact';
import NewsletterSection from '@/components/sections/newsletter';
import Footer from '@/components/shared/footer';
import Chatbot from '@/components/shared/chatbot';
import CookieConsentBanner from '@/components/shared/cookie-consent-banner';
import ScrollToTopButton from '@/components/shared/scroll-to-top';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <TranslationsProvider translations={t}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection translations={t.services} />
          <AiWellnessSection translations={t.ai_wellness} />
          <CtaSection translations={t.cta_section} />
          <PortfolioSection translations={t.portfolio} />
          <TestimonialsSection translations={t.testimonials} />
          <BlogSection />
          <LinkedInSection />
          <ResourcesSection translations={t.resources} />
          <ContactSection />
          <NewsletterSection />
        </main>
        <Footer />
        <Chatbot />
        <CookieConsentBanner />
        <ScrollToTopButton />
      </div>
    </TranslationsProvider>
  );
}
