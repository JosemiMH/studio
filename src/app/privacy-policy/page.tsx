
"use client";

import { useLanguage } from '@/contexts/language-context';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function PrivacyPolicyPage() {
    const { footer } = useLanguage().translations;
    const { language } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl font-bold mb-8">{footer.privacy_policy}</h1>
                    {language === 'es' ? (
                        <div className="prose lg:prose-lg max-w-none text-foreground/80">
                            <h2>1. Introducción</h2>
                            <p>Bienvenido a nuestra política de privacidad. Tu privacidad es importante para nosotros. Esta política explica qué datos personales recopilamos y cómo los usamos.</p>

                            <h2>2. Datos que Recopilamos</h2>
                            <p>Recopilamos información que nos proporcionas directamente, como tu nombre y correo electrónico cuando te suscribes a nuestro boletín o nos contactas a través de nuestro formulario.</p>

                            <h2>3. Cómo Usamos Tus Datos</h2>
                            <p>Usamos tus datos para:</p>
                            <ul>
                                <li>Proporcionar y mejorar nuestros servicios.</li>
                                <li>Comunicarnos contigo sobre tus solicitudes o citas.</li>
                                <li>Enviarte nuestro boletín si te has suscrito.</li>
                            </ul>

                            <h2>4. Tus Derechos</h2>
                            <p>Tienes derecho a acceder, corregir o eliminar tus datos personales. Contáctanos para ejercer estos derechos.</p>
                        </div>
                    ) : (
                        <div className="prose lg:prose-lg max-w-none text-foreground/80">
                            <h2>1. Introduction</h2>
                            <p>Welcome to our privacy policy. Your privacy is important to us. This policy explains what personal data we collect and how we use it.</p>

                            <h2>2. Data We Collect</h2>
                            <p>We collect information you provide directly to us, such as your name and email when you subscribe to our newsletter or contact us through our form.</p>

                            <h2>3. How We Use Your Data</h2>
                            <p>We use your data to:</p>
                            <ul>
                                <li>Provide and improve our services.</li>
                                <li>Communicate with you about your requests or appointments.</li>
                                <li>Send you our newsletter if you have subscribed.</li>
                            </ul>

                            <h2>4. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
