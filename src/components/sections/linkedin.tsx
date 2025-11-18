
"use client";

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Star, Linkedin } from 'lucide-react';
import SectionWrapper from '../shared/section-wrapper';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

const LinkedInSection = () => {
  const { linkedin } = useLanguage().translations;
  const profileImage = PlaceHolderImages.find((img) => img.id === 'eva-profile');

  return (
    <SectionWrapper className="bg-background/70 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
           <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {linkedin.title}
            </h2>
            </div>
          <Card className="overflow-hidden shadow-lg">
            <div className="h-24 bg-gradient-to-r from-primary to-accent" />
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 -mt-16">
                {profileImage && (
                  <div className="relative flex-shrink-0">
                    <Image
                      src={profileImage.imageUrl}
                      alt="Eva Pérez"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-card"
                      data-ai-hint={profileImage.imageHint}
                    />
                  </div>
                )}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-2xl font-bold font-headline">Eva Pérez</h3>
                  <p className="text-muted-foreground">{linkedin.data.title}</p>
                  <p className="text-sm text-muted-foreground">{linkedin.data.location}</p>
                   <Button asChild size="sm" className="mt-4">
                    <a href="https://www.linkedin.com/in/eva-perez-montes-20806b22/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> {linkedin.view_profile}
                    </a>
                  </Button>
                </div>
              </div>
              
              <Separator className="my-8" />

              <div>
                <h4 className="flex items-center text-lg font-semibold mb-4"><Briefcase className="mr-2 h-5 w-5 text-primary" />{linkedin.experience}</h4>
                <div className="space-y-4">
                    {linkedin.data.experience.map((exp: any, i: number) =>(
                        <div key={i}>
                            <p className="font-semibold">{exp.title}</p>
                            <p className="text-sm text-muted-foreground">{exp.company} &middot; {exp.period}</p>
                        </div>
                    ))}
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h4 className="flex items-center text-lg font-semibold mb-4"><GraduationCap className="mr-2 h-5 w-5 text-primary" />{linkedin.education}</h4>
                 {linkedin.data.education.map((edu: any, i: number) =>(
                    <div key={i}>
                        <p className="font-semibold">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                 ))}
              </div>

              <Separator className="my-8" />

              <div>
                <h4 className="flex items-center text-lg font-semibold mb-4"><Star className="mr-2 h-5 w-5 text-primary" />{linkedin.skills}</h4>
                <div className="flex flex-wrap gap-2">
                    {linkedin.data.skills.map((skill: string, i: number) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                    ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LinkedInSection;
