
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/contexts/language-context';
import { TrendingUp, Phone } from 'lucide-react';
import SectionWrapper from '../shared/section-wrapper';
import AppointmentBooking from '../shared/appointment-booking';
import { useTranslations } from '@/contexts/translations-context';

const HeroSection = () => {
  const { language } = useLanguage();
  const translations = useTranslations();
  const { hero } = translations;

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-es'
  );

  return (
    <SectionWrapper id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden !translate-y-0 !opacity-100">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Luxury spa background"
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
       <div className="absolute inset-0 bg-gradient-to-r from-turquoise-dark/60 via-sage/40 to-transparent opacity-50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent-foreground mb-4 backdrop-blur-sm">
              <TrendingUp className="mr-2 h-4 w-4 text-accent" />
              {hero.stat}
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              {hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
              {hero.subtitle}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <a href="#services">{hero.cta_services}</a>
              </Button>
              <AppointmentBooking trigger={
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  {hero.cta_contact}
                </Button>
              }/>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
