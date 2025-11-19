
export type Language = 'en' | 'es';

const services = [
    {
      id: 'management',
      icon: 'Briefcase',
      title: {
        es: 'Gestión y Dirección de SPAs',
        en: 'SPA Management and Direction',
      },
      features: {
        es: [
          'Planificación estratégica',
          'Optimización de operaciones',
          'Gestión de equipos',
          'Control de calidad',
        ],
        en: [
          'Strategic planning',
          'Operations optimization',
          'Team management',
          'Quality control',
        ],
      },
    },
    {
      id: 'revenue',
      icon: 'TrendingUp',
      title: {
        es: 'Consultoría en Revenue Management',
        en: 'Revenue Management Consulting',
      },
      features: {
        es: [
          'Estrategias de precios dinámicos',
          'Análisis de KPIs',
          'Optimización de ocupación',
          'Desarrollo de paquetes premium',
        ],
        en: [
          'Dynamic pricing strategies',
          'KPI analysis',
          'Occupancy optimization',
          'Premium package development',
        ],
      },
    },
    {
      id: 'training',
      icon: 'Users',
      title: {
        es: 'Formación y Desarrollo',
        en: 'Training and Development',
      },
      features: {
        es: [
          'Capacitación personalizada',
          'Técnicas de venta consultiva',
          'Protocolos de atención al cliente',
          'Desarrollo de liderazgo',
        ],
        en: [
          'Customized training',
          'Consultative selling techniques',
          'Customer service protocols',
          'Leadership development',
        ],
      },
    },
    {
      id: 'projects',
      icon: 'Rocket',
      title: {
        es: 'Lanzamiento de Proyectos Wellness',
        en: 'Wellness Project Launches',
      },
      features: {
        es: [
          'Diseño conceptual',
          'Selección de equipamiento',
          'Desarrollo de carta de servicios',
          'Estrategia de marketing',
        ],
        en: [
          'Conceptual design',
          'Equipment selection',
          'Service menu development',
          'Marketing strategy',
        ],
      },
    },
];

const portfolio = [
    {
      id: 'p1',
      category: 'luxury',
      image: 'portfolio-1',
      title: { es: 'Resort de Lujo en Marbella', en: 'Luxury Resort in Marbella' },
      description: {
        es: 'Consultoría integral para el spa de un hotel 5 estrellas.',
        en: 'Comprehensive consulting for a 5-star hotel spa.',
      },
      results: {
        es: 'Aumento del 30% en ingresos en el primer año.',
        en: '30% increase in revenue in the first year.',
      },
    },
    {
      id: 'p2',
      category: 'urban',
      image: 'portfolio-2',
      title: { es: 'Spa Urbano Boutique en Madrid', en: 'Boutique Urban Spa in Madrid' },
      description: {
        es: 'Lanzamiento y posicionamiento en el mercado.',
        en: 'Market launch and positioning.',
      },
      results: {
        es: 'Ocupación del 85% en los primeros 6 meses.',
        en: '85% occupancy in the first 6 months.',
      },
    },
    {
      id: 'p3',
      category: 'resorts',
      image: 'portfolio-3',
      title: { es: 'Wellness Resort en Islas Canarias', en: 'Wellness Resort in Canary Islands' },
      description: {
        es: 'Rediseño de la carta de servicios y formación del equipo.',
        en: 'Redesign of the service menu and team training.',
      },
      results: {
        es: 'Mejora del 40% en la satisfacción del cliente.',
        en: '40% improvement in customer satisfaction.',
      },
    },
    {
      id: 'p4',
      category: 'wellness',
      image: 'portfolio-4',
      title: { es: 'Centro de Bienestar Holístico', en: 'Holistic Wellness Center' },
      description: {
        es: 'Desarrollo del concepto y plan de negocio.',
        en: 'Concept development and business plan.',
      },
      results: {
        es: 'Financiación asegurada y apertura exitosa.',
        en: 'Secured funding and successful opening.',
      },
    },
    {
        id: 'p5',
        category: 'luxury',
        image: 'portfolio-5',
        title: { es: 'Hotel Histórico en Lisboa', en: 'Historic Hotel in Lisbon' },
        description: {
          es: 'Optimización de Revenue Management para el área de spa.',
          en: 'Revenue Management optimization for the spa area.',
        },
        results: {
          es: 'Incremento del RevPATT (Revenue Per Available Treatment Time) en un 25%.',
          en: '25% increase in RevPATT (Revenue Per Available Treatment Time).',
        },
    },
    {
        id: 'p6',
        category: 'urban',
        image: 'portfolio-6',
        title: { es: 'Day Spa en Barcelona', en: 'Day Spa in Barcelona' },
        description: {
            es: 'Implementación de nuevo software de gestión y protocolos.',
            en: 'Implementation of new management software and protocols.',
        },
        results: {
            es: 'Reducción de costes operativos en un 15%.',
            en: '15% reduction in operational costs.',
        },
    }
];

