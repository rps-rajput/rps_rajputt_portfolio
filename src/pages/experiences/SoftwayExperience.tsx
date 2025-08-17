import React from 'react';
import { Calendar, MapPin, ArrowLeft, ExternalLink, Users, Target, Zap, Code, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwayExperience = () => {
  const projects = [
    {
      name: 'Daikin MatchupXpress Tool',
      description: 'Enterprise-level HVAC system configuration and matching tool',
      screenshot: '/daikin-matchup-xpress.jpg',
      responsibilities: [
        'Designed and implemented comprehensive test automation framework using Cypress',
        'Created API testing suites for system integration endpoints',
        'Performed load testing to ensure system scalability',
        'Integrated testing into CI/CD pipeline with Azure DevOps'
      ],
      technologies: ['Cypress', 'Postman', 'JMeter', 'Azure DevOps', 'JavaScript', "Jira", "Confluence", "Git/Github", "AI Tools", "SonarCloud"],
      impact: 'Reduced testing cycles significantly and improved defect detection rate by over 30% by introducing automation and optimized test strategies.'
    },
    {
      name: 'Daikin SplitXpress',
      description: 'Split AC system selection and configuration platform',
      screenshot: '/daikin-split-xpress.jpg',
      responsibilities: [
        'Developed end-to-end test automation using Playwright',
        'Implemented cross-browser testing across Chrome, Firefox, and Safari',
        'Created performance testing scripts for high-traffic scenarios',
        'Established regression testing protocols'
      ],
      technologies: ['Playwright', 'TypeScript', 'AWS', 'Jira', 'GitLab', "Git/Github"],
      impact: 'Achieved 95% test coverage and 40% reduction in manual testing effort'
    },
    {
      name: 'Daikin FIT',
      description: 'Customer-facing HVAC system fitness and recommendation engine',
      screenshot: '/daikin-fit.jpg',
      responsibilities: [
        'Built comprehensive Selenium WebDriver automation suite',
        'Designed API testing framework for recommendation algorithms',
        'Performed security testing for customer data protection',
        'Created automated reporting dashboards'
      ],
      technologies: ["Postman", 'Hubspot',"Zephyr",'REST API', 'MySQL', "Jira"],
      impact: 'Improved system reliability by 45% and reduced critical bugs by 60%'
    },
    {
      name: 'Code Ninjas Marketing Website',
      description: 'Educational platform marketing and lead generation website',
      screenshot: '/code-ninjas.jpg',
      responsibilities: [
        'Implemented mobile-responsive testing across devices',
        'Created automated form validation and submission testing',
        'Performed SEO and accessibility testing',
        'Established A/B testing protocols for conversion optimization'
      ],
      technologies: ['Cypress', 'Lighthouse', 'Hubspot', 'GitLab CI'],
      impact: 'Achieved a 25% uplift in conversion rate by driving quality improvements across functionality, UI, and performance.'
    }
  ];

  const responsibilities = [
    'Lead automation testing initiatives across multiple enterprise projects',
    'Design and implement comprehensive test frameworks using Cypress, Playwright, and Selenium',
    'Perform API testing and validation using Postman and custom automation scripts',
    'Conduct performance testing with JMeter for scalability validation',
    'Integrate testing workflows into CI/CD pipelines using Azure DevOps and GitLab',
    'Collaborate with development teams to establish quality gates and best practices',
    'Mentor junior QA team members and conduct knowledge sharing sessions',
    'Create and maintain test documentation and reporting dashboards'
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          to="/experience"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Experience
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Senior QA Engineer</h1>
              <h2 className="text-xl opacity-90 mb-4">Softway Solution Pvt. Ltd.</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  July 2022 - Present
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remote
                </div>
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full">Full-time</span>
              </div>
              <p className="text-lg opacity-90 leading-relaxed">
                Leading automation initiatives and quality assurance processes across multiple enterprise-level projects, 
                with a focus on HVAC systems and educational platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm opacity-80">Major Projects</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">40-50%</div>
                <div className="text-sm opacity-80">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{responsibility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Portfolio</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h4>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <Target className="w-4 h-4 mr-1" />
                        {project.impact}
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 w-48 h-32 lg:w-56 lg:h-36 rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={project.screenshot} 
                        alt={`${project.name} Screenshot`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NSA0NUgxMTVWNzVIODVWNDVaIiBmaWxsPSIjOUIxMjJDIi8+CjxwYXRoIGQ9Ik05MCA1MEgxMTBWNzBIOTBWNTBaIiBmaWxsPSIjRjNGNEY2Ii8+CjwvZz4KPC9zdmc+';
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-500" />
                        Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {project.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-green-500" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Developed */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills Developed & Enhanced</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Test Automation</h4>
              <p className="text-gray-600 text-sm">Advanced proficiency in Cypress, Playwright, and Selenium frameworks</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">API Testing</h4>
              <p className="text-gray-600 text-sm">Comprehensive API validation and performance testing expertise</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">DevOps Integration</h4>
              <p className="text-gray-600 text-sm">CI/CD pipeline integration and cloud platform expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwayExperience;