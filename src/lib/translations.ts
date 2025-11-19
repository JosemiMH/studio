import { data } from '@/lib/data';
import type { Language } from '@/lib/data';

const es = {
    nav: {
        about: "Sobre mí",
        services: "Servicios",
        ai_wellness: "IA & Wellness",
        portfolio: "Portfolio",
        testimonials: "Testimonios",
        blog: "Blog",
        contact: "Contacto",
    },
    hero: {
        stat: "Más de 20 años de experiencia en el sector wellness de lujo",
        title: "Asesoro a hoteles en la transformación de su área de Wellness en un motor de crecimiento estratégico.",
        subtitle: "Especialista en revenue management, optimización de operaciones y formación de equipos de alto rendimiento para spas y centros wellness en hoteles de lujo.",
        cta_services: "Descubre mis servicios",
        cta_contact: "Contactar",
    },
    about: {
        title: "Eva Pérez",
        subtitle: "Gerente de Proyectos SPA & Wellness – Especialista en Optimización de Ingresos",
        p1: "Con más de veinte años de experiencia liderando operaciones en el sector wellness de lujo, he dedicado mi carrera a transformar spas y áreas de bienestar en centros de alta rentabilidad y excelencia operativa. Mi enfoque combina la gestión estratégica con una profunda pasión por crear experiencias inolvidables para el cliente.",
        p2: "Como consultora, colaboro con hoteles y resorts de prestigio para optimizar sus ingresos, desarrollar equipos de alto rendimiento y lanzar proyectos wellness innovadores. Soy una firme creyente en el poder de los datos, la formación continua y un liderazgo cercano para alcanzar resultados excepcionales.",
        cta_contact: "Hablemos de tu proyecto",
        cta_portfolio: "Ver mi trabajo",
        stats: {
            experience: "Años de experiencia",
            projects: "Proyectos completados",
            conferences: "Conferencias",
            professionals: "Profesionales formados",
            countries: "Países",
            attendees: "Asistentes a eventos",
        }
    },
    services: {
        title: "Servicios de Consultoría Wellness",
        subtitle: "Soluciones estratégicas para potenciar el éxito de tu spa o centro de bienestar.",
        cta: "Más información",
        list: [
            {
                id: "spa-management",
                icon: "Briefcase",
                title: "Gestión y Dirección de SPAs",
                features: ["Planificación estratégica", "Optimización de operaciones", "Gestión de equipos", "Control de calidad y estándares"]
            },
            {
                id: "revenue-management",
                icon: "TrendingUp",
                title: "Consultoría en Revenue Management",
                features: ["Estrategias de precios dinámicos", "Análisis de KPIs", "Optimización de ocupación", "Desarrollo de paquetes premium"]
            },
            {
                id: "training-development",
                icon: "Users",
                title: "Formación y Desarrollo",
                features: ["Capacitación personalizada", "Técnicas de venta consultiva", "Protocolos de atención al cliente", "Desarrollo de liderazgo"]
            },
            {
                id: "project-launch",
                icon: "Rocket",
                title: "Lanzamiento de Proyectos Wellness",
                features: ["Diseño conceptual", "Selección de equipamiento", "Desarrollo de carta de servicios", "Estrategia de marketing"]
            }
        ]
    },
    ai_wellness: {
        title: "Inteligencia Artificial aplicada al Sector Wellness",
        content: "La IA está revolucionando la personalización, eficiencia y rentabilidad en el sector wellness. Desde la gestión de reservas hasta la creación de experiencias de cliente hiper-personalizadas, la IA ofrece un océano de oportunidades para los spas y centros de bienestar que deseen liderar el mercado.",
        benefits_title: "Beneficios de implementar IA:",
        benefits: ["Optimización de la gestión de citas y recursos", "Análisis predictivo de la demanda", "Personalización de tratamientos y recomendaciones", "Automatización de la comunicación con el cliente"],
        cta: "Solicita una consultoría de IA"
    },
    cta_section: {
        title: "¿Listo para llevar tu negocio wellness al siguiente nivel?",
        cta: "Contacta conmigo"
    },
    portfolio: {
        title: "Portfolio de Proyectos Destacados",
        subtitle: "Una selección de colaboraciones exitosas que han generado crecimiento y excelencia.",
        categories: {
            all: "Todos",
            luxury: "Hoteles de Lujo",
            urban: "Spas Urbanos",
            resorts: "Resorts",
            wellness: "Centros Wellness"
        },
        projects: [
            { id: 1, title: "Optimización de Spa en Hotel 5 Estrellas", category: "luxury", description: "Reestructuración completa de la carta de servicios y estrategia de precios.", image: "project-1", results: "Aumento del 30% en ingresos en 6 meses." },
            { id: 2, title: "Lanzamiento de Spa Urbano Boutique", category: "urban", description: "Concepto, diseño y estrategia de lanzamiento para un nuevo spa en el centro de la ciudad.", image: "project-2", results: "Tasa de ocupación del 85% en el primer año." },
            { id: 3, title: "Programa Wellness para Resort de Playa", category: "resorts", description: "Creación de un programa de bienestar integral incluyendo yoga, meditación y nutrición.", image: "project-3", results: "Incremento del 25% en la estancia media de los huéspedes." },
            { id: 4, title: "Consultoría para Centro Wellness Holístico", category: "wellness", description: "Asesoramiento en la expansión de servicios y captación de nuevos mercados.", image: "project-4", results: "Expansión a dos nuevas ubicaciones en 18 meses." },
            { id: 5, title: "Revenue Management para Cadena Hotelera", category: "luxury", description: "Implementación de sistema de precios dinámicos en 10 propiedades.", image: "project-5", results: "Aumento del RevPAR en un 18% a nivel de cadena." },
            { id: 6, title: "Formación de Equipo en Resort de Lujo", category: "resorts", description: "Programa intensivo de 3 meses en ventas y atención al cliente para 50 empleados.", image: "project-6", results: "Mejora del 40% en las puntuaciones de satisfacción del cliente." },
        ]
    },
    testimonials: {
        title: "Lo que dicen mis clientes",
        subtitle: "Historias de éxito de líderes de la industria que han confiado en mi experiencia.",
        items: [
            { id: 1, name: "Carlos Méndez", company: "Director, Gran Hotel Lujo", quote: "La visión de Eva fue clave para revitalizar nuestro spa. Sus estrategias de revenue management son simplemente brillantes.", image: "testimonial-1" },
            { id: 2, name: "Laura Fernández", company: "CEO, Urban Oasis Spa", quote: "Gracias a Eva, lanzamos nuestro concepto con éxito y superamos todos los objetivos del primer año. Es una verdadera líder.", image: "testimonial-2" },
            { id: 3, name: "Javier Ríos", company: "Gerente General, Paradise Resort", quote: "El programa de formación que diseñó para nuestro equipo transformó la experiencia de nuestros huéspedes.", image: "testimonial-3" },
            { id: 4, name: "Sofía Navarro", company: "Fundadora, Alma Wellness Center", quote: "Su consultoría nos dio la claridad y la estrategia que necesitábamos para crecer de forma sostenible.", image: "testimonial-4" },
            { id: 5, name: "David Chen", company: "VP de Operaciones, Majestic Hotels", quote: "Eva tiene una capacidad única para identificar oportunidades de crecimiento y movilizar equipos. La recomiendo sin reservas.", image: "testimonial-5" },
        ]
    },
    blog: {
        title: "Desde mi Blog",
        subtitle: "Análisis, tendencias y estrategias sobre la gestión del negocio wellness.",
        read_more: "Leer más",
        posts: [
            { id: 1, image: "blog-1", category: "Gestión", date: "2024-05-15", title: "10 KPIs esenciales para gestionar un SPA exitoso", excerpt: "Descubre los indicadores clave de rendimiento que todo manager de spa debe monitorizar para asegurar la rentabilidad y la excelencia operativa.", readingTime: "7 min" },
            { id: 2, image: "blog-2", category: "Revenue", date: "2024-04-22", title: "Cómo implementar Revenue Management en tu área wellness", excerpt: "Una guía paso a paso para aplicar estrategias de precios dinámicos y optimización de la ocupación en tu spa.", readingTime: "9 min" },
            { id: 3, image: "blog-3", category: "Tendencias", date: "2024-03-30", title: "Tendencias wellness 2024 en hotelería de lujo", excerpt: "Desde la hiper-personalización hasta los retiros de bienestar mental, exploramos las tendencias que están definiendo el futuro.", readingTime: "6 min" },
            { id: 4, image: "blog-4", category: "Experiencia Cliente", date: "2024-02-18", title: "El arte de crear experiencias memorables en el SPA", excerpt: "Pequeños detalles que marcan grandes diferencias y convierten una visita en una experiencia inolvidable para tus clientes.", readingTime: "5 min" },
        ]
    },
    linkedin: {
        title: "Mi Perfil Profesional",
        view_profile: "Ver perfil en LinkedIn",
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades Principales",
        data: {
            title: "Gerente de Proyectos SPA & Wellness | Especialista en Optimización de Ingresos",
            location: "España",
            experience: [
                { title: "Consultora Wellness & Spa", company: "Autónoma", period: "2018 - Presente" },
                { title: "Spa Manager", company: "Cadena de Hoteles de Lujo Internacional", period: "2010 - 2018" },
                { title: "Directora de Spa", company: "Hotel Boutique 5*", period: "2005 - 2010" }
            ],
            education: [
                { degree: "Máster en Dirección de Empresas Hoteleras", school: "Escuela de Negocios Internacional" },
                { degree: "Certificación Internacional en Gestión de Spa", school: "Wellness Institute" }
            ],
            skills: ["Revenue Management", "Gestión de Operaciones", "Liderazgo de Equipos", "Estrategia de Marketing", "Lanzamiento de Proyectos", "Formación y Desarrollo", "Atención al Cliente de Lujo", "Análisis de KPIs"]
        }
    },
    resources: {
        title: "Recursos Gratuitos",
        subtitle: "Descarga estas herramientas para empezar a optimizar tu negocio wellness hoy mismo.",
        name: "Nombre",
        email: "Email",
        download: "Descargar ahora",
        items: [
            { title: "Guía completa de Revenue Management para SPAs" },
            { title: "Checklist de Excelencia en Servicio Wellness" },
            { title: "Plantilla de Plan de Negocio para SPAs" }
        ]
    },
    contact: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente o quieres más información? No dudes en contactarme.",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono (Opcional)",
        company: "Empresa (Opcional)",
        message: "Tu mensaje",
        privacy_consent_text: "Acepto la",
        submit: "Enviar Mensaje",
        info_email: "eperez@asetrabalnearios.com",
        info_location: "España"
    },
    newsletter: {
        title: "Suscríbete a mi Newsletter",
        subtitle: "Recibe mensualmente análisis, tendencias y estrategias directamente en tu correo.",
        email: "Tu dirección de email",
        subscribe: "Suscribirme"
    },
    footer: {
        tagline: "Transformando el wellness en crecimiento estratégico.",
        quick_links: "Enlaces rápidos",
        legal: "Legal",
        privacy_policy: "Política de Privacidad",
        terms: "Términos y Condiciones",
        cookies: "Política de Cookies",
        copyright: "Eva Pérez. Todos los derechos reservados."
    },
    appointment: {
        title: "Reservar una Cita",
        subtitle: "Selecciona un servicio y un horario para agendar una consulta inicial.",
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono (Opcional)",
        message: "Mensaje adicional (Opcional)",
        select_service: "Selecciona un servicio",
        select_time: "Selecciona una hora",
        book: "Reservar Cita",
        success_title: "¡Cita Reservada!",
        success_message: "Tu cita ha sido agendada. Recibirás una confirmación por correo electrónico en breve."
    },
    chatbot: {
        welcome: "¡Hola! Soy el asistente virtual de Eva Pérez. ¿En qué puedo ayudarte hoy? Puedo darte información sobre sus servicios de consultoría, experiencia o cómo la IA está transformando el sector wellness.",
        placeholder: "Escribe tu pregunta aquí...",
        suggestions: ["¿Qué servicios ofrece?", "¿Qué es Revenue Management?", "IA en spas"]
    },
    cookie_banner: {
        message: "Utilizamos cookies para asegurar que te damos la mejor experiencia en nuestro sitio web. Para más información, consulta nuestra",
        accept: "Aceptar",
        decline: "Rechazar"
    }
};

