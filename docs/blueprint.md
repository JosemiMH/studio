# **App Name**: Eva Pérez Wellness

## Core Features:

- Multilingual Support: Complete ES/EN bilingual system with React Context for language management, automatic browser language detection, localStorage persistence, centralized translation files, and a language switcher with flags.
- Contact Form: A contact form with name, email, phone, company, and message fields.  Integrates with PostgreSQL database. Sends confirmation toast on submit.
- AI Chatbot: An intelligent chatbot using the OpenAI API to assist visitors with queries related to wellness and spa management, acting as a tool that uses provided information in its output only when necessary. It includes a welcome message, conversation history, and typing indicators.
- Appointment Booking: A system for booking appointments with a selection of date, time and type of service, and form integration with PostgreSQL to manage bookings.
- Portfolio: Filterable portfolio to showcase previous projects.
- Newsletter Subscription: Newsletter subscription section with email input and PostgreSQL database integration. Provides visual confirmation upon subscription.
- LinkedIn Profile: Section displaying a LinkedIn profile snippet with a link to the full profile.

## Style Guidelines:

- Primary color: Turquoise (#3CBFAE) to represent tranquility and expertise.
- Background color: Very light turquoise (#E0F7F0), providing a clean, soft backdrop.
- Accent color: Gold (#D4B78F) to add a touch of luxury and sophistication.
- Headline font: 'Playfair', a serif font, is recommended for titles with its elegant style.
- Body font: 'Poppins', a sans-serif font, for a clean and modern reading experience.
- Use clean and minimalist icons from Lucide React to represent services and features.
- Mobile-first responsive design using TailwindCSS with breakpoints for mobile, tablet, and desktop. Adaptive grids in all sections.
- Subtle scroll reveal animations with Framer Motion, animated counters for statistics, and smooth transitions between sections.