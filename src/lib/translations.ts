
import { data } from '@/lib/data';
import type { Language } from '@/lib/data';

const es = {
  nav: {
    about: 'Sobre mí',
    services: 'Servicios',
    ai_wellness: 'IA & Wellness',
    portfolio: 'Portfolio',
    testimonials: 'Testimonios',
    blog: 'Blog',
    contact: 'Contacto',
  },
  hero: {
    title: 'Asesoro a hoteles en la transformación de su área de Wellness en un motor de crecimiento estratégico',
    subtitle: 'Con más de 20 años de experiencia en la gestión de Spas de lujo y optimización de ingresos.',
    stat: '20+ años de experiencia',
    cta_services: 'Descubre mis servicios',
    cta_contact: 'Contactar',
  },
  about: {
    title: "Sobre Eva Pérez",
    subtitle: "SPA & Wellness Project Manager – Revenue Optimization Specialist",
    p1: "Con más de 20 años de dedicación al sector wellness de lujo, he liderado la conceptualización, apertura y gestión de spas en prestigiosos hoteles a nivel internacional. Mi pasión es transformar áreas de bienestar en unidades de negocio rentables y memorables.",
    p2: "Mi enfoque se centra en la optimización de ingresos (Revenue Management), la formación de equipos de alto rendimiento y la creación de experiencias de cliente excepcionales. Soy una estratega que une la excelencia operativa con una visión de negocio innovadora.",
    stats: {
        experience: 'Años de experiencia',
        projects: 'Proyectos completados',
        conferences: 'Conferencias impartidas',
        professionals: 'Profesionales formados',
        countries: 'Países trabajados',
        attendees: 'Asistentes a eventos'
    },
    cta_contact: "Hablemos",
    cta_portfolio: "Ver mi trabajo"
  },
  services: {
    title: 'Mis Servicios',
    subtitle: 'Soluciones integrales para potenciar tu negocio de bienestar.',
    list: data.es.services,
    cta: 'Más información',
  },
  ai_wellness: {
    title: 'Inteligencia Artificial aplicada al Sector Wellness',
    content: "La IA está revolucionando la personalización, eficiencia y gestión en el mundo del bienestar. Desde chatbots que mejoran la atención al cliente hasta análisis predictivos para optimizar la ocupación, la IA es el nuevo aliado estratégico para los líderes del sector.",
    benefits_title: "Beneficios Clave:",
    benefits: [
        "Personalización de experiencias de cliente a gran escala.",
        "Optimización de precios y disponibilidad en tiempo real.",
        "Automatización de tareas administrativas y de reservas.",
        "Análisis de datos para la toma de decisiones estratégicas."
    ],
    cta: 'Solicita una consultoría sobre IA'
  },
  cta_section: {
    title: '¿Listo para llevar tu área de wellness al siguiente nivel?',
    cta: 'Contacta conmigo'
  },
  portfolio: {
      title: "Portfolio",
      subtitle: "Una selección de proyectos que reflejan mi compromiso con la excelencia y los resultados.",
      categories: {
          all: "Todos",
          luxury: "Hoteles de Lujo",
          urban: "Spas Urbanos",
          resorts: "Resorts",
          wellness: "Centros Wellness"
      },
      projects: data.es.portfolio,
  },
  testimonials: {
    title: 'Lo que dicen mis clientes',
    subtitle: 'La confianza y el éxito de mis clientes es mi mayor satisfacción.',
    items: data.es.testimonials,
  },
  blog: {
    title: "Desde mi Blog",
    subtitle: "Artículos, tendencias y reflexiones sobre el mundo del wellness y la gestión de spas.",
    read_more: "Leer más",
    reading_time: "min de lectura",
    posts: data.es.blog,
  },
  linkedin: {
    title: "Conecta conmigo en LinkedIn",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades Principales",
    view_profile: "Ver perfil completo",
    data: data.es.linkedin
  },
  resources: {
      title: "Recursos Gratuitos",
      subtitle: "Descarga guías y herramientas prácticas para optimizar la gestión de tu spa.",
      items: data.es.resources,
      form_title: "Descargar ahora",
      name: "Nombre",
      email: "Email",
      download: "Descargar",
  },
  contact: {
      title: "Contacto",
      subtitle: "Estaré encantada de escuchar sobre tu proyecto. Rellena el formulario o contáctame directamente.",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      company: "Empresa",
      message: "Mensaje",
      privacy_consent_text: "Acepto la",
      submit: "Enviar Mensaje",
      info_email: "eperez@asetrabalnearios.com",
      info_location: "España",
      success: "¡Gracias! Tu mensaje ha sido enviado.",
      error: "Hubo un error. Por favor, inténtalo de nuevo."
  },
  newsletter: {
      title: "Suscríbete a mi Newsletter",
      subtitle: "Recibe mensualmente análisis, tendencias y consejos prácticos sobre la gestión de Spas y Wellness.",
      email: "Tu email",
      subscribe: "Suscribirme",
      success: "¡Gracias por suscribirte!",
  },
  footer: {
      tagline: "Transformando el bienestar en crecimiento.",
      quick_links: "Enlaces rápidos",
      legal: "Legal",
      privacy_policy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      cookies: "Política de Cookies",
      copyright: "Eva Pérez Wellness. Todos los derechos reservados."
  },
  appointment: {
    title: "Reservar una Cita",
    name: "Nombre completo",
    email: "Email",
    phone: "Teléfono (Opcional)",
    service: "Servicio de interés",
    select_service: "Selecciona un servicio",
    date: "Fecha",
    time: "Hora",
    select_time: "Selecciona una hora",
    message: "Mensaje adicional (Opcional)",
    book: "Solicitar Cita",
    success_title: "¡Solicitud Enviada!",
    success_message: "Tu solicitud de cita ha sido recibida. Nos pondremos en contacto contigo para confirmar.",
  },
  chatbot: {
    welcome: "¡Hola! Soy el asistente virtual de Eva Pérez. ¿Cómo puedo ayudarte hoy con tus necesidades de consultoría en spa y wellness?",
    placeholder: "Escribe tu pregunta...",
    suggestions: ["¿Qué servicios ofreces?", "Háblame de tu experiencia", "Revenue Management para spas"]
  },
  not_found: {
    title: "Página no encontrada",
    message: "Lo sentimos, la página que buscas no existe. Puede que haya sido movida o eliminada.",
    go_home: "Volver al inicio"
  },
  cookie_banner: {
    message: 'Este sitio web utiliza cookies para mejorar tu experiencia. Al continuar, aceptas nuestro uso de cookies.',
    accept: 'Aceptar',
    decline: 'Rechazar'
  }
};

