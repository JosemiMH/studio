
"use client";

import { useActionState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import SectionWrapper from '../shared/section-wrapper';
import { Mail, Phone, MapPin } from 'lucide-react';
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { contact } = useLanguage().translations;
  const { toast } = useToast();

  const ContactFormSchema = z.object({
    name: z.string().min(1, contact.name + " is required"),
    email: z.string().email(),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10),
    privacyConsent: z.literal(true),
  });
  
  const [state, formAction] = useActionState(submitContactForm, { message: "", errors: {}, success: false });

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      privacyConsent: false
    },
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <SectionWrapper id="contact" className="bg-background/70 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <form action={formAction} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <Input {...form.register("name")} placeholder={contact.name} aria-label={contact.name}/>
                    {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                </div>
                 <div>
                    <Input {...form.register("email")} type="email" placeholder={contact.email} aria-label={contact.email} />
                    {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <Input {...form.register("phone")} placeholder={contact.phone} aria-label={contact.phone}/>
                </div>
                 <div>
                    <Input {...form.register("company")} placeholder={contact.company} aria-label={contact.company}/>
                </div>
              </div>
               <div>
                <Textarea {...form.register("message")} placeholder={contact.message} rows={5} aria-label={contact.message}/>
                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" {...form.register("privacyConsent")} />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                   {contact.privacy_consent}
                  </label>
                  {state.errors?.privacyConsent && <p className="text-sm text-destructive">{state.errors.privacyConsent[0]}</p>}
                </div>
              </div>
              <div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">{contact.submit}</Button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-foreground">Contact Information</h3>
            <a href={`mailto:${contact.info_email}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary">
              <Mail className="h-6 w-6 text-primary" />
              <span>{contact.info_email}</span>
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin className="h-6 w-6 text-primary" />
              <span>{contact.info_location}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
