
"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SectionWrapper from '../shared/section-wrapper';
import { cn } from '@/lib/utils';

type Category = 'all' | 'luxury' | 'urban' | 'resorts' | 'wellness';

const PortfolioSection = () => {
  const { portfolio } = useLanguage().translations;
  const [filter, setFilter] = useState<Category>('all');

  const filteredProjects =
    filter === 'all'
      ? portfolio.projects
      : portfolio.projects.filter((p: any) => p.category === filter);

  return (
    <SectionWrapper id="portfolio" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {portfolio.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {portfolio.subtitle}
          </p>
        </div>
        
        <div className="mt-12 flex justify-center flex-wrap gap-2">
          {Object.entries(portfolio.categories).map(([key, label]) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              onClick={() => setFilter(key as Category)}
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: any) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.image);
            return (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-video">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-primary">{portfolio.categories[project.category]}</p>
                  <h3 className="mt-2 font-headline text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                  <p className="mt-4 text-sm font-semibold text-foreground/80">
                    <span className="font-bold text-primary">Resultados:</span> {project.results}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
