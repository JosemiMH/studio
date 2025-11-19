import type { Metadata } from "next";
import { Playfair_Display, Poppins, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/language-context";
import { getTranslations, getServerLanguage } from "@/lib/get-translations";
import { TranslationsProvider } from "@/contexts/translations-context";
import { Toaster } from "@/components/ui/toaster";

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const fontCormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});


export const metadata: Metadata = {
  title: "Eva Pérez - Spa Manager & Wellness Consultant",
  description: "Consultora especializada en gestión de spa y wellness en hoteles de lujo. Transformando el área de Wellness en un motor de crecimiento estratégico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const translations = getTranslations();
  const initialLanguage = getServerLanguage();
  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-poppins antialiased", fontPoppins.variable, fontPlayfair.variable, fontCormorant.variable)}>
        <LanguageProvider initialLanguage={initialLanguage}>
          <TranslationsProvider translations={translations}>
            {children}
            <Toaster />
          </TranslationsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
