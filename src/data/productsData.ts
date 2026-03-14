// ─── Shared Products Data for Ruviq products portfolio ──────────────────────

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductStep {
  number: string;
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  category: string[];

  // ── Brand assets ────────────────────────────────────────────────────────
  logo: string;          // large logo (hero)
  icon: string;          // small favicon-style icon (cards)

  // ── Brand colors ────────────────────────────────────────────────────────
  heroBg: string;        // CSS value for the hero / page background
  heroBgExtra?: string;  // optional extra CSS (e.g. dot-pattern layer)
  btnGradient: string;   // CTA button background
  btnGradient2?: string; // secondary button (if product has two)
  color: string;         // primary accent (text, borders, glows)
  colorEnd: string;      // gradient end colour
  glowColor: string;     // rgba glow
  isDarkHero: boolean;   // true → dark bg (white text), false → light bg (dark text)

  liveUrl: string;
  extensionUrl?: string;
  docsUrl?: string;
  isParent?: boolean;
  badge: string;
  tech: string[];
  features: ProductFeature[];
  howItWorks?: ProductStep[];
  stats: { value: string; label: string }[];
  useCases?: string[];
}

export const PRODUCTS: Product[] = [
  // ── 1. Ruviq ──────────────────────────────────────────────────────────────
  {
    slug: 'ruviq',
    name: 'Ruviq',
    tagline: 'Building Tools That Make Testers Superhuman',
    shortDesc:
      'Ruviq is the parent brand behind a suite of AI-powered QA tools, testing platforms, and developer utilities — built to eliminate manual toil in software quality workflows.',
    longDesc:
      'Ruviq is my software products company focused on solving real problems in QA engineering, test automation, and developer productivity. Every tool under the Ruviq brand is designed with the same principles: zero backend, zero signup friction, and a laser focus on the use case. Products range from AI-generated test case assistants to Chrome extensions that record and export Playwright/Cypress code, to API documentation and performance testing platforms.',
    category: ['Company', 'Brand', 'SaaS'],

    logo: '/products/Ruviq-logo.png',
    icon: '/products/Ruviqicon.png',

    heroBg: '#000000',
    btnGradient: 'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)',
    color: '#a78bfa',
    colorEnd: '#67e8f9',
    glowColor: 'rgba(167,139,250,0.4)',
    isDarkHero: true,

    liveUrl: 'https://ruviq.com/',
    badge: 'Parent Company · QA SaaS Brand',
    isParent: true,
    tech: ['React', 'TypeScript', 'Vite', 'Python', 'Chrome Extensions', 'Streamlit', 'AI/LLM APIs'],
    features: [
      { icon: '⚡', title: 'AI-First Products', description: 'Every product in the Ruviq suite integrates AI/ML to accelerate testing workflows.' },
      { icon: '🔒', title: 'Zero Data Leakage', description: 'All tools run browser-native or locally — no data leaves your machine without consent.' },
      { icon: '🆓', title: 'Free Forever Core', description: 'Core features of every product are free with no credit card, no account friction.' },
      { icon: '🧩', title: 'Seamless Integrations', description: 'Products integrate with Jira, Zephyr, Azure DevOps, JMeter, Postman, and more.' },
      { icon: '🚀', title: 'QA-Focused Design', description: 'Designed by a senior QA engineer, for QA engineers — built from real-world pain.' },
      { icon: '🌐', title: 'Growing Ecosystem', description: 'A continuously expanding portfolio of tools covering the full QA lifecycle.' },
    ],
    stats: [
      { value: '4+', label: 'Live Products' },
      { value: '0', label: 'Backend Required' },
      { value: '100%', label: 'Free Core Tier' },
      { value: '5+', label: 'Tool Categories' },
    ],
    useCases: [
      'API Documentation Generation',
      'Automated Test Code Generation',
      'API Performance Analysis',
      'AI-Powered Test Case Writing',
    ],
  },

  // ── 2. APIQuill ─────────────────────────────────────────────────────────────
  {
    slug: 'apiquill',
    name: 'APIQuill',
    tagline: 'Free API Documentation Generator — Convert Postman to HTML & PDF Instantly',
    shortDesc:
      'Convert Postman collections to professional HTML & PDF API documentation instantly. No backend, no setup, no account. 100% browser-native.',
    longDesc:
      'APIQuill eliminates the most painful part of API development: writing and maintaining documentation. Import your Postman collection JSON, review and customize endpoints with inline editing, drag-to-reorder controls, and a live preview panel — then export a polished standalone HTML page or a ready-to-share PDF in seconds. Everything runs in the browser; no data ever leaves your machine.',
    category: ['API Documentation', 'SaaS Tool', 'Free'],

    logo: '/products/apiquill-logo.png',
    icon: '/products/APIQuillicons.png',

    heroBg: 'linear-gradient(160deg, #f0f9ff, #e0f2fe 40%, #ede9fe)',
    btnGradient: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
    color: '#3b82f6',
    colorEnd: '#7c3aed',
    glowColor: 'rgba(59,130,246,0.35)',
    isDarkHero: false,

    liveUrl: 'https://apiquill.ruviq.com/',
    badge: 'Free · Browser-Native · No Login',
    tech: ['React', 'TypeScript', 'PDF.js', 'Browser APIs', 'HTML/CSS', 'Vite'],
    features: [
      { icon: '📥', title: 'Upload Postman Collections', description: 'Import any Postman JSON — including nested folders and complex auth setups — in one click.' },
      { icon: '✏️', title: 'Add APIs Manually', description: 'No Postman? Build API docs from scratch using the intuitive inline endpoint editor.' },
      { icon: '↕️', title: 'Drag & Drop Reorder', description: 'Organize endpoints exactly how you want — drag to reorder or use arrow controls.' },
      { icon: '🔴', title: 'Live Preview Panel', description: 'Test API endpoints directly from the browser. See status codes, headers, and response bodies in real time.' },
      { icon: '🌐', title: 'Export to HTML', description: 'Generate a clean, standalone HTML doc file you can host, email, or share instantly.' },
      { icon: '📄', title: 'Export to PDF', description: 'One-click professional PDF output — perfect for client handoffs and sprint reviews.' },
    ],
    howItWorks: [
      { number: '01', title: 'Upload Your Collection', description: 'Drop in your Postman JSON file, or manually add endpoints one by one using the built-in editor.' },
      { number: '02', title: 'Review & Customize', description: 'Browse endpoints, edit descriptions, reorder via drag & drop, and test live responses.' },
      { number: '03', title: 'Export & Share', description: 'Click export — get a polished HTML page or shareable PDF. Done in seconds.' },
    ],
    stats: [
      { value: '3', label: 'Steps to Export' },
      { value: '2', label: 'Export Formats' },
      { value: '100%', label: 'Browser-Native' },
      { value: '0', label: 'Backend Needed' },
    ],
    useCases: ['QA Engineers', 'Backend Developers', 'API-First Teams', 'Freelancers', 'Startups'],
  },

  // ── 3. AutoCaseGen ──────────────────────────────────────────────────────────
  {
    slug: 'autocasegen',
    name: 'AutoCaseGen',
    tagline: 'Record Actions. Generate Tests. Instantly.',
    shortDesc:
      'Chrome extension that captures browser interactions and generates production-ready Playwright or Cypress test code — entirely in the browser. No backend, no login.',
    longDesc:
      'AutoCaseGen is a Chrome extension that watches your app interactions and converts them into production-ready Playwright or Cypress test projects — without writing a single line of boilerplate. Install the extension, press "Start Recording", use your app naturally, then import your session into the web tool. Configure your framework and output mode, edit generated code in the embedded Monaco editor (same engine as VS Code), and download a complete ZIP project with package.json, config, page objects, and test files.',
    category: ['Chrome Extension', 'Test Automation', 'Free'],

    logo: '/products/autoCaseGen-logo.png',
    icon: '/products/autoCaseGenIcon.png',

    // Dark theme with teal dot pattern (auto-applied as CSS background layers)
    heroBg: '#0a0f1e',
    heroBgExtra: 'radial-gradient(#19e6d5 1px, transparent 1px)',
    btnGradient: 'linear-gradient(135deg, #19e6d5, #0891b2)',
    color: '#19e6d5',
    colorEnd: '#0891b2',
    glowColor: 'rgba(25,230,213,0.35)',
    isDarkHero: true,

    liveUrl: 'https://autocasegen.ruviq.com/',
    extensionUrl: 'https://chrome.google.com/webstore',
    docsUrl: 'https://autocasegen.ruviq.com/docs',
    badge: 'Chrome Extension · Free Forever · No Login',
    tech: ['Chrome Extension (MV3)', 'React', 'TypeScript', 'Monaco Editor', 'Playwright', 'Cypress', 'JavaScript'],
    features: [
      { icon: '⏺️', title: 'Action Recording', description: 'Captures every click, input, select, and navigation event with full element metadata.' },
      { icon: '✅', title: 'Smart Assertions', description: 'Toggle assertion mode to verify text content, visibility, and attribute values mid-recording.' },
      { icon: '📄', title: 'Multi-Page Support', description: 'Auto-detects URL changes and creates separate page objects for each route visited.' },
      { icon: '🏗️', title: 'POM Generator', description: 'Generate Page Object Model architecture with separate page classes and test files.' },
      { icon: '🧪', title: 'Playwright & Cypress', description: 'Output production-ready tests for either framework — TypeScript or JavaScript.' },
      { icon: '💻', title: 'Monaco Editor', description: 'Review and edit generated code in a full VS Code-like editor before downloading.' },
      { icon: '🔑', title: 'Session Keys', description: 'Each recording gets a unique key — manage multiple test flows independently.' },
      { icon: '🔒', title: 'Zero Backend', description: 'Everything runs locally via chrome.storage.local. No server, no database, no account.' },
    ],
    howItWorks: [
      { number: '01', title: 'Install the Extension', description: 'Add AutoCaseGen from the Chrome Web Store in under 30 seconds. No signup required.' },
      { number: '02', title: 'Record Your Flow', description: 'Press "Start Recording". A draggable overlay appears — interact with your app naturally.' },
      { number: '03', title: 'Import Your Session', description: 'Click "Import Steps" — all recorded steps transfer instantly via chrome.storage.local.' },
      { number: '04', title: 'Configure Output', description: 'Choose framework (Playwright/Cypress), language (TS/JS), and mode (POM/Linear).' },
      { number: '05', title: 'Generate & Edit', description: 'Code generated instantly with smart locators. Edit in Monaco editor before downloading.' },
      { number: '06', title: 'Download & Run', description: 'Get a complete ZIP project. Extract and run two commands — tests are live.' },
    ],
    stats: [
      { value: '0', label: 'Servers Required' },
      { value: '100%', label: 'Browser-Native' },
      { value: '2', label: 'Test Frameworks' },
      { value: 'Free', label: 'Forever' },
    ],
    useCases: ['QA Engineers', 'Developers writing E2E tests', 'Teams adopting Playwright/Cypress', 'CI/CD automation pipelines'],
  },

  // ── 4. PerfTestFlow ─────────────────────────────────────────────────────────
  {
    slug: 'perftestflow',
    name: 'PerfTestFlow',
    tagline: 'Analyze API Performance with Ease',
    shortDesc:
      'Transform raw API performance test data into interactive visual insights. Includes a Chrome extension to record real API traffic and a web tool for analysis and reporting.',
    longDesc:
      'PerfTestFlow is a two-part solution for API performance testing. The Chrome extension records real XHR and Fetch requests from your browser — exporting as JMX, HAR, or JSON — then feeds that data directly into the web tool. The web platform converts raw performance test data into interactive charts on throughput, latency, error rates, and scalability. Receive actionable bottleneck detection and download professional reports for your team.',
    category: ['Performance Testing', 'Chrome Extension', 'Web App'],

    logo: '/products/PerfTestFlow-logo.png',
    icon: '/products/perfTestFlowicon.png',

    heroBg: '#000000',
    btnGradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
    color: '#818cf8',
    colorEnd: '#a78bfa',
    glowColor: 'rgba(129,140,248,0.4)',
    isDarkHero: true,

    liveUrl: 'https://perftestflow.ruviq.com/',
    extensionUrl: 'https://chromewebstore.google.com/detail/bnioinjcpojmhgobogfnpcgkpmbhjool',
    badge: 'Chrome Extension + Web Tool · Free',
    tech: ['Python', 'Streamlit', 'Chrome Extension (MV3)', 'JavaScript', 'JMeter', 'Data Visualization'],
    features: [
      { icon: '📊', title: 'Interactive Graphs & Charts', description: 'Clear view of throughput, latency, and error rates with beautiful, interactive visualizations.' },
      { icon: '⚡', title: 'Bottleneck Detection', description: 'Quickly spot slow APIs or high-error endpoints with intelligent analysis and highlighting.' },
      { icon: '📑', title: 'Smart Analysis', description: 'Analyze APIs with load and ramp-up configs, generate professional reports with graphs.' },
      { icon: '🔍', title: 'Error Tracking', description: 'Understand error patterns and failure points with detailed error analytics.' },
      { icon: '📈', title: 'Scalability Insights', description: 'Evaluate how your system handles growing user load with comprehensive scaling analysis.' },
      { icon: '🌐', title: 'Web-Based Access', description: 'No installation needed for the web tool — upload your data and analyze from anywhere.' },
      { icon: '⏺️', title: 'API Traffic Recorder', description: 'Chrome extension captures XHR/Fetch requests and exports to JMX, HAR, or JSON formats.' },
      { icon: '🔗', title: 'JMeter Compatible', description: 'Exports fully compatible JMX and HAR files for use in Apache JMeter, k6, and Postman.' },
    ],
    howItWorks: [
      { number: '01', title: 'Install the Extension', description: 'Add PerfTestFlow Recorder to Chrome. One click — no signup required.' },
      { number: '02', title: 'Record API Traffic', description: 'Click Record, use your app normally. Every XHR and Fetch is captured with headers and timing.' },
      { number: '03', title: 'Run or Export', description: 'Click Run to send traffic to PerfTestFlow directly, or export as JMX/HAR/JSON.' },
      { number: '04', title: 'Visualize & Analyze', description: 'Upload your data into the web tool — instantly get interactive charts on throughput and latency.' },
      { number: '05', title: 'Get Reports', description: 'Spot bottlenecks, understand error patterns, and download professional reports.' },
    ],
    stats: [
      { value: '5–10min', label: 'Avg Analysis Time' },
      { value: '95%', label: 'Time Savings' },
      { value: '4+', label: 'Chart Types' },
      { value: '24/7', label: 'Web Access' },
    ],
    useCases: ['QA Engineers', 'Backend Developers', 'Performance Test Teams', 'Project Stakeholders'],
  },

  // ── 5. Qualixy AI ───────────────────────────────────────────────────────────
  {
    slug: 'qualixy',
    name: 'Qualixy AI',
    tagline: 'Generate Production-Ready Test Cases in Minutes — Not Hours',
    shortDesc:
      'AI-powered Chrome Extension that converts screenshots, user flows, and voice instructions into structured, editable QA test cases — including positive, negative, and edge scenarios.',
    longDesc:
      'Qualixy AI is the most intelligent tool in the Ruviq suite. It sits inside your browser as a Chrome extension and uses AI to understand screenshots of user flows, voice descriptions, and manual inputs — then generates fully structured, editable test case tables covering positive paths, negative scenarios, boundary values, and UI validations. Export instantly to Jira, Zephyr, Azure DevOps, TestRail, Excel, or CSV. The built-in AI QA Assistant can even generate entire regression suites or API validation test plans on demand.',
    category: ['AI Tool', 'Chrome Extension', 'QA Automation'],

    logo: '/products/QualixyByRuviq-logo.png',
    icon: '/products/qualixyIcon.png',

    heroBg: 'linear-gradient(135deg, #f0f4f8, #e2e8f0)',
    btnGradient: 'linear-gradient(135deg, #0d9488, #1a3a5c)',
    btnGradient2: '#1a3a5c',
    color: '#0d9488',
    colorEnd: '#1a3a5c',
    glowColor: 'rgba(13,148,136,0.35)',
    isDarkHero: false,

    liveUrl: 'https://qualixy.ruviq.com/',
    extensionUrl: 'https://chromewebstore.google.com/detail/pfcefpgbpnbmhidcjemanhhjgjigpkff',
    badge: 'AI Powered · Chrome Extension · QA-First',
    tech: ['Chrome Extension (MV3)', 'AI/LLM APIs', 'React', 'TypeScript', 'Voice APIs', 'Jira API', 'Zephyr API'],
    features: [
      { icon: '📸', title: 'Screenshot-Based Generation', description: 'Upload multiple screenshots of a user flow. AI understands UI elements and generates logical test cases.' },
      { icon: '🎙️', title: 'Voice-to-Test Case', description: 'Describe your scenario using voice. AI converts it into structured test cases instantly.' },
      { icon: '🧠', title: 'Smart Edge Case Detection', description: 'Automatically generates boundary value cases, negative cases, validation checks, and UI validations.' },
      { icon: '✏️', title: 'Editable Test Case Table', description: 'Clean UI with inline editing, add/remove steps, modify expected results, and custom fields.' },
      { icon: '📤', title: 'Export & Integration', description: 'Compatible with Jira, Zephyr, Azure DevOps, TestRail, Excel, CSV, and API format.' },
      { icon: '🤖', title: 'AI QA Assistant', description: 'Ask to "Generate regression suite", "Create API validation tests", or "Suggest performance test cases".' },
    ],
    howItWorks: [
      { number: '01', title: 'Install the Extension', description: 'Add Qualixy AI from the Chrome Web Store. No credit card, no account — start immediately.' },
      { number: '02', title: 'Upload Screenshots or Use Voice', description: 'Capture your app flow as screenshots or describe it by voice. Both work seamlessly.' },
      { number: '03', title: 'AI Generates Test Cases', description: 'AI analyzes inputs and produces complete test cases with positive, negative, and edge scenarios.' },
      { number: '04', title: 'Edit & Refine', description: 'Use the inline editor to adjust steps, expected results, and custom fields to your standards.' },
      { number: '05', title: 'Export Anywhere', description: 'One-click export to Jira, Zephyr, Azure DevOps, Excel, CSV, or download as structured format.' },
    ],
    stats: [
      { value: '5+', label: 'Hours Saved / Week' },
      { value: '70%', label: 'Less Documentation Time' },
      { value: '40%', label: 'Improved Test Coverage' },
      { value: '100%', label: 'Standardized Docs' },
    ],
    useCases: ['Manual Testers', 'QA Engineers', 'Project Managers', 'Startups scaling QA'],
  },
];

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
