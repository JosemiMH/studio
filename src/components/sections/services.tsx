import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, TrendingUp, Users, Rocket, LucideIcon } from 'lucide-react';
import SectionWrapper from '../shared/section-wrapper';
import { Button } from '../ui/button';
import { AllTranslations } from '@/lib/translations';

type ServicesTranslations = AllTranslations['es']['services'];

const iconMap: { [key: string]: LucideIcon } = {
  Briefcase,
  TrendingUp,
  Users,
  Rocket,
};

const ServicesSection = ({ translations }: { translations: ServicesTranslations }) => {

  return (
    <SectionWrapper id="services" className="bg-background/70 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {translations.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {translations.subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {translations.list.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={index} className="flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {Icon && <Icon className="h-8 w-8" />}
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-left text-muted-foreground">
                    {service.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" asChild>
                    <a href="#contact">{translations.cta}</a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
