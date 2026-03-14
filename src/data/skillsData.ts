// Shared skills data – used by Skills page and Home page skills section

export interface Skill {
  name: string;
  src: string;
  level: number;
  fallback: string;
}

export interface Category {
  id: number;
  title: string;
  emoji: string;
  color: string;
  glowColor: string;
  radarValue: number;
  skills: Skill[];
}

export interface OrbitIcon {
  src: string;
  name: string;
  ring: 1 | 2 | 3;
  delay: string;
}

export const hexToRgb = (hex: string): string => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : '0, 0, 0';
};

export const CATEGORIES: Category[] = [
  {
    id: 0,
    title: 'Test Automation',
    emoji: '⚡',
    color: '#6366f1',
    glowColor: '#818cf8',
    radarValue: 95,
    skills: [
      { name: 'Cypress', src: '/cypress.svg', level: 95, fallback: 'CY' },
      { name: 'Playwright', src: '/playwright.png', level: 90, fallback: 'PW' },
      { name: 'Postman', src: '/postman.png', level: 92, fallback: 'PM' },
      { name: 'JMeter', src: '/jmeter.webp', level: 85, fallback: 'JM' },
      { name: 'AccelQ', src: '/accelq.png', level: 80, fallback: 'AQ' },
      { name: 'REST API', src: '/rest-api.webp', level: 90, fallback: 'REST' },
      { name: 'Load Testing', src: '/load-testing.png', level: 80, fallback: 'LOAD' },
    ],
  },
  {
    id: 1,
    title: 'Programming',
    emoji: '💻',
    color: '#0ea5e9',
    glowColor: '#38bdf8',
    radarValue: 85,
    skills: [
      { name: 'JavaScript', src: '/javascript.png', level: 88, fallback: 'JS' },
      { name: 'TypeScript', src: '/typescript.webp', level: 85, fallback: 'TS' },
      { name: 'Python', src: '/python.svg', level: 80, fallback: 'PY' },
      { name: 'SQL', src: '/sql.png', level: 82, fallback: 'SQL' },
    ],
  },
  {
    id: 2,
    title: 'CI/CD & DevOps',
    emoji: '⚙️',
    color: '#10b981',
    glowColor: '#34d399',
    radarValue: 82,
    skills: [
      { name: 'Azure DevOps', src: '/azure-devops.webp', level: 85, fallback: 'AZ' },
      { name: 'GitHub Actions', src: '/github-action.png', level: 82, fallback: 'GH' },
      { name: 'GitLab', src: '/gitlab.png', level: 80, fallback: 'GL' },
      { name: 'GitHub', src: '/github.png', level: 88, fallback: 'GIT' },
      { name: 'AWS', src: '/aws.png', level: 75, fallback: 'AWS' },
      { name: 'SonarCloud', src: '/sonarcloud.png', level: 78, fallback: 'SC' },
    ],
  },
  {
    id: 3,
    title: 'Agile & Tools',
    emoji: '📋',
    color: '#f59e0b',
    glowColor: '#fbbf24',
    radarValue: 92,
    skills: [
      { name: 'Jira', src: '/jira.png', level: 95, fallback: 'JIRA' },
      { name: 'Confluence', src: '/confluence.svg', level: 90, fallback: 'CONF' },
      { name: 'Zephyr', src: '/zephyr.png', level: 88, fallback: 'ZEP' },
      { name: 'Slack', src: '/slack.png', level: 92, fallback: 'SLACK' },
      { name: 'Scrum', src: '', level: 95, fallback: 'SCRM' },
      { name: 'Kanban', src: '', level: 90, fallback: 'KB' },
      { name: 'TDD', src: '', level: 85, fallback: 'TDD' },
      { name: 'BDD', src: '', level: 88, fallback: 'BDD' },
    ],
  },
  {
    id: 4,
    title: 'AI Tools',
    emoji: '🤖',
    color: '#ec4899',
    glowColor: '#f472b6',
    radarValue: 88,
    skills: [
      { name: 'ChatGPT', src: '/chatgpt.jpg', level: 92, fallback: 'GPT' },
      { name: 'Gemini', src: '/gemini.webp', level: 88, fallback: 'GM' },
      { name: 'Claude', src: '/Claude.png', level: 90, fallback: 'CL' },
      { name: 'Perplexity', src: '/Perplexity.png', level: 85, fallback: 'PP' },
      { name: 'Cursor', src: '/cursor.png', level: 90, fallback: 'CR' },
      { name: 'Lovable', src: '/lovable.png', level: 85, fallback: 'LV' },
      { name: 'Replit', src: '/replit.jpg', level: 80, fallback: 'RP' },
      { name: 'TRAE', src: '/trae.webp', level: 82, fallback: 'TR' },
    ],
  },
  {
    id: 5,
    title: 'Monitoring',
    emoji: '📊',
    color: '#8b5cf6',
    glowColor: '#a78bfa',
    radarValue: 78,
    skills: [
      { name: 'FullStory', src: '/FullStory.png', level: 82, fallback: 'FS' },
      { name: 'Lighthouse', src: '/lighthouse.png', level: 85, fallback: 'LH' },
      { name: 'Google Analytics', src: '/Google Analytics.jpg', level: 78, fallback: 'GA' },
    ],
  },
];

export const ORBIT_DATA: OrbitIcon[] = [
  { src: '/cypress.svg', name: 'Cypress', ring: 1, delay: '0s' },
  { src: '/playwright.png', name: 'Playwright', ring: 1, delay: '-3.33s' },
  { src: '/chatgpt.jpg', name: 'ChatGPT', ring: 1, delay: '-6.67s' },
  { src: '/jira.png', name: 'Jira', ring: 2, delay: '0s' },
  { src: '/github-action.png', name: 'GitHub Actions', ring: 2, delay: '-5.67s' },
  { src: '/python.svg', name: 'Python', ring: 2, delay: '-11.33s' },
  { src: '/postman.png', name: 'Postman', ring: 3, delay: '0s' },
  { src: '/aws.png', name: 'AWS', ring: 3, delay: '-6.5s' },
  { src: '/javascript.png', name: 'JavaScript', ring: 3, delay: '-13s' },
  { src: '/Claude.png', name: 'Claude', ring: 3, delay: '-19.5s' },
];

export const RING_SPECS = [
  { r: 120, dur: '10s', size: 40, animCw: 'sk-orbit1-cw', animCcw: 'sk-orbit1-ccw' },
  { r: 190, dur: '17s', size: 44, animCw: 'sk-orbit2-cw', animCcw: 'sk-orbit2-ccw' },
  { r: 268, dur: '26s', size: 38, animCw: 'sk-orbit3-cw', animCcw: 'sk-orbit3-ccw' },
];
