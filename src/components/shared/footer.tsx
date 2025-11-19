
"use client";

import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from '@/contexts/translations-context';

const Footer = () => {
  const translations = useTranslations();
  const { nav, footer } = translations;

  const quickLinks = [
    { href: '#about', label: nav.about },
    { href: '#services', label: nav.services },
    { href: '#portfolio', label: nav.portfolio },
    { href: '#contact', label: nav.contact },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: footer.privacy_policy },
    { href: '/terms', label: footer.terms },
    { href: '/cookie-policy', label: footer.cookies },
  ];
  
  const evaProfileImage = PlaceHolderImages.find(img => img.id === 'eva-profile');

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-start">
             <Link href="/" className="flex items-center gap-3 mb-4">
              {evaProfileImage && (
                <Image
                  src={evaProfileImage.imageUrl}
                  alt="Eva Pérez"
                  width={40}
                  height={40}
                  className="rounded-full"
                  data-ai-hint={evaProfileImage.imageHint}
                />
              )}
              <span className="font-headline text-xl font-bold text-foreground">
                Eva Pérez
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">{footer.tagline}</p>
             <div className="flex mt-4">
                <a href="https://www.linkedin.com/in/eva-perez-montes-20806b22/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
                </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footer.quick_links}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footer.legal}</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
             <h3 className="font-semibold mb-4">Contacto</h3>
             <p className="text-sm text-muted-foreground">
                <a href="mailto:eperez@asetrabalnearios.com" className="hover:text-primary">eperez@asetrabalnearios.com</a>
             </p>
             <p className="text-sm text-muted-foreground">España</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