const en = {
  nav: {
    about: 'About',
    services: 'Services',
    ai_wellness: 'AI & Wellness',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    title: 'I advise hotels on transforming their Wellness area into a strategic growth engine',
    subtitle: 'With over 20 years of experience in luxury Spa management and revenue optimization.',
    stat: '20+ years of experience',
    cta_services: 'Discover my services',
    cta_contact: 'Contact',
  },
  about: {
    title: "About Eva Pérez",
    subtitle: "SPA & Wellness Project Manager – Revenue Optimization Specialist",
    p1: "With over 20 years dedicated to the luxury wellness sector, I have led the conceptualization, opening, and management of spas in prestigious international hotels. My passion is to transform wellness areas into profitable and memorable business units.",
    p2: "My approach focuses on Revenue Management optimization, training high-performance teams, and creating exceptional customer experiences. I am a strategist who combines operational excellence with an innovative business vision.",
    stats: {
        experience: 'Years of experience',
        projects: 'Projects completed',
        conferences: 'Conferences given',
        professionals: 'Professionals trained',
        countries: 'Countries worked in',
        attendees: 'Event attendees'
    },
    cta_contact: "Let's talk",
    cta_portfolio: "See my work"
  },
  services: {
    title: 'My Services',
    subtitle: 'Comprehensive solutions to boost your wellness business.',
    list: data.en.services,
    cta: 'More information',
  },
  ai_wellness: {
    title: 'Artificial Intelligence applied to the Wellness Sector',
    content: "AI is revolutionizing personalization, efficiency, and management in the world of wellness. From chatbots that improve customer service to predictive analytics to optimize occupancy, AI is the new strategic ally for industry leaders.",
    benefits_title: "Key Benefits:",
    benefits: [
        "Large-scale personalization of customer experiences.",
        "Real-time optimization of pricing and availability.",
        "Automation of administrative and booking tasks.",
        "Data analysis for strategic decision-making."
    ],
    cta: 'Request an AI consultation'
  },
  cta_section: {
    title: 'Ready to take your wellness area to the next level?',
    cta: 'Contact me'
  },
  portfolio: {
      title: "Portfolio",
      subtitle: "A selection of projects that reflect my commitment to excellence and results.",
      categories: {
          all: "All",
          luxury: "Luxury Hotels",
          urban: "Urban Spas",
          resorts: "Resorts",
          wellness: "Wellness Centers"
      },
      projects: data.en.portfolio,
  },
  testimonials: {
    title: 'What my clients say',
    subtitle: 'The trust and success of my clients is my greatest satisfaction.',
    items: data.en.testimonials,
  },
  blog: {
    title: "From my Blog",
    subtitle: "Articles, trends, and insights on the world of wellness and spa management.",
    read_more: "Read more",
    reading_time: "min read",
    posts: data.en.blog,
  },
  linkedin: {
    title: "Connect with me on LinkedIn",
    experience: "Experience",
    education: "Education",
    skills: "Top Skills",
    view_profile: "View full profile",
    data: data.en.linkedin
  },
  resources: {
      title: "Free Resources",
      subtitle: "Download practical guides and tools to optimize your spa management.",
      items: data.en.resources,
      form_title: "Download Now",
      name: "Name",
      email: "Email",
      download: "Download",
  },
  contact: {
      title: "Contact",
      subtitle: "I would be delighted to hear about your project. Fill out the form or contact me directly.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      message: "Message",
      privacy_consent_text: "I accept the",
      submit: "Send Message",
      info_email: "eperez@asetrabalnearios.com",
      info_location: "Spain",
      success: "Thank you! Your message has been sent.",
      error: "There was an error. Please try again."
  },
  newsletter: {
      title: "Subscribe to my Newsletter",
      subtitle: "Receive monthly analysis, trends, and practical advice on Spa and Wellness management.",
      email: "Your email",
      subscribe: "Subscribe",
      success: "Thanks for subscribing!",
  },
  footer: {
      tagline: "Transforming wellness into growth.",
      quick_links: "Quick Links",
      legal: "Legal",
      privacy_policy: "Privacy Policy",
      terms: "Terms & Conditions",
      cookies: "Cookie Policy",
      copyright: "Eva Pérez Wellness. All rights reserved."
  },
  appointment: {
    title: "Book an Appointment",
    name: "Full Name",
    email: "Email",
    phone: "Phone (Optional)",
    service: "Service of Interest",
    select_service: "Select a service",
    date: "Date",
    time: "Time",
    select_time: "Select a time",
    message: "Additional Message (Optional)",
    book: "Request Appointment",
    success_title: "Request Sent!",
    success_message: "Your appointment request has been received. We will contact you shortly to confirm.",
  },
  chatbot: {
    welcome: "Hello! I'm Eva Pérez's virtual assistant. How can I help you today with your spa and wellness consulting needs?",
    placeholder: "Type your question...",
    suggestions: ["What services do you offer?", "Tell me about your experience", "Revenue Management for spas"]
  },
  not_found: {
    title: "Page Not Found",
    message: "Sorry, the page you are looking for does not exist. It may have been moved or deleted.",
    go_home: "Go to homepage"
  },
  cookie_banner: {
    message: 'This website uses cookies to enhance your experience. By continuing, you agree to our use of cookies.',
    accept: 'Accept',
    decline: 'Decline'
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
