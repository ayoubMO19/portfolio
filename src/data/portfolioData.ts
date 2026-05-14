import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Monitor } from "lucide-react";
import type { PortfolioData } from "../types/portfolio";
import profileImage from "../assets/profile.png";
import backend_ecommerce from "../assets/backend_ecommerce.png";
import frontend_ecommerce from "../assets/frontend_ecommerce.png";

export const portfolioData: PortfolioData = {
  hero: {
    title: "Ayoub Morghi.",
    subtitle: "Full Stack Developer especializado en backend, automatización y sistemas de datos.",
    description:
      "Desarrollador Full Stack con experiencia en Node.js y React en entornos reales, trabajando con APIs REST, automatización de procesos, sistemas de datos y herramientas internas.",
    profileImage: profileImage,
    socialLinks: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ayoub-morghi-ouhda/",
        icon: FaLinkedin,
      },
      {
        name: "GitHub",
        href: "https://github.com/ayoubMO19",
        icon: SiGithub,
      },
      {
        name: "X",
        href: "https://x.com/AyoubMorghi",
        icon: SiX,
      },
    ],
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
    ctaButtons: {
      projects: {
        text: "Ver Proyectos",
        href: "#projects",
        icon: Monitor,
      },
      contact: {
        text: "Contactar",
        href: "#contact",
      },
    },
  },

  aboutMe: {
    sectionLabel: "// 01. About Me",
    title: "Software Development",
    description: [
      "Desarrollador Full Stack con experiencia construyendo APIs REST, automatizaciones, herramientas internas y aplicaciones web en entornos reales.",
      "Enfoque en código mantenible, automatización de procesos, integración de servicios externos y resolución de problemas de negocio mediante software.",
    ],
    specializations: [
      {
        title: "Backend Development",
        description:
          "Diseño y desarrollo de APIs REST, lógica de negocio y sistemas escalables.",
        icon: "🏗️",
      },
      {
        title: "Automation & Integrations",
        description:
          "Automatización de procesos, scraping, integraciones con APIs y flujos de datos.",
        icon: "⚡",
      },
      {
        title: "Data & Systems",
        description:
          "Trabajo con bases de datos SQL/NoSQL y procesamiento de datos en entornos reales.",
        icon: "⚙️",
      },
    ],
  },

  experience: {
    sectionLabel: "// 02. Experience",
    title: "Trayectoria Profesional",
    subtitle: "Experiencia profesional y proyectos reales",
    experiences: [
      {
        title: "Full Stack Developer (Freelance)",
        company: "Safima Asesores",
        period: "Abr 2026 - Actualidad",
        location: "Castellón",
        description:
          "Desarrollo de un CRM interno para la gestión centralizada de clientes y expedientes. Implementación de filtros, estados y métricas para mejorar la organización interna, reducir errores y optimizar el seguimiento de expedientes y pagos.",
        tech: [
          "Node.js",
          "React",
          "TypeScript",
          "MongoDB",
          "REST APIs",
        ],
      },
      {
        title: "Backend Developer (Freelance)",
        company: "Automatización y Scraping",
        period: "Ene 2026 - Abr 2026",
        location: "Remoto",
        description:
          "Desarrollo de automatizaciones, scraping e integración de servicios externos mediante APIs. Construcción de pipelines de procesamiento y normalización de datos y automatización de flujos mediante cron jobs.",
        tech: [
          "Node.js",
          "Playwright",
          "Crawlee",
          "MongoDB",
          "APIs",
          "Cron Jobs",
        ],
      },
      {
        title: "Backend Developer",
        company: "Pylon Data (Startup energética)",
        period: "Feb 2024 - Jun 2025",
        location: "Benicarló, Castellón",
        description:
          "Desarrollo de automatizaciones y APIs REST en Node.js para sistemas energéticos en producción. Integración con APIs externas, procesamiento de datos y tareas asíncronas mediante RabbitMQ. Persistencia en MongoDB e InfluxDB y optimización de rendimiento en flujos de datos.",
        tech: [
          "Node.js",
          "Express",
          "TypeScript",
          "MongoDB",
          "MySQL",
          "InfluxDB",
          "RabbitMQ",
          "Docker",
          "Git",
        ],
      },
      {
        title: "Técnico Superior DAM",
        company: "IES Joan Coromines",
        period: "2022 - 2024",
        location: "Benicarló",
        description:
          "Formación en desarrollo de software, bases de datos y arquitectura de aplicaciones.",
        tech: ["Java", "SQL", "Programación", "Arquitectura"],
      },
      {
        title: "Técnico Medio SMR",
        company: "IES Joan Coromines",
        period: "2020 - 2022",
        location: "Benicarló",
        description:
          "Fundamentos de sistemas, redes y hardware.",
        tech: ["Redes", "Hardware", "Sistemas"],
      },
    ],
  },

  projects: {
    sectionLabel: "// 03. Selected Work",
    title: "Proyectos destacados",
    description:
      "Proyectos donde aplico arquitectura real, automatización y desarrollo full stack.",
    projects: [
      {
        title: "VEXA E-Commerce Backend",
        category: "Java Backend Architecture",
        description:
          "API REST completa en Spring Boot con autenticación JWT y control de roles. Integración de pagos reales con Stripe (PaymentIntent + Webhooks verificados). Arquitectura por capas y lógica de negocio segura.",
        tech: ["Java 21", "Spring Boot", "PostgreSQL"],
        image: backend_ecommerce,
        github: "https://github.com/ayoubMO19/e-commerce-backend",
        live: "https://e-commerce-backend-lny2.onrender.com/swagger-ui/index.html",
      },
      {
        title: "VEXA E-Commerce Frontend",
        category: "Frontend Engineering",
        description:
          "SPA en React con TypeScript conectada a backend real. Autenticación persistente, integración de pagos con Stripe y gestión de estado con TanStack Query.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        image: frontend_ecommerce,
        github: "https://github.com/ayoubMO19/e-commerce-frontend",
        live: "https://e-commerce-frontend-mu-five.vercel.app/",
      },
    ],
    techIcons: {
      "Java 21":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "Spring Boot":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      PostgreSQL:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      React:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Tailwind CSS":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      TypeScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      Vite:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
  },

  contact: {
    sectionLabel: "// 04. Contact",
    subtitle:
      "Disponible para oportunidades como Full Stack o Backend Developer.",
    email: "ayoubmorghiouhda@gmail.com",
    socialLinks: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ayoub-morghi-ouhda/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      },
      {
        name: "GitHub",
        href: "https://github.com/ayoubMO19",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Twitter",
        href: "https://x.com/AyoubMorghi",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      },
    ],
  },
};