import type { ComponentType } from 'react';

// Base interfaces
export interface TechItem {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

// Hero Section Types
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  profileImage: string;
  socialLinks: SocialLink[];
  technologies: TechItem[];
  ctaButtons: {
    projects: { text: string; href: string; icon: ComponentType<{ size?: number }> };
    contact: { text: string; href: string };
  };
}

// About Me Section Types
export interface Specialization {
  title: string;
  description: string;
  icon: string;
}

export interface AboutMeData {
  sectionLabel: string;
  title: string;
  description: string[];
  specializations: Specialization[];
}

// Experience Section Types
export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
}

export interface ExperienceData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  experiences: Experience[];
}

// Projects Section Types
export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
}

export interface ProjectsData {
  sectionLabel: string;
  title: string;
  description: string;
  projects: Project[];
  techIcons: Record<string, string>;
}

// Contact Section Types
export interface ContactData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  email: string;
  socialLinks: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
}

// Main Portfolio Data Type
export interface PortfolioData {
  hero: HeroData;
  aboutMe: AboutMeData;
  experience: ExperienceData;
  projects: ProjectsData;
  contact: ContactData;
}
