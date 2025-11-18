
"use client";

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import SectionWrapper from '../shared/section-wrapper';
import { BrainCircuit } from 'lucide-react';

const AiWellnessSection = () => {
  const { ai_wellness } = useLanguage().translations;

  return (
    <SectionWrapper id="ai-wellness" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {ai_wellness.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {ai_wellness.content}
            </p>
            <div className="mt-8 text-left">
              <h3 className="font-semibold text-foreground mb-4">{ai_wellness.benefits_title}</h3>
              <ul className="space-y-3">
                {ai_wellness.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
                <Button asChild size="lg">
                    <a href="#contact">{ai_wellness.cta}</a>
                </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
             <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-primary/20 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="absolute inset-8 bg-primary/30 rounded-full flex items-center justify-center">
                    <BrainCircuit className="w-24 h-24 lg:w-32 lg:h-32 text-primary"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AiWellnessSection;
