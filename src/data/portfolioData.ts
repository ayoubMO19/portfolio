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
    subtitle: "Backend enfocado en Node.js, APIs y sistemas de datos.",
    description: "Backend Developer con experiencia en Node.js en producción, trabajando con APIs REST, procesamiento de datos y optimización de rendimiento.",
    profileImage: profileImage,
    socialLinks: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-morghi-ouhda/", icon: FaLinkedin },
      { name: "GitHub", href: "https://github.com/ayoubMO19", icon: SiGithub },
      { name: "X", href: "https://x.com/AyoubMorghi", icon: SiX },
    ],
    technologies: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    ctaButtons: {
      projects: { text: "Ver Proyectos", href: "#projects", icon: Monitor },
      contact: { text: "Contactar", href: "#contact" },
    },
  },

  aboutMe: {
    sectionLabel: "// 01. About Me",
    title: "Backend Engineering",
    description: [
      "Desarrollador backend con experiencia en sistemas en producción con Node.js, trabajando en procesamiento de datos, APIs REST y sistemas asíncronos.",
      "Experiencia en rendimiento, automatización de procesos y diseño de servicios backend. Enfoque en código mantenible, separación de responsabilidades y arquitectura clara.",
    ],
    specializations: [
      {
        title: "Backend Development",
        description: "Diseño y desarrollo de APIs REST, lógica de negocio y sistemas escalables.",
        icon: "🏗️",
      },
      {
        title: "Software Quality",
        description: "Diseño de código mantenible, testing y buenas prácticas en servicios backend.",
        icon: "🧪",
      },
      {
        title: "Data & Systems",
        description: "Trabajo con bases de datos SQL/NoSQL y procesamiento de datos en entornos reales.",
        icon: "⚙️",
      },
    ],
  },

  experience: {
    sectionLabel: "// 02. Experience",
    title: "Trayectoria Profesional",
    subtitle: "Experiencia real en desarrollo de software",
    experiences: [
      {
        title: "Backend Developer",
        company: "Pylon Data (Startup energética)",
        period: "Feb 2024 — Jun 2025",
        location: "Benicarló, Castellón",
        description: "Desarrollo de APIs REST en Node.js en producción para sistemas energéticos. Procesamiento de datos y lógica de negocio, integración con RabbitMQ para tareas asíncronas y extracción de datos vía scraping y APIs externas. Persistencia en MongoDB e InfluxDB y optimización de rendimiento (~30%).",
        tech: ["Node.js", "TypeScript", "MySQL", "MongoDB", "InfluxDB", "Docker", "Git"],
      },
      {
        title: "Backend Developer (Freelance)",
        company: "Automatización y Scraping",
        period: "Ene 2026 — Mar 2026",
        location: "Remoto",
        description: "Desarrollo de sistemas de scraping y automatización con procesamiento de datos a gran escala. Construcción de pipelines de transformación y normalización, integrando APIs y automatizando flujos mediante cron jobs.",
        tech: ["Node.js", "Playwright", "Crawlee", "MongoDB", "APIs", "Cron Jobs"],
      },
      {
        title: "Técnico Superior DAM",
        company: "IES Joan Coromines",
        period: "2022 — 2024",
        location: "Benicarló",
        description: "Formación en desarrollo de software, bases de datos y arquitectura de aplicaciones.",
        tech: ["Java", "SQL", "Programación", "Arquitectura"],
      },
      {
        title: "Técnico Medio SMR",
        company: "IES Joan Coromines",
        period: "2020 — 2022",
        location: "Benicarló",
        description: "Fundamentos de sistemas, redes y hardware.",
        tech: ["Redes", "Hardware", "Sistemas"],
      },
    ],
  },

  projects: {
    sectionLabel: "// 03. Selected Work",
    title: "Proyectos destacados",
    description: "Proyectos donde aplico arquitectura real, seguridad y diseño de sistemas backend y frontend.",
    projects: [
      {
        title: "VEXA E-Commerce Backend",
        category: "Java Backend Architecture",
        description: "API REST completa en Spring Boot con autenticación JWT y control de roles. Integración de pagos reales con Stripe (PaymentIntent + Webhooks verificados). Arquitectura por capas y lógica de negocio segura sin confiar en el cliente.",
        tech: ["Java 21", "Spring Boot", "PostgreSQL"],
        image: backend_ecommerce,
        github: "https://github.com/ayoubMO19/e-commerce-backend",
        live: "https://e-commerce-backend-lny2.onrender.com/swagger-ui/index.html",
      },
      {
        title: "VEXA E-Commerce Frontend",
        category: "Frontend Engineering",
        description: "SPA en React con TypeScript conectada a backend real. Autenticación persistente, integración de pagos con Stripe y gestión de estado con TanStack Query. Rendimiento optimizado (100/100 Core Web Vitals).",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        image: frontend_ecommerce,
        github: "https://github.com/ayoubMO19/e-commerce-frontend",
        live: "https://e-commerce-frontend-mu-five.vercel.app/",
      },
    ],
    techIcons: {
      "Java 21": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
  },

  contact: {
    sectionLabel: "// 04. Contact",
    subtitle: "Disponible para oportunidades como Backend Developer.",
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
