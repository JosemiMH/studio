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
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AiWellnessSection />
        <CtaSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <LinkedInSection />
        <ResourcesSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
      <Chatbot />
      <CookieConsentBanner />
      <ScrollToTopButton />
    </div>
  );
}
