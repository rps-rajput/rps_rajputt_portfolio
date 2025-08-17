import React from 'react';
import { Calendar, MapPin, ArrowLeft, Users, Target, Zap, Code, Monitor, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const WiseAppExperience = () => {
  const responsibilities = [
    'Implemented comprehensive automation testing framework using Playwright',
    'Conducted cross-browser compatibility testing across Chrome, Firefox, Safari, and Edge',
    'Collaborated closely with development team on CI/CD pipeline integration',
    'Performed functional and regression testing for web applications',
    'Created and maintained test documentation and bug reports',
    'Participated in agile development processes and sprint planning'
  ];

  const achievements = [
    'Reduced manual testing effort by 50% through Playwright automation',
    'Improved cross-browser compatibility testing coverage to 95%',
    'Established automated testing best practices for the development team',
    'Contributed to 30% faster release cycles through efficient testing processes'
  ];

  const technologies = [
    'Playwright', 'JavaScript', 'Git', 'HTML/CSS', 'Postman', "Jira", "Confluence", "Git/Github","Slack","BrowserStack", "Jmeter", "Cross-Browser Testing"
  ];

  const keyLearnings = [
    {
      icon: Monitor,
      title: 'Cross-Browser Testing',
      description: 'Mastered testing across multiple browsers and devices to ensure consistent user experience'
    },
    {
      icon: Code,
      title: 'Playwright Framework',
      description: 'Developed expertise in modern automation framework with advanced capabilities'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Integration',
      description: 'Learned to integrate automated tests into continuous integration pipelines'
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
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">QA Analyst Intern</h1>
              <h2 className="text-xl opacity-90 mb-4">Wise App</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  March 2022 - July 2022
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remote
                </div>
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full">Internship</span>
              </div>
              <p className="text-lg opacity-90 leading-relaxed">
                Focused on automation testing using Playwright and establishing cross-browser testing 
                methodologies while collaborating closely with the development team.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm opacity-80">Months Duration</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm opacity-80">Manual Effort Reduction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Responsibilities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-teal-600" />
                Key Responsibilities
              </h3>
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-600" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-yellow-500" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Learnings & Growth</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyLearnings.map((learning, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <learning.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">{learning.title}</h4>
                <p className="text-gray-600">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-gray-900 to-teal-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Professional Impact</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            This internship was pivotal in developing my automation testing skills and understanding of 
            modern QA practices. The experience with Playwright and cross-browser testing laid the 
            foundation for my expertise in test automation frameworks and collaborative development processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WiseAppExperience;