import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function TermsAndConditionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl font-bold mb-8">Términos y Condiciones / Terms and Conditions</h1>
                    <div className="prose lg:prose-lg max-w-none text-foreground/80">
                        <h2>1. Aceptación de los Términos</h2>
                        <p>Al acceder y utilizar este sitio web, aceptas y estás de acuerdo con estar sujeto a los términos y provisiones de este acuerdo.</p>
                        <p className="mt-2 text-sm italic">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                        <h2 className="mt-8">2. Uso del Sitio</h2>
                        <p>Este sitio y su contenido son para tu uso personal y no comercial. No puedes modificar, copiar, distribuir, transmitir, mostrar, realizar, reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender ninguna información obtenida de este sitio.</p>
                        <p className="mt-2 text-sm italic">This site and its content are for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from this site.</p>

                        <h2 className="mt-8">3. Propiedad Intelectual</h2>
                        <p>El contenido de este sitio, incluyendo texto, gráficos, logos e imágenes, es de nuestra propiedad y está protegido por leyes de derechos de autor.</p>
                        <p className="mt-2 text-sm italic">The content on this site, including text, graphics, logos, and images, is our property and is protected by copyright laws.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
