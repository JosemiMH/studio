import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, FileText } from 'lucide-react';
import SectionWrapper from '../shared/section-wrapper';
import { AllTranslations } from '@/lib/translations';

type ResourcesTranslations = AllTranslations['es']['resources'];

const ResourcesSection = ({ translations }: { translations: ResourcesTranslations }) => {

  return (
    <SectionWrapper id="resources" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {translations.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {translations.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.items.map((item: any, index: number) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <form className="mt-6 space-y-4">
                    <div>
                        <Label htmlFor={`name-${index}`} className="sr-only">{translations.name}</Label>
                        <Input id={`name-${index}`} placeholder={translations.name} />
                    </div>
                    <div>
                        <Label htmlFor={`email-${index}`} className="sr-only">{translations.email}</Label>
                        <Input type="email" id={`email-${index}`} placeholder={translations.email} />
                    </div>
                    <Button type="submit" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        {translations.download}
                    </Button>
                </form>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResourcesSection;
