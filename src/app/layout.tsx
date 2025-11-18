import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Eva Pérez - Spa Manager & Wellness Consultant',
  description:
    'Consultora especializada en gestión de spa y wellness en hoteles de lujo. Transformando el área de Wellness en un motor de crecimiento estratégico.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
