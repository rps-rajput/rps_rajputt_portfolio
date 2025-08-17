import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // EmailJS configuration - replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio_contact';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio_contact';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';

      // Check if EmailJS is properly configured
      if (publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        // Fallback: redirect to mailto for now
        const mailtoLink = `mailto:rps.rajputt@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'rps.rajputt@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rps.rajputt@gmail.com',
      href: 'mailto:rps.rajputt@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 90794 88750',
      href: 'tel:+919079488750'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rpsrajputt/',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rps-rajput',
      color: 'text-gray-700 hover:text-gray-900'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/rps_rajput',
      color: 'text-blue-500 hover:text-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rps__003/',
      color: 'text-pink-600 hover:text-pink-700'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your QA needs? Let's connect and explore how I can help ensure the quality of your software products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">{info.label}</div>
                    <div className="text-lg font-medium text-gray-900">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect on Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Info */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Summary</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 4+ years of QA engineering experience</li>
                <li>• Specialized in automation, API scripting and testing</li>
                <li>• Test case creation, management and execution</li>
                <li>• AWS and Azure certified professional</li>
                <li>• Available for full-time opportunities</li>
                <li>• Open to remote and hybrid work arrangements</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon at rps.rajputt@gmail.com.</p>
              </div>
            ) : submitError ? (
              <div className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Error Sending Message</h3>
                <p className="text-gray-600 mb-4">
                  There was an issue sending your message. Please try again or contact me directly at rps.rajputt@gmail.com.
                </p>
                <button
                  onClick={() => setSubmitError(false)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="project-collaboration">Project Collaboration</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Current Availability</h2>
          <p className="text-lg opacity-90 mb-6">
            I'm currently <strong>open to new opportunities</strong> and would love to discuss how my QA expertise 
            can contribute to your team's success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="font-semibold mb-1">Response Time</div>
              <div className="text-sm opacity-80">Within 24 hours</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="font-semibold mb-1">Availability</div>
              <div className="text-sm opacity-80">Full-time & Contract</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="font-semibold mb-1">Work Preference</div>
              <div className="text-sm opacity-80">Remote & Hybrid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;