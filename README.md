# 🚀 Ravi Pratap Singh - Portfolio Website

[![Live Website](https://img.shields.io/badge/Live-Website-blue?style=for-the-badge&logo=vercel)](https://ravipratapsingh.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/rps-rajput/rps_rajputt_portfolio)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> A modern, responsive portfolio website showcasing 4+ years of QA Engineering expertise, built with AI-powered development tools and cutting-edge technologies.

## 🌟 Overview

This portfolio website represents my professional journey as a Senior QA Engineer, highlighting my expertise in automation testing, API testing, performance optimization, and modern development practices. Built initially with **Bolt.new** AI-powered tool for rapid prototyping and later refined using **Cursor AI** for enhanced development productivity.

## 🎯 Features

### 🏠 Core Sections
- **Home Page**: Professional introduction with AI-enhanced greeting
- **About**: Personal journey and professional philosophy
- **Experience**: Detailed work experience with project showcases
- **Skills**: Comprehensive skill matrix with proficiency levels
- **Projects**: AI-powered tools and applications portfolio
- **Certifications**: Industry-recognized credentials with verification links
- **Contact**: Interactive form with EmailJS integration

### 💼 Professional Highlights
- **4+ Years** of QA Engineering experience
- **6 Professional Certifications** (AWS & Azure)
- **AI-Enhanced Development** workflow showcase
- **Responsive Design** optimized for all devices
- **Performance Optimized** with modern build tools

### 🛠️ Technical Features
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Interactive Contact Form** - EmailJS integration
- ✅ **Social Media Integration** - LinkedIn, GitHub, Twitter, Instagram
- ✅ **Certification Verification** - Direct links to credential verification
- ✅ **Project Showcases** - Live demos and GitHub links
- ✅ **Modern UI/UX** - Tailwind CSS with custom components
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Fast Loading** - Vite build system optimization

## 🚀 Live Demo

Visit the live website: **[ravipratapsingh.dev](https://ravipratapsingh.dev)**

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icon library

### Build Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### External Services
- **EmailJS** - Contact form email delivery
- **Google Drive** - Resume hosting
- **Vercel/Netlify** - Deployment platform

### AI Development Tools
- **Bolt.new** - Initial rapid prototyping
- **Cursor AI** - Enhanced development productivity

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn**
- **Git** for version control

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/rps-rajput/rps_rajputt_portfolio.git
cd rps_rajputt_portfolio
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup (Optional)
Create a `.env` file in the root directory for EmailJS configuration:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start Development Server
```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

### Create Production Build
```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

### Preview Production Build
```bash
# Using npm
npm run preview

# Or using yarn
yarn preview
```

## 📁 Project Structure

```
rps_protfolio/
├── public/                     # Static assets
│   ├── pic.jpg                # Professional photo
│   ├── PerfTestPro.jpg        # Project screenshots
│   ├── API_Documentation.jpg
│   ├── Portfolio.jpg
│   └── ...
├── src/                       # Source code
│   ├── components/            # Reusable components
│   │   ├── Footer.tsx         # Footer component
│   │   └── Navbar.tsx         # Navigation component
│   ├── pages/                 # Page components
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About page
│   │   ├── Experience.tsx     # Experience overview
│   │   ├── experiences/       # Detailed experience pages
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── Projects.tsx       # Projects portfolio
│   │   ├── Certifications.tsx # Certifications display
│   │   └── Contact.tsx        # Contact form
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── eslint.config.js          # ESLint configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎨 Customization

### Color Scheme
The website uses a blue and teal gradient theme. To customize colors, modify the Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3B82F6', // Blue
          600: '#2563EB',
        },
        secondary: {
          500: '#14B8A6', // Teal
          600: '#0D9488',
        }
      }
    }
  }
}
```

### Content Updates
- **Personal Information**: Update in respective page components
- **Projects**: Modify `src/pages/Projects.tsx`
- **Experience**: Update `src/pages/experiences/` files
- **Skills**: Modify `src/pages/Skills.tsx`
- **Certifications**: Update `src/pages/Certifications.tsx`

## 📧 EmailJS Setup

To enable the contact form functionality:

1. **Create EmailJS Account**: Sign up at [EmailJS](https://www.emailjs.com/)
2. **Create Email Service**: Set up Gmail, Outlook, or other email service
3. **Create Email Template**: Design your email template
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Update Environment**: Add credentials to `.env` file

### EmailJS Template Variables
```javascript
{
  from_name: "{{from_name}}",
  from_email: "{{from_email}}",
  subject: "{{subject}}",
  message: "{{message}}",
  to_email: "rps.rajputt@gmail.com"
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables for EmailJS
4. Deploy automatically on git push

### Netlify
1. Connect repository to Netlify
2. Build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Configure environment variables
4. Enable continuous deployment

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🎯 Key Components

### Navbar Component
- Responsive navigation with hamburger menu
- Active page highlighting
- Custom breakpoint for brand name display

### Contact Form
- Real-time form validation
- EmailJS integration for email sending
- Success/error state handling
- Fallback mailto link

### Project Showcase
- Live demo and GitHub links
- Technology stack display
- Project screenshots with fallback
- Responsive card layout

### Certification Display
- Verification links that open in new tabs
- Professional credential showcase
- Visual certification timeline
- Future learning goals section

## 🧪 Development Workflow

### AI-Enhanced Development
This project leverages AI tools for enhanced productivity:

1. **Bolt.new**: Used for initial rapid prototyping
2. **Cursor AI**: Enhanced development with AI code completion
3. **AI-Powered Debugging**: Faster issue resolution
4. **Intelligent Refactoring**: Code improvement suggestions

### Code Quality
- **TypeScript**: Type safety and better developer experience
- **ESLint**: Code linting and formatting
- **Component Architecture**: Reusable and maintainable components
- **Responsive Design**: Mobile-first development approach

## 📊 Performance Optimization

- **Vite Build System**: Fast bundling and optimization
- **Code Splitting**: Lazy loading for better performance
- **Image Optimization**: Compressed images in public folder
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Font Optimization**: System fonts for faster loading

## 🔧 Troubleshooting

### Common Issues

1. **EmailJS Not Working**
   - Check environment variables
   - Verify EmailJS credentials
   - Test with mailto fallback

2. **Images Not Loading**
   - Ensure images are in public folder
   - Check file paths and extensions
   - Verify image permissions

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify all imports

4. **Responsive Issues**
   - Test on multiple screen sizes
   - Check Tailwind breakpoints
   - Verify mobile-first approach

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ravi Pratap Singh**
- **Role**: Senior QA Engineer
- **Experience**: 4+ Years in Quality Assurance
- **Specialization**: Automation Testing, API Testing, Performance Testing
- **Email**: [rps.rajputt@gmail.com](mailto:rps.rajputt@gmail.com)
- **LinkedIn**: [linkedin.com/in/rpsrajputt/](https://www.linkedin.com/in/rpsrajputt/)
- **GitHub**: [github.com/rps-rajput](https://github.com/rps-rajput)
- **Portfolio**: [ravipratapsingh.dev](https://ravipratapsingh.dev)

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📈 Analytics & Insights

- **Performance**: Optimized for Core Web Vitals
- **SEO**: Structured data and meta tags
- **Accessibility**: WCAG 2.1 compliance
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 🎉 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Lucide** for beautiful icons
- **EmailJS** for seamless email integration
- **Bolt.new & Cursor AI** for AI-powered development experience
- **Vercel/Netlify** for reliable hosting

---

## 🚀 Get Started

Ready to explore my QA engineering expertise? 

1. **Visit**: [ravipratapsingh.dev](https://ravipratapsingh.dev)
2. **Connect**: [rps.rajputt@gmail.com](mailto:rps.rajputt@gmail.com)
3. **Follow**: [LinkedIn](https://www.linkedin.com/in/rpsrajputt/)

*Built with ❤️ using AI-powered development tools*