const testimonials = [
    {
      id: 't1',
      image: 'testimonial-1',
      name: 'Carlos Rodríguez',
      company: { es: 'Director General, Hotel Lujo Mar', en: 'General Manager, Hotel Lujo Mar' },
      quote: {
        es: 'La experiencia de Eva ha sido fundamental para transformar nuestro spa. Su visión estratégica y conocimiento del sector son inigualables.',
        en: "Eva's experience has been fundamental in transforming our spa. Her strategic vision and industry knowledge are unparalleled.",
      },
    },
    {
      id: 't2',
      image: 'testimonial-2',
      name: 'Ana García',
      company: { es: 'Propietaria, Urban Bliss Spa', en: 'Owner, Urban Bliss Spa' },
      quote: {
        es: 'Gracias a Eva, lanzamos nuestro spa con éxito y superamos nuestros objetivos de negocio en el primer trimestre. Una profesional excepcional.',
        en: 'Thanks to Eva, we successfully launched our spa and exceeded our business goals in the first quarter. An exceptional professional.',
      },
    },
    {
      id: 't3',
      image: 'testimonial-3',
      name: 'Michael Schmidt',
      company: { es: 'VP Operaciones, Paradise Resorts', en: 'VP Operations, Paradise Resorts' },
      quote: {
        es: 'La formación de Eva para nuestros equipos ha elevado nuestro estándar de servicio a un nuevo nivel. Los resultados son evidentes en la satisfacción de los clientes.',
        en: "Eva's training for our teams has elevated our service standard to a new level. The results are evident in customer satisfaction.",
      },
    },
];

const blog = [
    {
        id: 'b1',
        image: 'blog-1',
        category: { es: 'Gestión', en: 'Management' },
        title: { es: '10 KPIs esenciales para gestionar un SPA exitoso', en: '10 Essential KPIs for Managing a Successful SPA' },
        excerpt: { es: 'Descubre los indicadores clave que te ayudarán a medir y mejorar el rendimiento de tu negocio de bienestar.', en: 'Discover the key performance indicators that will help you measure and improve your wellness business performance.'},
        readingTime: { es: '8 min de lectura', en: '8 min read' },
        date: '2024-05-15',
    },
    {
        id: 'b2',
        image: 'blog-2',
        category: { es: 'Revenue', en: 'Revenue' },
        title: { es: 'Cómo implementar Revenue Management en tu área wellness', en: 'How to Implement Revenue Management in Your Wellness Area' },
        excerpt: { es: 'Una guía práctica para aplicar estrategias de precios dinámicos y optimizar tus ingresos.', en: 'A practical guide to applying dynamic pricing strategies and optimizing your revenue.'},
        readingTime: { es: '12 min de lectura', en: '12 min read' },
        date: '2024-04-22',
    },
    {
        id: 'b3',
        image: 'blog-3',
        category: { es: 'Tendencias', en: 'Trends' },
        title: { es: 'Tendencias wellness 2024 en hotelería de lujo', en: 'Wellness Trends 2024 in Luxury Hospitality' },
        excerpt: { es: 'Exploramos las innovaciones que están marcando el futuro de los spas en hoteles de alta gama.', en: 'We explore the innovations that are shaping the future of spas in high-end hotels.'},
        readingTime: { es: '7 min de lectura', en: '7 min read' },
        date: '2024-03-30',
    },
    {
        id: 'b4',
        image: 'blog-4',
        category: { es: 'Experiencia Cliente', en: 'Customer Experience' },
        title: { es: 'El arte de crear experiencias memorables en el SPA', en: 'The Art of Creating Memorable SPA Experiences' },
        excerpt: { es: 'Más allá de los tratamientos, aprende a diseñar un viaje inolvidable para tus clientes.', en: 'Beyond treatments, learn to design an unforgettable journey for your clients.'},
        readingTime: { es: '9 min de lectura', en: '9 min read' },
        date: '2024-02-18',
    }
];

