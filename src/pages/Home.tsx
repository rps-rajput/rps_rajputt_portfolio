import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    { icon: Trophy, text: '4+ Years Experience', color: 'text-blue-600' },
    { icon: Calendar, text: 'Automation & QA Specialist', color: 'text-orange-600' },
    { icon: Calendar, text: 'Process Improvement', color: 'text-teal-600' },
    { icon: Calendar, text: 'Cloud Certified', color: 'text-purple-600' },
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

      {/* Skills Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Expertise</h2>
            <p className="text-lg text-gray-600">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Cypress', 'Playwright', 'JMeter', 'Postman', 'JavaScript', 'TypeScript', 'Azure DevOps', 'Git/GitHub', 'GitLab', 'Jira', 'Confluence', 'AWS'].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">{skill.substring(0, 2)}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/skills"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Skills
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Role</h2>
            <p className="text-lg text-gray-600">Where I'm making an impact</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior QA Engineer</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">Softway Solution Pvt. Ltd.</p>
              <p className="text-gray-600 mb-6">July 2022 - Present</p>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Leading automation initiatives across multiple projects including Daikin MatchupXpress Tool, 
                Daikin SplitXpress, Daikin FIT, and Code Ninjas Marketing Website. Improved test efficiency 
                by 40-50% through comprehensive automation frameworks.
              </p>
              <Link
                to="/experience/softway-solution"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section near footer */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help ensure the quality of your software products.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Home;