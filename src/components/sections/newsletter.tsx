
"use client";

import { useActionState } from "react";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/app/actions";
import SectionWrapper from '../shared/section-wrapper';

const NewsletterSection = () => {
  const { newsletter } = useLanguage().translations;
  const { toast } = useToast();
  const [state, formAction] = useActionState(subscribeToNewsletter, { message: "", errors: {}, success: false });

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message && state.errors?.email) {
      toast({
        title: "Error",
        description: state.errors.email[0],
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <SectionWrapper className="bg-primary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {newsletter.subtitle}
          </p>
          <form action={formAction} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              name="email"
              placeholder={newsletter.email}
              required
              className="flex-grow"
            />
            <Button type="submit" size="lg" className="flex-shrink-0">
              {newsletter.subscribe}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NewsletterSection;
