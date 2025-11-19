import { Button } from '@/components/ui/button';
import SectionWrapper from '../shared/section-wrapper';
import type { AllTranslations } from '@/lib/translations';

type CtaTranslations = AllTranslations['es']['cta_section'];

const CtaSection = ({ translations }: { translations: CtaTranslations }) => {

  return (
    <SectionWrapper className="bg-primary/90 text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.title}
        </h2>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">{translations.cta}</a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;
