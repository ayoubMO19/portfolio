import { useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { 
  HeroData, 
  AboutMeData, 
  ExperienceData, 
  ProjectsData, 
  ContactData,
  PortfolioData 
} from '../types/portfolio';

/**
 * Hook personalizado para gestionar los datos del portfolio
 * Proporciona acceso optimizado y memoizado a todas las secciones del portfolio
 */
export function usePortfolioData(): PortfolioData {
  return useMemo(() => portfolioData, []);
}

/**
 * Hook específico para datos del Hero
 */
export function useHeroData(): HeroData {
  return usePortfolioData().hero;
}

/**
 * Hook específico para datos de About Me
 */
export function useAboutMeData(): AboutMeData {
  return usePortfolioData().aboutMe;
}

/**
 * Hook específico para datos de Experience
 */
export function useExperienceData(): ExperienceData {
  return usePortfolioData().experience;
}

/**
 * Hook específico para datos de Projects
 */
export function useProjectsData(): ProjectsData {
  return usePortfolioData().projects;
}

/**
 * Hook específico para datos de Contact
 */
export function useContactData(): ContactData {
  return usePortfolioData().contact;
}

/**
 * Hook utilitario para obtener datos por sección
 */
export function useSectionData<T extends keyof PortfolioData>(
  section: T
): PortfolioData[T] {
  return usePortfolioData()[section];
}
