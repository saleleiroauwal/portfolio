import type { SkillCategory } from '../types/portfolio';

/**
 * Centralized Technical Skills Data
 * Edit, add, or remove items to reflect only the technologies and concepts
 * you can genuinely demonstrate. Proficiency percentages are intentionally
 * omitted to present capabilities honestly without exaggeration.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description:
      'Foundational modeling paradigms, data preparation workflows, and systematic evaluation methods.',
    icon: 'brain',
    skills: [
      { name: 'Supervised Learning' },
      { name: 'Unsupervised Learning' },
      { name: 'Classification' },
      { name: 'Regression' },
      { name: 'Model Evaluation' },
      { name: 'Feature Engineering' },
      { name: 'Data Preprocessing' },
    ],
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description:
      'Neural network architectures, vision pipelines, and iterative training and validation workflows.',
    icon: 'layers',
    editableHint: 'Adjust frameworks below to reflect your active tooling.',
    skills: [
      { name: 'Artificial Neural Networks' },
      { name: 'Convolutional Neural Networks (CNN)' },
      { name: 'Model Training and Evaluation' },
      { name: 'Image Classification' },
      { name: 'Computer Vision' },
      {
        name: 'TensorFlow / PyTorch',
        isEditableNote: true,
        note: 'Editable — retain whichever framework(s) match your hands-on work',
      },
    ],
  },
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description:
      'Core languages used across data experimentation, algorithmic problem solving, and web interfaces.',
    icon: 'code',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'Modern component systems, responsive design, accessibility, and clean client-side architecture.',
    icon: 'layout',
    skills: [
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
      { name: 'Responsive Web Design' },
      { name: 'Component-Based Architecture' },
      { name: 'UI/UX Implementation' },
      { name: 'API Integration' },
    ],
  },
  {
    id: 'tools-environment',
    title: 'Tools & Development Environment',
    description:
      'Version control, interactive experimentation notebooks, code editors, and cloud deployment tooling.',
    icon: 'terminal',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook' },
      { name: 'Google Colab' },
      { name: 'Vercel' },
    ],
  },
];

