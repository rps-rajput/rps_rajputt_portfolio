export interface SoftwayProgressionRole {
  role: string;
  duration: string;
  location: string;
}

/** Chronological order (oldest → newest). UI shows newest → oldest. */
export const SOFTWAY_PROGRESSION: SoftwayProgressionRole[] = [
  { role: 'QA Engineer', duration: 'Jul 2022 - Feb 2025', location: 'Remote' },
  { role: 'Senior QA Engineer', duration: 'Feb 2025 - Feb 2026', location: 'Remote' },
  { role: 'Software Engineer II', duration: 'Feb 2026 - Present', location: 'Remote' },
];

export const SOFTWAY_SUMMARY =
  'Progressed through multiple roles at Softway while leading QA initiatives, automation strategy, and AI-assisted engineering practices across high-impact projects.';