const en = {
    nav: {
        about: "About",
        services: "Services",
        ai_wellness: "AI & Wellness",
        portfolio: "Portfolio",
        testimonials: "Testimonials",
        blog: "Blog",
        contact: "Contact",
    },
    hero: {
        stat: "Over 20 years of experience in the luxury wellness sector",
        title: "I advise hotels on transforming their Wellness area into an engine of strategic growth.",
        subtitle: "Specialist in revenue management, operations optimization, and high-performance team training for spas and wellness centers in luxury hotels.",
        cta_services: "Discover my services",
        cta_contact: "Contact me",
    },
    about: {
        title: "Eva Pérez",
        subtitle: "SPA & Wellness Project Manager – Revenue Optimization Specialist",
        p1: "With over twenty years of experience leading operations in the luxury wellness sector, I have dedicated my career to transforming spas and wellness areas into centers of high profitability and operational excellence. My approach combines strategic management with a deep passion for creating unforgettable customer experiences.",
        p2: "As a consultant, I collaborate with prestigious hotels and resorts to optimize their revenue, develop high-performance teams, and launch innovative wellness projects. I am a firm believer in the power of data, continuous training, and close leadership to achieve exceptional results.",
        cta_contact: "Let's talk about your project",
        cta_portfolio: "See my work",
        stats: {
            experience: "Years of experience",
            projects: "Projects completed",
            conferences: "Conferences",
            professionals: "Professionals trained",
            countries: "Countries",
            attendees: "Event attendees",
        }
    },
    services: {
        title: "Wellness Consulting Services",
        subtitle: "Strategic solutions to boost the success of your spa or wellness center.",
        cta: "More information",
        list: [
            {
                id: "spa-management",
                icon: "Briefcase",
                title: "SPA Management and Direction",
                features: ["Strategic planning", "Operations optimization", "Team management", "Quality control and standards"]
            },
            {
                id: "revenue-management",
                icon: "TrendingUp",
                title: "Revenue Management Consulting",
                features: ["Dynamic pricing strategies", "KPI analysis", "Occupancy optimization", "Premium package development"]
            },
            {
                id: "training-development",
                icon: "Users",
                title: "Training and Development",
                features: ["Customized training programs", "Consultative selling techniques", "Customer service protocols", "Leadership development"]
            },
            {
                id: "project-launch",
                icon: "Rocket",
                title: "Wellness Project Launches",
                features: ["Conceptual design", "Equipment selection", "Service menu development", "Marketing strategy"]
            }
        ]
    },
    ai_wellness: {
        title: "Artificial Intelligence applied to the Wellness Sector",
        content: "AI is revolutionizing personalization, efficiency, and profitability in the wellness sector. From reservation management to creating hyper-personalized customer experiences, AI offers an ocean of opportunities for spas and wellness centers that want to lead the market.",
        benefits_title: "Benefits of implementing AI:",
        benefits: ["Optimization of appointment and resource management", "Predictive demand analysis", "Personalization of treatments and recommendations", "Automation of customer communication"],
        cta: "Request an AI consultation"
    },
    cta_section: {
        title: "Ready to take your wellness business to the next level?",
        cta: "Contact me"
    },
    portfolio: {
        title: "Featured Projects Portfolio",
        subtitle: "A selection of successful collaborations that have generated growth and excellence.",
        categories: {
            all: "All",
            luxury: "Luxury Hotels",
            urban: "Urban Spas",
            resorts: "Resorts",
            wellness: "Wellness Centers"
        },
        projects: [
            { id: 1, title: "Spa Optimization in a 5-Star Hotel", category: "luxury", description: "Complete restructuring of the service menu and pricing strategy.", image: "project-1", results: "30% increase in revenue in 6 months." },
            { id: 2, title: "Launch of a Boutique Urban Spa", category: "urban", description: "Concept, design, and launch strategy for a new spa in the city center.", image: "project-2", results: "85% occupancy rate in the first year." },
            { id: 3, title: "Wellness Program for a Beach Resort", category: "resorts", description: "Creation of a comprehensive wellness program including yoga, meditation, and nutrition.", image: "project-3", results: "25% increase in the average guest stay." },
            { id: 4, title: "Consulting for a Holistic Wellness Center", category: "wellness", description: "Advice on service expansion and attracting new markets.", image: "project-4", results: "Expansion to two new locations in 18 months." },
            { id: 5, title: "Revenue Management for a Hotel Chain", category: "luxury", description: "Implementation of a dynamic pricing system in 10 properties.", image: "project-5", results: "18% increase in RevPAR chain-wide." },
            { id: 6, title: "Team Training at a Luxury Resort", category: "resorts", description: "An intensive 3-month program in sales and customer service for 50 employees.", image: "project-6", results: "40% improvement in customer satisfaction scores." },
        ]
    },
    testimonials: {
        title: "What my clients say",
        subtitle: "Success stories from industry leaders who have trusted my expertise.",
        items: [
            { id: 1, name: "Carlos Méndez", company: "Director, Grand Hotel Lujo", quote: "Eva's vision was key to revitalizing our spa. Her revenue management strategies are simply brilliant.", image: "testimonial-1" },
            { id: 2, name: "Laura Fernández", company: "CEO, Urban Oasis Spa", quote: "Thanks to Eva, we successfully launched our concept and exceeded all our first-year goals. She is a true leader.", image: "testimonial-2" },
            { id: 3, name: "Javier Ríos", company: "General Manager, Paradise Resort", quote: "The training program she designed for our team transformed our guest experience.", image: "testimonial-3" },
            { id: 4, name: "Sofía Navarro", company: "Founder, Alma Wellness Center", quote: "Her consulting gave us the clarity and strategy we needed to grow sustainably.", image: "testimonial-4" },
            { id: 5, name: "David Chen", company: "VP of Operations, Majestic Hotels", quote: "Eva has a unique ability to identify growth opportunities and mobilize teams. I recommend her without reservation.", image: "testimonial-5" },
        ]
    },
    blog: {
        title: "From my Blog",
        subtitle: "Analysis, trends, and strategies on wellness business management.",
        read_more: "Read more",
        posts: [
            { id: 1, image: "blog-1", category: "Management", date: "2024-05-15", title: "10 essential KPIs to manage a successful SPA", excerpt: "Discover the key performance indicators that every spa manager should monitor to ensure profitability and operational excellence.", readingTime: "7 min" },
            { id: 2, image: "blog-2", category: "Revenue", date: "2024-04-22", title: "How to implement Revenue Management in your wellness area", excerpt: "A step-by-step guide to applying dynamic pricing and occupancy optimization strategies in your spa.", readingTime: "9 min" },
            { id: 3, image: "blog-3", category: "Trends", date: "2024-03-30", title: "Wellness trends 2024 in luxury hotels", excerpt: "From hyper-personalization to mental wellness retreats, we explore the trends that are defining the future.", readingTime: "6 min" },
            { id: 4, image: "blog-4", category: "Customer Experience", date: "2024-02-18", title: "The art of creating memorable experiences in the SPA", excerpt: "Small details that make big differences and turn a visit into an unforgettable experience for your clients.", readingTime: "5 min" },
        ]
    },
    linkedin: {
        title: "My Professional Profile",
        view_profile: "View profile on LinkedIn",
        experience: "Experience",
        education: "Education",
        skills: "Main Skills",
        data: {
            title: "SPA & Wellness Project Manager | Revenue Optimization Specialist",
            location: "Spain",
            experience: [
                { title: "Wellness & Spa Consultant", company: "Freelance", period: "2018 - Present" },
                { title: "Spa Manager", company: "International Luxury Hotel Chain", period: "2010 - 2018" },
                { title: "Spa Director", company: "5* Boutique Hotel", period: "2005 - 2010" }
            ],
            education: [
                { degree: "Master's in Hotel Business Management", school: "International Business School" },
                { degree: "International Certification in Spa Management", school: "Wellness Institute" }
            ],
            skills: ["Revenue Management", "Operations Management", "Team Leadership", "Marketing Strategy", "Project Launch", "Training & Development", "Luxury Customer Service", "KPI Analysis"]
        }
    },
    resources: {
        title: "Free Resources",
        subtitle: "Download these tools to start optimizing your wellness business today.",
        name: "Name",
        email: "Email",
        download: "Download now",
        items: [
            { title: "Complete Guide to Revenue Management for SPAs" },
            { title: "Checklist for Excellence in Wellness Service" },
            { title: "Business Plan Template for SPAs" }
        ]
    },
    contact: {
        title: "Contact",
        subtitle: "Have a project in mind or want more information? Do not hesitate to contact me.",
        name: "Name",
        email: "Email",
        phone: "Phone (Optional)",
        company: "Company (Optional)",
        message: "Your message",
        privacy_consent_text: "I accept the",
        submit: "Send Message",
        info_email: "eperez@asetrabalnearios.com",
        info_location: "Spain"
    },
    newsletter: {
        title: "Subscribe to my Newsletter",
        subtitle: "Receive monthly analysis, trends, and strategies directly in your inbox.",
        email: "Your email address",
        subscribe: "Subscribe"
    },
    footer: {
        tagline: "Transforming wellness into strategic growth.",
        quick_links: "Quick Links",
        legal: "Legal",
        privacy_policy: "Privacy Policy",
        terms: "Terms & Conditions",
        cookies: "Cookie Policy",
        copyright: "Eva Pérez. All rights reserved."
    },
    appointment: {
        title: "Book an Appointment",
        subtitle: "Select a service and time to schedule an initial consultation.",
        name: "Full name",
        email: "Email",
        phone: "Phone (Optional)",
        message: "Additional message (Optional)",
        select_service: "Select a service",
        select_time: "Select a time",
        book: "Book Appointment",
        success_title: "Appointment Booked!",
        success_message: "Your appointment has been scheduled. You will receive a confirmation by email shortly."
    },
    chatbot: {
        welcome: "Hello! I'm Eva Pérez's virtual assistant. How can I help you today? I can give you information about her consulting services, experience, or how AI is transforming the wellness sector.",
        placeholder: "Write your question here...",
        suggestions: ["What services do you offer?", "What is Revenue Management?", "AI in spas"]
    },
    cookie_banner: {
        message: "We use cookies to ensure that we give you the best experience on our website. For more information, please see our",
        accept: "Accept",
        decline: "Decline"
    }
};

export const translations = { es, en };

export type AllTranslations = typeof translations;

type NestedKey<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${'' extends NestedKey<T[K]> ? '' : '.'}${NestedKey<T[K]>}`;
    }[keyof T]
  : '';
  
export type TranslationKeys = NestedKey<typeof es>;
