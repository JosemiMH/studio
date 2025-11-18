
"use client";

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import SectionWrapper from '../shared/section-wrapper';
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const { testimonials } = useLanguage().translations;

  return (
    <SectionWrapper id="testimonials" className="bg-background/70 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {testimonials.subtitle}
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.items.map((testimonial: any, index: number) => {
              const testimonialImage = PlaceHolderImages.find(img => img.id === testimonial.image);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                        <div className="mb-4">
                            {testimonialImage && (
                                <Image
                                    src={testimonialImage.imageUrl}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                    data-ai-hint={testimonialImage.imageHint}
                                />
                            )}
                        </div>
                        <div className="flex text-accent mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <blockquote className="italic text-muted-foreground flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="mt-4 font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
