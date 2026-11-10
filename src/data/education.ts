import type { EducationEntry } from '../types/portfolio';

/**
 * Centralized Education Data
 */
export const educationData: EducationEntry[] = [
  {
    id: 'primary-degree',
    institution: 'Federal University Dutse',
    degree: 'B.Sc. Computer Science',
    department: 'Department of Computer Science',
    graduationYear: null,
    isPlaceholder: false,
    academicInterests: [
      'Artificial Intelligence & Machine Learning',
      'Deep Learning & Computer Vision',
      'Software Architecture & Human-Computer Interaction',
    ],
    relevantCoursework: [
      { name: 'Artificial Intelligence Concepts', isPlaceholder: false },
      { name: 'Web Application Development', isPlaceholder: false },
      { name: 'System Analysis & Design', isPlaceholder: false },
      { name: 'Database Concepts', isPlaceholder: false },
      { name: 'Requirements Analysis', isPlaceholder: false },
      { name: 'Technical Research & Documentation', isPlaceholder: false },
    ],
  },
];
