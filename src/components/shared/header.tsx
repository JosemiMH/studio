
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import LanguageSwitcher from './language-switcher';
import { cn } from '@/lib/utils';
import AppointmentBooking from './appointment-booking';
import { useTranslations } from '@/contexts/translations-context';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const translations = useTranslations();
  const { nav, hero } = translations;

  const navItems = useMemo(() => [
    { href: '#about', label: nav.about },
    { href: '#services', label: nav.services },
    { href: '#ai-wellness', label: nav.ai_wellness },
    { href: '#portfolio', label: nav.portfolio },
    { href: '#testimonials', label: nav.testimonials },
    { href: '#blog', label: nav.blog },
    { href: '#contact', label: nav.contact },
  ], [nav]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const evaProfileImage = PlaceHolderImages.find(img => img.id === 'eva-profile');

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <div className="hidden lg:flex">
              <AppointmentBooking trigger={
                  <Button size="sm">{hero.cta_contact}</Button>
              } />
            </div>
            <div className="lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <span className="font-headline text-lg font-bold">Menu</span>
                      <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                          <X className="h-6 w-6" />
                      </Button>
                    </div>
                    <nav className="flex-grow p-4">
                      <ul className="space-y-4">
                        {navItems.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-lg font-semibold text-foreground/80 hover:text-primary"
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-4 border-t">
                      <AppointmentBooking trigger={
                          <Button className="w-full">{hero.cta_contact}</Button>
                      }/>
                      </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
