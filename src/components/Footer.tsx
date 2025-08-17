import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Ravi Pratap Singh</h3>
            <p className="text-gray-300 mb-4">
              Senior QA Engineer specializing in automation, API testing, and performance optimization.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:rps.rajputt@gmail.com" className="hover:text-white transition-colors">
                  rps.rajputt@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+919079488750" className="hover:text-white transition-colors">
                  +91 90794 88750
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-left inline-block">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Me</a></li>
              <li><a href="/experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="/certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/rpsrajputt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/rps-rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/rps_rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                title="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/rps__003/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-left">
              {/* <a
                href="mailto:rps.rajputt@gmail.com"
                className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Ravi Pratap Singh. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;