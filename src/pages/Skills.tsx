import React from 'react';
import { Code, Database, Cloud, Settings, TestTube, GitBranch, Monitor, Shield, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: TestTube,
      title: 'Automation Tools',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Cypress', level: 95 },
        { name: 'Playwright', level: 90 },
        { name: 'LCNC Automation', level: 85 },
        { name: 'Selenium', level: 70 }
      ]
    },
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'SQL', level: 70 },
        { name: 'Python', level: 60 }
      ]
    },
    {
      icon: Database,
      title: 'API & Performance Testing',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Postman', level: 95 },
        { name: 'JMeter', level: 85 },
        { name: 'REST API Testing', level: 90 },
        { name: 'Load Testing', level: 80 }
      ]
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Azure DevOps', level: 95 },
        { name: 'GitLab', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'SonarCloud', level: 70 }
      ]
    },
    {
      icon: Settings,
      title: 'Test Management',
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'Jira', level: 95 },
        { name: 'Confluence', level: 95 },
        { name: 'Zephyr', level: 90 },
        { name: 'Slack', level: 85 }
      ]
    },
    {
      icon: Shield,
      title: 'Agile Practices',
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Scrum', level: 90 },
        { name: 'Kanban', level: 85 },
        { name: 'Test-Driven Development', level: 80 },
        { name: 'Behavior-Driven Development', level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Google Cloud', level: 65 }
      ]
    },
    {
      icon: Monitor,
      title: 'Monitoring & Analytics',
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'FullStory', level: 90 },
        { name: 'Lighthouse', level: 80 },
        { name: 'Google Analytics', level: 75 }
      ]
    },
    {
      icon: Brain,
      title: 'AI Tools & Assistants',
      color: 'from-violet-500 to-violet-600',
      skills: [
        { name: 'ChatGPT', level: 95 },
        { name: 'Gemini', level: 90 },
        { name: 'Claude', level: 85 },
        { name: 'Perplexity', level: 80 }
      ]
    },
    {
      icon: Globe,
      title: 'Development Platforms',
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'Cursor', level: 95 },
        { name: 'Loveable', level: 90 },
        { name: 'Replit', level: 90 },
        { name: 'TRAE', level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across testing frameworks, programming languages, and quality assurance tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center">
                  <category.icon className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Legend */}
        <div className="bg-gray-50 rounded-xl p-6 mb-16">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Expert (90%+)</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Advanced (80-89%)</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Intermediate (70-79%)</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Beginner (60-69%)</span>
            </div>
          </div>
        </div>

        {/* Professional Philosophy */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">AI-Enhanced QA Excellence</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Leveraging cutting-edge AI tools and modern development platforms to enhance testing efficiency and quality. 
            I integrate AI-powered assistants into my workflow to deliver innovative testing solutions and accelerate development cycles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">35+</div>
              <div className="text-gray-300">Tools & Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400 mb-2">10</div>
              <div className="text-gray-300">Skill Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">AI-Enhanced Workflow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;