const linkedin = {
    title: { es: "SPA & Wellness Project Manager – Especialista en Optimización de Ingresos", en: "SPA & Wellness Project Manager – Revenue Optimization Specialist"},
    location: { es: "España", en: "Spain" },
    experience: [
        {
            title: {es: "Consultora Wellness Independiente", en: "Independent Wellness Consultant"},
            company: {es: "Autónoma", en: "Freelance"},
            period: {es: "2018 - Presente", en: "2018 - Present"}
        },
        {
            title: {es: "Spa Manager", en: "Spa Manager"},
            company: {es: "Cadena Hotelera de Lujo", en: "Luxury Hotel Chain"},
            period: {es: "2010 - 2018", en: "2010 - 2018"}
        }
    ],
    education: [
        {
            degree: {es: "Máster en Dirección Hotelera", en: "Master in Hotel Management"},
            school: {es: "Escuela de Hostelería Internacional", en: "International Hospitality School"}
        }
    ],
    skills: {
        es: ["Revenue Management", "Gestión de SPAs", "Liderazgo de Equipos", "Lanzamiento de Proyectos", "Estrategia de Negocio"],
        en: ["Revenue Management", "SPA Management", "Team Leadership", "Project Launch", "Business Strategy"]
    }
}

const resources = [
    { id: 'r1', title: { es: "Guía de Revenue Management para SPAs", en: "Revenue Management Guide for SPAs" } },
    { id: 'r2', title: { es: "Checklist de Excelencia en Servicio", en: "Service Excellence Checklist" } },
    { id: 'r3', title: { es: "Plantilla de Plan de Negocio para SPAs", en: "SPA Business Plan Template" } },
];

const processData = (lang: Language) => ({
    services: services.map(s => ({...s, title: s.title[lang], features: s.features[lang]})),
    portfolio: portfolio.map(p => ({...p, title: p.title[lang], description: p.description[lang], results: p.results[lang]})),
    testimonials: testimonials.map(t => ({...t, company: t.company[lang], quote: t.quote[lang]})),
    blog: blog.map(b => ({...b, category: b.category[lang], title: b.title[lang], excerpt: b.excerpt[lang], readingTime: b.readingTime[lang]})),
    linkedin: {
        title: linkedin.title[lang],
        location: linkedin.location[lang],
        experience: linkedin.experience.map(e => ({
            title: e.title[lang],
            company: e.company[lang],
            period: e.period[lang]
        })),
        education: linkedin.education.map(e => ({
            degree: e.degree[lang],
            school: e.school[lang]
        })),
        skills: linkedin.skills[lang]
    },
    resources: resources.map(r => ({...r, title: r.title[lang]}))
});

export const data = {
    es: processData('es'),
    en: processData('en'),
};
