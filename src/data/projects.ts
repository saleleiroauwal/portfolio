import type { ProjectItem } from '../types/portfolio';

/**
 * Centralized Featured Projects Data
 * To add a new project, append a new ProjectItem object to this array.
 * Keep placeholder fields clearly marked until verified metrics, repositories,
 * screenshots, and live links are ready to publish.
 */
export const projectsData: ProjectItem[] = [
  {
    id: 'food-health-disease-risk-detector',
    title: 'AI-Based Food Health and Disease Risk Detector Using Deep Learning',
    category: 'Artificial Intelligence / Deep Learning',
    filterGroup: 'AI & Deep Learning',
    status: 'Documenting Results',
    shortDescription:
      'An AI-based project focused on applying machine learning and deep learning techniques to food-related health analysis and disease-risk detection.',
    problemAddressed:
      'Helping users and researchers analyze food-related attributes and nutritional patterns to surface potential health considerations using structured machine learning and deep learning workflows.',
    keyFunctionality: [
      'Model-driven food image and attribute analysis returning top predicted food classes with confidence scores',
      'Condition-aware nutritional assessment surfacing benefits, portion risk factors, and dietary recommendations',
      'Structured JSON inference pipeline and REST API design documented from academic AI research and system analysis',
    ],
    technologies: [
      { name: 'Python' },
      { name: 'Deep Learning / CNN' },
      { name: 'Google Colab' },
      { name: 'REST API Design' },
    ],
    thumbnailUrl: '/images/projects/food-health-detector-colab.jpg',
    thumbnailAlt:
      'Google Colab inference output for AI-Based Food Health and Disease Risk Detector showing predicted food classifications and health recommendation JSON',
    visualVariant: 'food-health-ai',
    githubUrl: 'https://github.com/saleleiroauwal/food-health-api',
    liveDemoUrl: null,
    details: [
      {
        label: 'Project Objectives',
        content:
          'Academic project focused on applying deep learning to food-related health analysis and disease-risk detection, bridging model-driven inference with clear system requirements.',
        isPlaceholder: false,
      },
      {
        label: 'System Analysis & Workflow',
        content:
          'Explored model-driven analysis, system requirements, and application design—structuring inference outputs into top food predictions, nutritional benefits, risk indicators, and portion recommendations.',
        isPlaceholder: false,
      },
      {
        label: 'Prototype & API Integration',
        content:
          'Inference workflow tested in Google Colab with structured JSON responses and API service integration tracked in the food-health-api repository.',
        isPlaceholder: false,
      },
      {
        label: 'Evaluation Status',
        content:
          'Prototype predictions and recommendation outputs verified in Colab; formal benchmark metrics and clinical disclaimers are documented alongside ongoing technical research.',
        isPlaceholder: false,
      },
      {
        label: 'Screenshots & Media',
        content:
          'Google Colab notebook inference output preview showing structured health analysis, benefits, recommendation, and top food predictions.',
        isPlaceholder: false,
      },
    ],
    note: 'Note: Informational/research prototype only — does not substitute for clinical medical diagnosis. Verified metrics and datasets should be added only after testing.',
  },
  {
    id: 'northhaven-ladies-tailoring-system',
    title: 'Northhaven Ladies Tailoring Management System',
    category: 'Full-Stack Development / Software Engineering',
    filterGroup: 'Software Engineering',
    status: 'Completed',
    shortDescription:
      'A web-based ladies’ tailoring and garment management platform built to organize customer records, body measurements, garment orders, and production stages.',
    problemAddressed:
      'Replacing paper-based measurement logs and manual order follow-ups with a structured digital workflow for tracking custom tailoring specifications, garment production stages, and customer updates.',
    keyFunctionality: [
      'Centralized management of customer records, garment specifications, and body measurements',
      'Structured production stage tracking from order intake through final garment completion',
      'Role-based access for administrators, staff, and customers with order-status notifications',
    ],
    technologies: [
      { name: 'TypeScript' },
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
      { name: 'Database-Driven Systems' },
    ],
    thumbnailUrl: '/images/projects/northhaven-ladies-tailoring.jpg',
    thumbnailAlt:
      'Landing interface for Northhaven Ladies Tailoring Management System (Northhaven Nigeria Limited)',
    visualVariant: 'election-system',
    githubUrl: 'https://github.com/saleleiroauwal/Ladies-tailoring-management-system',
    liveDemoUrl: null,
    details: [
      {
        label: 'Project Overview',
        content:
          'Web-based tailoring business management system developed for Northhaven Nigeria Limited to coordinate custom ladies’ garment orders, measurement records, and organized production workflows.',
        isPlaceholder: false,
      },
      {
        label: 'Main Functionalities',
        content:
          'Role-based access for administrators, staff, and customers; structured measurement and garment records; production stage tracking; and customer order-status notifications.',
        isPlaceholder: false,
      },
      {
        label: 'Architecture & Workflow Design',
        content:
          'Applies system analysis and database-driven application principles to automate business processes—featuring responsive front-end portal screens, theme switching, and role-scoped workflows.',
        isPlaceholder: false,
      },
      {
        label: 'Screenshots & Media',
        content:
          'Includes web portal landing preview for Northhaven Nigeria Limited Haute Couture & Tailoring Management.',
        isPlaceholder: false,
      },
    ],
    note: 'Presented at a high level; private customer records and internal access credentials are intentionally excluded.',
  },
  {
    id: 'adaptive-examination-system',
    title: 'Adaptive Examination System',
    category: 'Artificial Intelligence / Adaptive Learning',
    filterGroup: 'Adaptive Learning',
    status: 'Proposed / Concept',
    shortDescription:
      'A proposed and evolving adaptive examination platform designed to dynamically adjust subsequent questions based on a learner’s real-time performance.',
    problemAddressed:
      'Standard static assessments deliver identical question sequences regardless of learner proficiency, limiting diagnostic precision for both struggling and advanced students.',
    keyFunctionality: [
      'Dynamic question selection logic calibrated to prior response correctness',
      'Structured difficulty tiering and topic mastery tracking across assessment sessions',
      'Clean learner assessment interface paired with post-test performance diagnostics',
    ],
    technologies: [
      { name: 'Python' },
      { name: 'React.js' },
      { name: 'TypeScript' },
      { name: 'AI & Adaptive Logic' },
    ],
    thumbnailUrl: '/images/projects/adaptive-examination-system.jpg',
    thumbnailAlt:
      'Sign-in portal interface for the AI-Based Adaptive Examination System prototype',
    visualVariant: 'adaptive-exam',
    githubUrl: 'https://github.com/saleleiroauwal/Adaptive-exam-system',
    liveDemoUrl: null,
    details: [
      {
        label: 'Development Status',
        content:
          'Proposed / Active Concept Stage — architecture, adaptive logic design, and prototype modules are being scoped. This entry is intentionally presented according to its current stage rather than as a finished commercial product.',
        isPlaceholder: false,
      },
      {
        label: 'Project Objectives',
        content:
          'Design a fair, responsive assessment engine that selects subsequent items based on observed learner responses while recording structured proficiency feedback.',
        isPlaceholder: false,
      },
      {
        label: 'Implementation Approach',
        content:
          'Built around system analysis, requirements modeling, and AI concepts—combining role-based Lecturer and Student portal authentication (as shown in the prototype login UI) with database-backed question difficulty tiers.',
        isPlaceholder: false,
      },
      {
        label: 'Development Milestones',
        content:
          'Tracked in the Adaptive-exam-system GitHub repository as part of ongoing technical research and web application development, focusing on assessment workflow validation and responsive UI design.',
        isPlaceholder: false,
      },
    ],
    note: 'Status transparency: Currently in proposed/early implementation stage; update the `status` field in `src/data/projects.ts` as milestones are completed.',
  },
];

