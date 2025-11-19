import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Poppins, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import { TranslationsProvider } from '@/contexts/translations-context';
import { getTranslations } from '@/lib/get-translations';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
});


export const metadata: Metadata = {
  title: 'Eva Pérez - Spa Manager & Wellness Consultant',
  description:
    'Consultora especializada en gestión de spa y wellness en hoteles de lujo. Transformando el área de Wellness en un motor de crecimiento estratégico.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const translations = await getTranslations();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased', poppins.variable, playfairDisplay.variable, cormorantGaramond.variable)}>
        <LanguageProvider>
          <TranslationsProvider translations={translations}>
            {children}
            <Toaster />
          </TranslationsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
