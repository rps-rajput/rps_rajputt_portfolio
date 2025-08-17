import React from 'react';
import { Award, Calendar, Target, Users, Zap, CheckCircle } from 'lucide-react';

const About = () => {
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

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Results-driven QA Engineer with expertise in automation, API testing, and performance optimization
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
          <div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
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
            </div>
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

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Branding */}
        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Professional Philosophy</h2>
          <blockquote className="text-xl italic text-gray-300 mb-8 max-w-4xl mx-auto">
            "Quality is not an act, it is a habit. I believe in building robust, scalable testing 
            frameworks that not only catch bugs but prevent them from occurring in the first place."
          </blockquote>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">AWS Certified</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">4+ Years</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Quality Focused</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;