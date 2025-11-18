
"use client";

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import SectionWrapper from '../shared/section-wrapper';

const CtaSection = () => {
  const { cta_section } = useLanguage().translations;

  return (
    <SectionWrapper className="bg-primary/90 text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {cta_section.title}
        </h2>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">{cta_section.cta}</a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;
