import React from 'react';
import { Calendar, MapPin, ArrowRight, Building, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      id: 'softway-solution',
      company: 'Softway Solution Pvt. Ltd.',
      role: 'Senior QA Engineer',
      duration: 'July 2022 - Present',
      location: 'Remote',
      type: 'Full-time',
      projects: 7,
      achievements: [
        'Led automation testing for 4 major projects',
        'Improved test efficiency by 40-50%',
        'Implemented comprehensive API testing strategies',
        'Established DevOps integration practices'
      ],
      technologies: ['Cypress', 'Playwright', 'Postman', 'JMeter', 'Azure DevOps', 'AWS', 'GitLab', "Jira", "Confluence","Git/Github", "AI Tools"],
      description: 'Leading comprehensive QA initiatives across multiple high-impact projects including Daikin enterprise tools and Code Ninjas marketing platform.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'wise-app',
      company: 'Wise App',
      role: 'QA Analyst Intern',
      duration: 'March 2022 - July 2022',
      location: 'Remote',
      type: 'Internship',
      projects: 1,
      achievements: [
        'Implemented Playwright automation framework',
        'Conducted cross-browser compatibility testing',
        'Collaborated with development team on CI/CD',
        'Reduced manual testing effort by 30-40%'
      ],
      technologies: ['Playwright', 'JavaScript', 'Git', 'Jira', 'BrowserStack'],
      description: 'Focused on automation testing using Playwright and cross-browser testing methodologies.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      id: 'saleassist',
      company: 'SaleAssist.ai',
      role: 'Quality Analyst Intern',
      duration: 'November 2021 - March 2022',
      location: 'Remote',
      type: 'Internship',
      projects: 1,
      achievements: [
        'Established QA processes from ground up',
        'Built automation framework with Selenium & Pytest',
        'Implemented manual testing procedures',
        'Created comprehensive test documentation'
      ],
      technologies: ['Selenium', 'Python', 'Pytest', 'Manual Testing'],
      description: 'First QA hire responsible for establishing quality assurance processes in a fast-growing AI startup.',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Experience</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            4+ years of progressive experience in Quality Assurance across diverse industries and environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-16 last:mb-0">
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
                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

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

                    {/* Action */}
                    <Link
                      to={`/experience/${exp.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      View Detailed Experience
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Career Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">6</div>
              <div className="text-gray-300">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">30-40%</div>
              <div className="text-gray-300">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;