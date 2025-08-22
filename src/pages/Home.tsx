import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Shield, Calendar, Trophy, Cloud, CheckCircle, Target, Zap, Users, Building, ExternalLink, TestTube, Code, Database, GitBranch, Brain, Globe, BarChart, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    { icon: Trophy, text: '4+ Years Experience', color: 'text-blue-600' },
    { icon: Shield, text: 'Automation & QA Specialist', color: 'text-orange-600' },
    { icon: Calendar, text: 'Process Improvement', color: 'text-teal-600' },
    { icon: Cloud, text: 'Cloud Certified', color: 'text-purple-600' },
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

  const experiences = [
    {
      company: 'Softway Solution Pvt. Ltd.',
      role: 'Senior QA Engineer',
      duration: 'July 2022 - Present',
      location: 'Remote',
      projects: 7,
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
      projects: 1,
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
      projects: 1,
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

  const projects = [
    {
      name: 'PreftestPro',
      description: 'AI-powered API performance analyzer that provides intelligent insights and recommendations for API optimization.',
      keyFeatures: [
        'Real-time API performance monitoring',
        'AI-powered bottleneck detection',
        'Comprehensive performance analytics',
        'Automated optimization recommendations'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'Replit', 'Cursor AI'],
      github: 'https://github.com/rps-rajput/Preftestpro',
      live: 'https://perftestpro.created.app/',
      icon: BarChart,
      screenshot: '/PerfTestPro.jpg',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'API Verify Toolkit',
      description: 'Postman-to-HTML/PDF converter that transforms API documentation into beautiful, shareable formats.',
      keyFeatures: [
        'Postman collection import and parsing',
        'Beautiful HTML documentation generation',
        'Professional PDF export capabilities',
        'Interactive API explorer interface'
      ],
      technologies: ['Node.js', 'React', 'Loveable', 'TRAE AI', 'Bootstrap'],
      github: 'https://github.com/rps-rajput/api-verify-toolkit',
      live: 'https://api-documentation.lovable.app/',
      icon: FileText,
      screenshot: '/API_Documentation.jpg',
      gradient: 'from-emerald-400 to-cyan-500'
    },
    {
      name: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built using AI-powered development tools and cutting-edge technologies.',
      keyFeatures: [
        'Responsive design optimized for all devices',
        'Interactive contact form with EmailJS integration',
        'Professional certifications showcase',
        'AI-enhanced development workflow'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
      github: 'https://github.com/rps-rajput/rps_rajputt_portfolio',
      live: 'https://rps-portfolio.netlify.app/',
      icon: Globe,
      screenshot: '/Portfolio.jpg',
      gradient: 'from-blue-500 to-purple-600'
    }
  ];

  const skillCategories = [
    {
      icon: TestTube,
      title: 'Automation Tools',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Cypress', level: 'expert' },
        { name: 'Playwright', level: 'advanced' },
        { name: 'LCNC Automation', level: 'advanced' },
        { name: 'Selenium', level: 'intermediate' }
      ]
    },
    {
      icon: Code,
      title: 'Programming',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'JavaScript', level: 'expert' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'SQL', level: 'intermediate' },
        { name: 'Python', level: 'intermediate' }
      ]
    },
    {
      icon: Database,
      title: 'API & Performance',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Postman', level: 'expert' },
        { name: 'JMeter', level: 'advanced' },
        { name: 'REST API Testing', level: 'expert' },
        { name: 'Load Testing', level: 'advanced' }
      ]
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Azure DevOps', level: 'expert' },
        { name: 'GitLab', level: 'advanced' },
        { name: 'GitHub Actions', level: 'advanced' },
        { name: 'SonarCloud', level: 'intermediate' }
      ]
    },
    {
      icon: Brain,
      title: 'AI Tools',
      color: 'from-violet-500 to-violet-600',
      skills: [
        { name: 'ChatGPT', level: 'expert' },
        { name: 'Gemini', level: 'expert' },
        { name: 'Claude', level: 'advanced' },
        { name: 'Perplexity', level: 'advanced' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'AWS', level: 'advanced' },
        { name: 'Microsoft Azure', level: 'advanced' },
        { name: 'Google Cloud', level: 'intermediate' }
      ]
    }
  ];

  const getSkillBadgeColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
                Results-driven QA Engineer with <strong>4+ years of experience</strong> in 
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
                  href="https://drive.google.com/uc?export=download&id=1nwKr7uXGx_97iYAbuu_zO6h6b529jj6F"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                With over 4 years of experience in Quality Assurance, I've had the privilege of working 
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
            <p className="text-lg text-gray-600">4+ years of progressive experience in Quality Assurance</p>
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
                              Full-time
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
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {index === 0 && "Leading comprehensive QA initiatives across multiple high-impact projects including Daikin enterprise tools and Code Ninjas marketing platform."}
                        {index === 1 && "Focused on automation testing using Playwright and cross-browser testing methodologies."}
                        {index === 2 && "First QA hire responsible for establishing quality assurance processes in a fast-growing AI startup."}
                      </p>

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

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Projects</h2>
            <p className="text-lg text-gray-600">Innovative tools and applications designed to enhance testing workflows</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-8 h-8" />
                    <span className="px-3 py-1 bg-green-500 rounded-full text-sm">Active</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <div className="bg-gray-200 rounded-lg h-32 overflow-hidden mb-4">
                      <img
                        src={project.screenshot}
                        alt={`${project.name} Screenshot`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="fallback hidden h-full w-full bg-gray-200 items-center justify-center">
                        <project.icon className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600">Comprehensive expertise across testing frameworks, programming languages, and quality assurance tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center">
                    <category.icon className="w-8 h-8 mr-3" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-900 font-medium">{skill.name}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSkillBadgeColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Legend */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Proficiency Levels</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full border bg-green-100 text-green-800 border-green-200 mr-2">
                  expert
                </span>
                <span className="text-sm text-gray-700">Advanced expertise & leadership</span>
              </div>
              <div className="flex items-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full border bg-blue-100 text-blue-800 border-blue-200 mr-2">
                  advanced
                </span>
                <span className="text-sm text-gray-700">Proficient with complex tasks</span>
              </div>
              <div className="flex items-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full border bg-yellow-100 text-yellow-800 border-yellow-200 mr-2">
                  intermediate
                </span>
                <span className="text-sm text-gray-700">Solid understanding & application</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/skills"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Detailed Skills
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
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
                href="https://drive.google.com/uc?export=download&id=1nwKr7uXGx_97iYAbuu_zO6h6b529jj6F"
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
              <h3 className="text-xl font-bold mb-2">View Projects</h3>
              <p className="text-gray-300 mb-4">Explore my GitHub repositories</p>
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
                <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
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