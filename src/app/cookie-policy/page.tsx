
"use client";

import { useLanguage } from '@/contexts/language-context';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function CookiePolicyPage() {
    const { footer } = useLanguage().translations;
    const { language } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl font-bold mb-8">{footer.cookies}</h1>
                    {language === 'es' ? (
                        <div className="prose lg:prose-lg max-w-none text-foreground/80">
                            <h2>1. ¿Qué son las cookies?</h2>
                            <p>Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo mientras navegas. Se procesan y almacenan en tu navegador web.</p>

                            <h2>2. Cómo Usamos las Cookies</h2>
                            <p>Utilizamos cookies para:</p>
                            <ul>
                                <li>Recordar tus preferencias de idioma.</li>
                                <li>Analizar el tráfico del sitio para mejorar la experiencia del usuario.</li>
                                <li>Asegurar el funcionamiento adecuado del sitio.</li>
                            </ul>

                            <h2>3. Cómo Controlar las Cookies</h2>
                            <p>Puedes controlar y/o eliminar las cookies como desees. Para más detalles, consulta aboutcookies.org. Puedes eliminar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar que se coloquen.</p>
                        </div>
                    ) : (
                        <div className="prose lg:prose-lg max-w-none text-foreground/80">
                            <h2>1. What Are Cookies?</h2>
                            <p>Cookies are small text files that websites place on your device as you are browsing. They are processed and stored by your web browser.</p>

                            <h2>2. How We Use Cookies</h2>
                            <p>We use cookies to:</p>
                            <ul>
                                <li>Remember your language preferences.</li>
                                <li>Analyze site traffic to improve user experience.</li>
                                <li>Ensure the proper functioning of the site.</li>
                            </ul>

                            <h2>3. How to Control Cookies</h2>
                            <p>You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
