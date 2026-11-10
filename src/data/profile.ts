import { siteConfig } from '../config/site';
import type { ProfileData } from '../types/portfolio';

/**
 * Centralized Profile Configuration
 * Replace placeholder values marked with brackets `[...]` or `null`
 * with your verified personal information.
 */
export const profileData: ProfileData = {
  fullName: 'Auwal Salele Iro',
  isNamePlaceholder: false,
  initials: 'ASI',
  title: 'AI/ML Engineer & Frontend Developer',
  subtitle: 'AI/ML Engineer | Deep Learning Practitioner | Frontend Developer',
  heroHeadline:
    'Building Intelligent Solutions Through AI, Machine Learning & Modern Web Development.',
  heroIntro:
    'I am an aspiring AI/ML Engineer and Frontend Developer passionate about building intelligent, data-driven solutions and modern digital experiences. I combine machine learning, deep learning, and frontend development to transform ideas into practical technology solutions.',
  /**
   * Optional status badge shown in the Hero section.
   * Keep as `null` unless you want to state your verified availability
   * (e.g., 'Open to AI/ML & Frontend Roles').
   */
  availabilityStatus: null,
  /**
   * Profile photograph path in `public/images/`.
   * Falls back to the initials-based visual frame if unable to load.
   */
  photoUrl: '/images/auwal-salele-iro.jpg',
  photoAlt: 'Portrait of Auwal Salele Iro, AI/ML Engineer and Frontend Developer',
  about: {
    biography: [
      'I am Auwal Salele Iro, a Computer Science graduate and emerging technologist focused on the intersection of Artificial Intelligence, Machine Learning, Deep Learning, and modern Frontend Engineering.',
      'My technical work centers on understanding how data-driven models learn meaningful patterns and how well-engineered web interfaces can make intelligent systems accessible, transparent, and genuinely useful for real-world problem solving.',
      'Beyond model experimentation and user interface architecture, I am deeply committed to continuous learning, structured software engineering, and exploring research-informed approaches to building reliable technology.',
    ],
    academicBackground: {
      label: 'Academic Background',
      value:
        '[Placeholder: Pursuing/Completed Degree in Computer Science at University Name — update with your verified program details and academic focus.]',
      isPlaceholder: true,
    },
    careerInterests: {
      label: 'Career Interests',
      value:
        'Applied Machine Learning, Deep Learning & Computer Vision Systems, Intelligent Educational & Decision-Support Tools, and Scalable React/TypeScript Frontend Architecture.',
    },
    professionalObjectives: {
      label: 'Professional Objectives',
      value:
        '[Placeholder: Seeking opportunities to contribute to AI/ML engineering, software development, or research teams where analytical rigor and clean frontend engineering deliver measurable value.]',
      isPlaceholder: true,
    },
  },
  contact: {
    email: siteConfig.contactEmail || 'saleleiroauwal@gmail.com',
    isEmailPlaceholder: false,
    /**
     * Optional location string (e.g., 'Lagos, Nigeria' or 'London, UK').
     * Leave as `null` until you choose to publish a location.
     */
    location: null,
    githubUrl: siteConfig.githubUrl || 'https://github.com/saleleiroauwal',
    cvUrl: siteConfig.cvUrl,
    cvDownloadName: 'Auwal_Salele_Iro_CV.pdf',
    isCvPlaceholder: false,
  },
  footerSummary:
    'Emerging AI/ML Engineer, Deep Learning Practitioner, and Frontend Developer building thoughtful, data-driven software systems.',
};

