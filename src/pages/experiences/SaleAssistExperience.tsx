import React from 'react';
import { Calendar, MapPin, ArrowLeft, Users, Target, Zap, Code, Lightbulb, FileText, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaleAssistExperience = () => {
  const responsibilities = [
    'Established QA processes and procedures from ground zero',
    'Built initial test automation framework using Selenium and Pytest',
    'Implemented manual testing protocols for AI-powered features',
    'Created comprehensive test documentation and bug tracking systems',
    'Collaborated with founders to define quality standards and acceptance criteria',
    'Performed exploratory testing for new feature validation'
  ];

  const achievements = [
    'Successfully established the first QA department in the company',
    'Created foundational testing framework that scaled with company growth',
    'Implemented quality gates that reduced production bugs by 70%',
    'Ensured reliable real-time video and streaming across users, networks, and devices.'
  ];

  const technologies = [
    'Selenium WebDriver', 'Python', 'Pytest', 'Manual Testing', 'Bug Tracking', 'Test Documentation', "Jira", "Confluence"
  ];

  const challenges = [
    {
      icon: Lightbulb,
      title: 'Building from Scratch',
      description: 'Created QA processes, documentation, and frameworks in a company with no prior QA structure',
      solution: 'Established comprehensive testing protocols and best practices documentation'
    },
    {
      icon: Rocket,
      title: 'Startup Environment',
      description: 'Adapted to rapid development cycles and changing requirements in a fast-paced startup',
      solution: 'Implemented flexible testing approaches that could evolve with business needs'
    },
    {
      icon: Target,
      title: 'Video Conferencing & Live Streaming QA',
      description: 'Ensured reliable real-time video and streaming across users, networks, and devices.',
      solution: 'Designed functional and performance tests to validate audio/video sync, low latency, and multi-user stability.'
    }
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
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Quality Analyst Intern</h1>
              <h2 className="text-xl opacity-90 mb-4">SaleAssist.ai</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  November 2021 - March 2022
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remote
                </div>
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full">Internship</span>
              </div>
              <p className="text-lg opacity-90 leading-relaxed">
                First QA hire responsible for establishing quality assurance processes in a fast-growing 
                AI startup. Built the foundation for scalable testing practices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">1st</div>
                <div className="text-sm opacity-80">QA Hire</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm opacity-80">Bug Reduction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Responsibilities */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              Key Responsibilities
            </h3>
            <div className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-yellow-500" />
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-green-600" />
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-sm">{tech.substring(0, 2)}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Challenges & Solutions</h3>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start">
                  <challenge.icon className="w-8 h-8 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h4>
                    <p className="text-gray-600 mb-3">{challenge.description}</p>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Solution:</strong> {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Startup Experience */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Startup Experience Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                What I Built
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• Complete QA process documentation</li>
                <li className="text-gray-700">• Automated testing framework architecture</li>
                <li className="text-gray-700">• Bug tracking and reporting systems</li>
                <li className="text-gray-700">• Quality metrics and KPI dashboards</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-orange-600" />
                What I Learned
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• Adaptability in fast-paced environments</li>
                <li className="text-gray-700">• Building processes from scratch</li>
                <li className="text-gray-700">• Cross-functional collaboration</li>
                <li className="text-gray-700">• End-to-end product testing ownership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Career Foundation</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            This internship provided invaluable experience in building QA processes from the ground up. 
            Working in a startup environment taught me the importance of flexibility, rapid learning, 
            and creating scalable solutions that can grow with the business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleAssistExperience;