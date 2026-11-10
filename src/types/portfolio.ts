export type ThemeMode = 'dark' | 'light';

export type ProjectStatus =
  | 'Completed'
  | 'In Development'
  | 'Proposed / Concept'
  | 'Documenting Results';

export type ProjectFilterGroup =
  | 'All'
  | 'AI & Deep Learning'
  | 'Software Engineering'
  | 'Adaptive Learning';

export interface ProfileField {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export interface ProfileData {
  fullName: string;
  isNamePlaceholder: boolean;
  initials: string;
  title: string;
  subtitle: string;
  heroHeadline: string;
  heroIntro: string;
  /**
   * Leave as `null` unless you want to display an explicit availability badge.
   * Example: 'Open to AI/ML & Frontend Internships'
   */
  availabilityStatus: string | null;
  /**
   * Place your portrait image in `public/images/profile.jpg` and set this to
   * `'/images/profile.jpg'`. When `null`, an architectural monogram frame is rendered.
   */
  photoUrl: string | null;
  photoAlt: string;
  about: {
    biography: string[];
    academicBackground: ProfileField;
    careerInterests: ProfileField;
    professionalObjectives: ProfileField;
  };
  contact: {
    email: string;
    isEmailPlaceholder: boolean;
    /** Optional location; leave `null` to omit from the contact card. */
    location: string | null;
    githubUrl: string | null;
    cvUrl: string;
    cvDownloadName: string;
    isCvPlaceholder: boolean;
  };
  footerSummary: string;
}

export interface SkillItem {
  name: string;
  isEditableNote?: boolean;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: 'brain' | 'layers' | 'code' | 'layout' | 'terminal';
  skills: SkillItem[];
  editableHint?: string;
}

export interface ProjectDetailField {
  label: string;
  content: string;
  isPlaceholder?: boolean;
}

export interface ProjectTech {
  name: string;
  isPlaceholder?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterGroup: Exclude<ProjectFilterGroup, 'All'>;
  status: ProjectStatus;
  shortDescription: string;
  problemAddressed: string;
  keyFunctionality: string[];
  technologies: ProjectTech[];
  /**
   * Optional path to a project screenshot in `public/images/projects/...`.
   * Falls back to a bespoke architectural preview schematic when `null`.
   */
  thumbnailUrl: string | null;
  thumbnailAlt: string;
  visualVariant: 'food-health-ai' | 'election-system' | 'adaptive-exam';
  githubUrl: string | null;
  liveDemoUrl: string | null;
  details: ProjectDetailField[];
  note?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  department: string;
  graduationYear?: string | null;
  isPlaceholder: boolean;
  academicInterests: string[];
  relevantCoursework: { name: string; isPlaceholder?: boolean }[];
}

export interface ProfessionalInterest {
  id: string;
  title: string;
  description: string;
  icon: 'cpu' | 'flask' | 'network' | 'eye' | 'sparkles' | 'code' | 'compass';
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

