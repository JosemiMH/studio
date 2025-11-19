
"use client";

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SectionWrapper from '../shared/section-wrapper';
import { Clock } from 'lucide-react';
import { useTranslations } from '@/contexts/translations-context';

const BlogSection = () => {
  const { language } = useLanguage();
  const translations = useTranslations();
  const { blog } = translations;

  return (
    <SectionWrapper id="blog" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {blog.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {blog.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.slice(0, 3).map((post: any) => {
            const postImage = PlaceHolderImages.find(img => img.id === post.image);
            return (
              <Card key={post.id} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-video">
                  {postImage && (
                    <Image
                      src={postImage.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={postImage.imageHint}
                    />
                  )}
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span>{new Date(post.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="mt-2 font-headline text-xl font-semibold text-foreground">{post.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <Button variant="link" className="p-0 h-auto">
                        {blog.read_more}
                    </Button>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {post.readingTime}
                    </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
