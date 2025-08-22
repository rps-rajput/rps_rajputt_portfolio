import React from 'react';
import { ExternalLink, Github, Zap, Database, BarChart, FileText, Code, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'PreftestPro',
      description: 'AI-powered API performance analyzer that provides intelligent insights and recommendations for API optimization.',
      longDescription: 'PreftestPro is a comprehensive API performance analysis tool that leverages artificial intelligence to analyze API response times, throughput, and reliability. It provides actionable insights for performance optimization and helps identify bottlenecks before they impact production.',
      features: [
        'Real-time API performance monitoring',
        'AI-powered bottleneck detection',
        'Comprehensive performance analytics',
        'Automated optimization recommendations',
        'Integration with popular API testing tools',
        'Detailed reporting and visualization'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'Replit', 'Cursor AI', 'HTML/CSS'],
      github: 'https://github.com/rps-rajput/Preftestpro',
      live: 'https://perftestpro.created.app/',
      category: 'Performance Testing',
      status: 'Active',
      icon: BarChart,
      screenshot: '/PerfTestPro.jpg'
    },
    {
      name: 'API Verify Toolkit',
      description: 'Postman-to-HTML/PDF converter that transforms API documentation into beautiful, shareable formats.',
      longDescription: 'API Verify Toolkit streamlines API documentation workflow by converting Postman collections into professionally formatted HTML and PDF documents. Perfect for sharing API documentation with stakeholders, clients, or team members.',
      features: [
        'Postman collection import and parsing',
        'Beautiful HTML documentation generation',
        'Professional PDF export capabilities',
        'Customizable templates and themes',
        'Batch processing for multiple collections',
        'Interactive API explorer interface'
      ],
      technologies: ['Node.js', 'React', 'Loveable','TRAE AI', 'Bootstrap', 'PDF.js'],
      github: 'https://github.com/rps-rajput/api-verify-toolkit',
      live: 'https://api-documentation.lovable.app/',
      category: 'API Testing',
      status: 'Active',
      icon: FileText,
      screenshot: '/API_Documentation.jpg'
    },
    {
      name: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built using AI-powered development tools and cutting-edge technologies.',
      longDescription: 'This portfolio website showcases my professional experience and skills in QA engineering. Built initially with Bolt.new AI-powered tool for rapid prototyping and later refined using Cursor AI for enhanced development productivity. The site features responsive design, modern UI components, and comprehensive sections highlighting my expertise in automation testing, API testing, and performance optimization.',
      features: [
        'Responsive design optimized for all devices',
        'Interactive contact form with EmailJS integration',
        'Professional certifications showcase with verification links',
        'Detailed project portfolio with live demos',
        'AI-enhanced development workflow',
        'Modern Tailwind CSS styling',
        'React Router for seamless navigation',
        'Performance optimized with Vite build system'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS', 'Lucide Icons', 'Bolt.new', 'Cursor AI'],
      github: 'https://github.com/rps-rajput/rps_rajputt_portfolio',
      live: 'https://rps-portfolio.netlify.app/',
      category: 'Web Development',
      status: 'Active',
      icon: Globe,
      screenshot: '/Portfolio.jpg'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-powered analysis for identifying and resolving performance bottlenecks'
    },
    {
      icon: Database,
      title: 'API Testing',
      description: 'Comprehensive tools for API validation, documentation, and testing'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Built with quality and reliability as core principles'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Easy integration with existing development and testing workflows'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications built with AI-powered development tools'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">AI-Powered Projects</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative tools and web applications designed to enhance testing workflows and showcase professional expertise
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className="w-8 h-8 mr-3" />
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-green-500 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-lg opacity-90 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Description & Features */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About the Project</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.longDescription}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Demo */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Screenshot */}
                    <div className="bg-gray-200 rounded-lg h-48 overflow-hidden mb-6">
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
                        <div className="text-center text-gray-500">
                          <project.icon className="w-16 h-16 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Project Screenshot</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View on GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Try Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects and innovative testing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/rps-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;