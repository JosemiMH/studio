
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import SectionWrapper from '../shared/section-wrapper';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '@/contexts/translations-context';

const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        
        let start = 0;
        const end = value;
        if (start === end) return;

        const duration = 2000;
        const incrementTime = (duration / end);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);

    }, [value, isVisible]);

    return <span ref={ref}>{count}</span>;
}

const AboutSection = () => {
  const { about } = useTranslations();
  const profileImage = PlaceHolderImages.find((img) => img.id === 'eva-profile');
  const conferenceImage = PlaceHolderImages.find((img) => img.id === 'eva-conference');

  const stats = [
    { value: 20, label: about.stats.experience },
    { value: 50, label: about.stats.projects },
    { value: 30, label: about.stats.conferences },
    { value: 200, label: about.stats.professionals },
    { value: 15, label: about.stats.countries },
    { value: 5000, label: about.stats.attendees },
  ];

  return (
    <SectionWrapper id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {about.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{about.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-foreground/90">
              <p>{about.p1}</p>
              <p>{about.p2}</p>
               <div className="flex items-center gap-x-6 pt-4">
                  <Button asChild><a href="#contact">{about.cta_contact}</a></Button>
                  <Button variant="outline" asChild><a href="#portfolio">{about.cta_portfolio}</a></Button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {profileImage && (
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={profileImage.imageHint}
                  />
                </div>
              )}
              {conferenceImage && (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg self-end">
                  <Image
                    src={conferenceImage.imageUrl}
                    alt={conferenceImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={conferenceImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-24">
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center p-4 bg-background/50 rounded-lg shadow-sm">
                  <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                  <dd className="order-first text-5xl font-bold tracking-tight text-primary">
                    <AnimatedCounter value={stat.value} />+
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
