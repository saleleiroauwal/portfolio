import type { NavItem } from '../types/portfolio';

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'saleleiroauwal@gmail.com';
const customContactFormEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || '';

export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL?.trim() || 'https://myportfolio-nine-fawn-32.vercel.app/',
  contactEmail,
  githubUrl: import.meta.env.VITE_GITHUB_URL?.trim() || '',
  cvUrl: import.meta.env.VITE_CV_URL?.trim() || '/Auwal_Salele_Iro_CV.pdf',
  contactFormEndpoint:
    customContactFormEndpoint || `https://formsubmit.co/ajax/${contactEmail}`,
  isCustomContactEndpoint: Boolean(customContactFormEndpoint),
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || '',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

