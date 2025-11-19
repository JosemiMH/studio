
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { useTranslations } from '@/contexts/translations-context';

export default function NotFound() {
  const { not_found } = useTranslations();

  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center text-center px-4 py-24">
        <div>
          <h1 className="text-9xl font-extrabold text-primary tracking-widest">404</h1>
          <div className="bg-foreground text-background px-2 text-sm rounded rotate-12 absolute">
            {not_found.title}
          </div>
          <p className="mt-4 text-lg text-muted-foreground">{not_found.message}</p>
          <Button asChild className="mt-8">
            <Link href="/">{not_found.go_home}</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
