import React from 'react';
import { Award, Calendar, ExternalLink, Cloud, Database, Monitor, Brain, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CCP-2024',
      description: 'Fundamental understanding of AWS cloud services, security, architecture, pricing, and support.',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      skills: ['AWS Services', 'Cloud Architecture', 'Security', 'Pricing Models'],
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/809970354d3f40caa2f4fc10648d3849'
    },
    {
      name: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: 'AWS-AIP-2025',
      description: 'Knowledge of AI/ML services on AWS and best practices for implementing AI solutions.',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      skills: ['Machine Learning', 'AI Services', 'SageMaker', 'Data Analysis'],
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/2810fe72235440b19f57b47f8a17590f'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2025',
      credentialId: 'AZ-900',
      description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance'],
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/RaviPratapSingh-4350/4789772A6B871C98?sharingId=31DD7BBAEE538342'
    },
    {
      name: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: '2025',
      credentialId: 'AI-900',
      description: 'Understanding of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
      icon: Brain,
      color: 'from-indigo-500 to-indigo-600',
      skills: ['Azure AI', 'Cognitive Services', 'ML Studio', 'Bot Framework'],
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/RaviPratapSingh-4350/8FCEE78999C556FF?sharingId=31DD7BBAEE538342'
    },
    {
      name: 'Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'DP-900',
      description: 'Core data concepts and how they are implemented using Microsoft Azure data services.',
      icon: Database,
      color: 'from-teal-500 to-teal-600',
      skills: ['Data Services', 'SQL Database', 'Cosmos DB', 'Data Analytics'],
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/RaviPratapSingh-4350/9AB89C35A11DC03D?sharingId'
    },
    {
      name: 'Automation Testing Certifications',
      issuer: 'International Software Testing Qualifications Board',
      date: '2023',
      credentialId: 'Cypress',
      description: 'Fundamental testing knowledge and best practices in software testing.',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      skills: ['Cypress Automation', 'Automation Test Design', 'Test Management', 'CI/CD Pipeline Integration',"Page Object Model & Data-Driven Testing"],
      link: 'https://drive.google.com/file/d/16_PxMXqWKQudg8kNa25WCNobt2YzhY_r/view'
    }
  ];

  const stats = [
    { label: 'Total Certifications', value: '6', icon: Award },
    { label: 'Cloud Platforms', value: '2', icon: Cloud },
    { label: 'AI/ML Certifications', value: '2', icon: Brain },
    { label: 'Years Certified', value: '3', icon: Calendar }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Certifications</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud platforms, AI/ML, and quality assurance
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <cert.icon className="w-12 h-12" />
                  <div className="text-right">
                    <div className="text-sm opacity-80">Issued {cert.date}</div>
                    <div className="text-xs opacity-70">ID: {cert.credentialId}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-sm opacity-90">{cert.issuer}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

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

        {/* Learning Path */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certification Journey</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
            
            <div className="space-y-8">
              {[
                { year: '2023', event: 'Started with Different Automation Testing Certifications' },
                { year: '2024', event: 'Achieved AWS Certification Duo – Cloud Practitioner & AI Practitioner' },
                { year: '2025', event: 'Achieved Microsoft Azure Fundamentals Trilogy (AZ-900, AI-900, DP-900)' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-md p-4 max-w-md text-center relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                    <div className="text-lg font-bold text-blue-600 mb-1">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Continuing Education Goals</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Committed to continuous learning and professional development in emerging technologies and advanced testing methodologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Monitor className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI-Powered Test Automation</h3>
              <p className="text-sm opacity-80">Leveraging AI tools for self-healing test scripts and defect prediction</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Brain className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Generative AI for QA</h3>
              <p className="text-sm opacity-80">Using AI copilots to auto-generate test cases and analyze logs</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Shield className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Security Testing</h3>
              <p className="text-sm opacity-80">Advanced security and penetration testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;