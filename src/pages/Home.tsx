import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Shield, Calendar, Trophy, Cloud, CheckCircle, Target, Zap, Users, Building, ExternalLink, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillsSection from '../components/SkillsSection';
import { getExperienceDisplay, getExperienceYearsLabel, getExperienceYearsForCounter } from '../utils/experience';
import { RESUME_DOWNLOAD_URL } from '../constants/resume';
import RoleProgression from '../components/RoleProgression';
import { SOFTWAY_PROGRESSION, SOFTWAY_SUMMARY, type SoftwayProgressionRole } from '../data/softwayCareer';

const Home = () => {
  const expDisplay = getExperienceDisplay();

  type ExperienceItem = {
    company: string;
    role: string; // current title shown on card
    duration: string;
    location: string;
    type: string;
    projects: number;
    summary: string;
    achievements: string[];
    technologies: string[];
    gradient: string;
    progression?: SoftwayProgressionRole[];
  };

  const highlights = [
    { icon: Trophy, text: `${expDisplay} Years Experience`, color: 'text-blue-600' },
    { icon: Shield, text: 'Automation & QA Specialist', color: 'text-orange-600' },
    { icon: Calendar, text: 'Process Improvement', color: 'text-teal-600' },
    { icon: Cloud, text: 'Cloud Certified', color: 'text-purple-600' },
    { icon: Brain, text: 'AI-Powered QA & Tools', color: 'text-violet-600' },
  ];

  const achievements = [
    'Improved test efficiency by 40% through automation',
    'Led QA processes for 10+ projects',
    'Reduced manual testing effort by 60%',
    'Implemented CI/CD pipelines across multiple projects',
    'Mentored junior QA engineers',
    'Established QA best practices in startup environments'
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Committed to delivering bug-free software through comprehensive testing strategies.'
    },
    {
      icon: Zap,
      title: 'Automation Advocate',
      description: 'Passionate about automating repetitive tasks to improve efficiency and reliability.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong believer in cross-functional teamwork and knowledge sharing.'
    }
  ];

  const experiences: ExperienceItem[] = [
    {
      company: 'Softway Solution Pvt. Ltd.',
      role: 'Software Engineer II',
      duration: 'July 2022 - Present',
      location: 'Remote',
      type: 'Full-time',
      projects: 7,
      summary: SOFTWAY_SUMMARY,
      progression: SOFTWAY_PROGRESSION,
      achievements: [
        'Led automation testing for 4 major projects',
        'Improved test efficiency by 40-50%',
        'Implemented comprehensive API testing strategies',
        'Established DevOps integration practices'
      ],
      technologies: ['Cypress', 'Playwright', 'Postman', 'JMeter', 'Azure DevOps', 'AWS', 'GitLab'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      company: 'Wise App',
      role: 'QA Analyst Intern',
      duration: 'March 2022 - July 2022',
      location: 'Remote',
      type: 'Internship',
      projects: 1,
      summary:
        'Focused on automation testing using Playwright and cross-browser testing methodologies, collaborating closely with developers to improve release confidence.',
      achievements: [
        'Implemented Playwright automation framework',
        'Conducted cross-browser compatibility testing',
        'Collaborated with development team on CI/CD',
        'Reduced manual testing effort by 30-40%'
      ],
      technologies: ['Playwright', 'JavaScript', 'Git', 'Jira', 'BrowserStack'],
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      company: 'SaleAssist.ai',
      role: 'Quality Analyst Intern',
      duration: 'November 2021 - March 2022',
      location: 'Remote',
      type: 'Internship',
      projects: 1,
      summary:
        'First QA hire responsible for establishing QA processes from scratch in a fast-growing AI startup environment.',
      achievements: [
        'Established QA processes from ground up',
        'Built automation framework with Selenium & Pytest',
        'Implemented manual testing procedures',
        'Created comprehensive test documentation'
      ],
      technologies: ['Selenium', 'Python', 'Pytest', 'Manual Testing'],
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  // Products from Ruviq (driven by shared data — brand colors + real icons)
  const ruviqProducts = [
    {
      name: 'APIQuill',
      slug: 'apiquill',
      description: 'Convert Postman collections to professional HTML & PDF API documentation instantly. No backend, no login.',
      badge: 'API Documentation · Free',
      color: '#3b82f6',
      colorEnd: '#7c3aed',
      btnGradient: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
      icon: '/products/APIQuillicons.png',
      tags: ['React', 'TypeScript', 'Browser-Native'],
    },
    {
      name: 'AutoCaseGen',
      slug: 'autocasegen',
      description: 'Record browser interactions via Chrome extension and generate production-ready Playwright or Cypress test code.',
      badge: 'Chrome Extension · Test Automation',
      color: '#19e6d5',
      colorEnd: '#0891b2',
      btnGradient: 'linear-gradient(135deg, #19e6d5, #0891b2)',
      icon: '/products/autoCaseGenIcon.png',
      tags: ['Chrome Extension', 'Playwright', 'Cypress'],
    },
    {
      name: 'PerfTestFlow',
      slug: 'perftestflow',
      description: 'Transform raw API performance data into interactive visual insights. Includes a Chrome extension to record real traffic.',
      badge: 'Performance Testing · Web App',
      color: '#7C3AED',
      colorEnd: '#5b21b6',
      btnGradient: 'linear-gradient(135deg, #7C3AED, #5b21b6)',
      icon: '/products/perfTestFlowicon.png',
      tags: ['Python', 'Streamlit', 'Chrome Extension'],
    },
    {
      name: 'Qualixy AI',
      slug: 'qualixy',
      description: 'AI-powered Chrome Extension that converts screenshots and voice instructions into structured QA test cases.',
      badge: 'AI Tool · Chrome Extension',
      color: '#0d9488',
      colorEnd: '#1a3a5c',
      btnGradient: 'linear-gradient(135deg, #0d9488, #1a3a5c)',
      icon: '/products/qualixyIcon.png',
      tags: ['AI/LLM', 'Chrome Extension', 'QA'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/809970354d3f40caa2f4fc10648d3849'
    },
    {
      name: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/2810fe72235440b19f57b47f8a17590f'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2025',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/RaviPratapSingh-4350/4789772A6B871C98?sharingId=31DD7BBAEE538342'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 mb-2">
                  <strong>Hi I'm</strong>
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Ravi Pratap Singh
                </h1>
              </div>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
                Senior QA Engineer
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Results-driven QA Engineer with <strong>{getExperienceYearsLabel()}</strong> of experience in 
                Automation Testing, API Testing, Performance Testing, and DevOps Integration. 
                Passionate about delivering quality software through comprehensive testing strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 min-h-[48px] text-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href={RESUME_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 sm:py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 min-h-[48px] w-full sm:w-auto"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-6">
                <a
                  href="https://www.linkedin.com/in/rpsrajputt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 -m-2"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/rps-rajput"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 -m-2"
                >
                  <Github className="w-6 h-6" />
                </a>
                
                <div className="flex items-center text-gray-600 p-2 -m-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20 absolute -top-4 -left-4"></div>
                <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden relative shadow-lg">
                  <img 
                    src="/pic.jpg" 
                    alt="Ravi Pratap Singh - Senior QA Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Highlights</h2>
            <p className="text-lg text-gray-600">Key achievements and certifications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <highlight.icon className={`w-12 h-12 mx-auto mb-4 ${highlight.color}`} />
                <p className="text-gray-900 font-semibold">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Results-driven QA Engineer with expertise in automation, API testing, and performance optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over {getExperienceYearsForCounter()} years of experience in Quality Assurance, I've had the privilege of working 
                across diverse environments - from dynamic startups to established enterprises. My career 
                began at SaleAssist.ai, where I established the foundation of QA processes from scratch.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Wise App, I honed my automation skills with Playwright and cross-browser testing, 
                collaborating closely with development teams to ensure seamless integration of quality 
                practices into the development lifecycle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently at Softway Solution Pvt. Ltd., I lead automation initiatives across multiple 
                high-impact projects, consistently delivering robust testing solutions that have improved 
                overall product quality and reduced time-to-market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
              <div
                key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600">{getExperienceYearsLabel()} of progressive experience in Quality Assurance</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10"></div>

                {/* Content */}
                <div className="ml-20">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${exp.gradient} p-6 text-white`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                          <h4 className="text-xl opacity-90 mb-2">{exp.company}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                            </div>
                            <span className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end">
                          <div className="flex items-center mb-2">
                            <Building className="w-5 h-5 mr-2" />
                            <span>{exp.projects} Projects</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">{exp.summary}</p>

                      {exp.progression && exp.progression.length > 0 && (
                        <RoleProgression roles={exp.progression} />
                      )}

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/experience"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Detailed Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ruviq Products Showcase */}
      <section
        style={{
          padding: '72px 0',
          background: 'linear-gradient(160deg, #06080f 0%, #0d1428 60%, #080a18 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', top: -100, right: -100, width: 400, height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)',
                borderRadius: 30, padding: '5px 16px', marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 20, height: 20, borderRadius: 6,
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, fontWeight: 900, color: 'white',
                }}
              >R</div>
              <span style={{ color: '#a78bfa', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>
                Ruviq · My SaaS Products
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 900, marginBottom: 14,
                letterSpacing: '-1px', lineHeight: 1.1,
                background: 'linear-gradient(135deg, #f8fafc 0%, #a78bfa 50%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
            >
              My Products & SaaS Tools
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 15, maxWidth: 540, margin: '0 auto' }}>
              Real-world tools built under my brand <span style={{ color: '#a78bfa', fontWeight: 600 }}>Ruviq</span> — from AI test case generators to performance testing platforms.
            </p>
          </div>

          {/* Product mini-cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 16,
              marginBottom: 40,
            }}
          >
            {ruviqProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                style={{ textDecoration: 'none', display: 'flex' }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid rgba(255,255,255,0.09)`,
                    borderRadius: 16,
                    padding: '22px 20px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.22s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    width: '100%',
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.border = `1px solid ${p.color}55`;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = `0 18px 40px rgba(0,0,0,0.4), 0 0 30px ${p.color}20`;
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.border = '1px solid rgba(255,255,255,0.09)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Brand gradient top line */}
                  <div
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                      background: p.btnGradient,
                      opacity: 0.7,
                    }}
                  />
                  {/* Real product icon */}
                  <div style={{ height: 40, marginBottom: 14, display: 'flex', alignItems: 'center' }}>
                    <img
                      src={p.icon}
                      alt={p.name}
                      style={{ height: '100%', width: 40, objectFit: 'contain', borderRadius: 10 }}
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = 'none';
                        const fb = el.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                    <div style={{
                      display: 'none', width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `${p.color}20`, border: `1px solid ${p.color}40`,
                      alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13 }}>{p.name.slice(0, 2).toUpperCase()}</span>
                    </div>
                  </div>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 5 }}>{p.name}</h3>
                  <p style={{ color: p.color, fontSize: 10, fontWeight: 600, marginBottom: 10, letterSpacing: '0.04em' }}>{p.badge}</p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12.5, lineHeight: 1.65, marginBottom: 14, flex: 1 }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 5 }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 5, padding: '2px 7px', fontSize: 9.5, color: 'rgba(255,255,255,0.45)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/products"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: 'white', fontWeight: 700, fontSize: 14, borderRadius: 12,
                textDecoration: 'none', boxShadow: '0 6px 24px rgba(124,58,237,0.38)',
              }}
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section – same component as Skills page, compact variant */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkillsSection variant="compact" />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-lg text-gray-600">Industry-recognized certifications demonstrating expertise in cloud platforms and AI/ML</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <cert.icon className="w-12 h-12" />
                    <div className="text-right">
                      <div className="text-sm opacity-80">Issued {cert.date}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm opacity-90">{cert.issuer}</p>
                </div>

                <div className="p-6">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Credential
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">6 Professional Certifications</h3>
            <p className="text-lg opacity-90 mb-6">
              AWS Cloud & AI Practitioner • Microsoft Azure Fundamentals Trilogy • Automation Testing
              </p>
              <Link
              to="/certifications"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
              View All Certifications
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how I can help ensure the quality of your software products through 
              comprehensive testing strategies and innovative automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
              <p className="text-gray-300 mb-4">Ready to discuss your testing needs</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Download Resume</h3>
              <p className="text-gray-300 mb-4">View my complete professional profile</p>
              <a
                href={RESUME_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                Download CV
                <Download className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">View Products</h3>
              <p className="text-gray-300 mb-4">Explore my Ruviq SaaS products</p>
              <a
                href="https://github.com/rps-rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                GitHub Profile
                <Github className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{expDisplay}</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                <div className="text-gray-300">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;