import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code, Palette, Video, Shield, ChevronDown, Download, Briefcase, Award, Camera, Sparkles } from 'lucide-react';
import myphoto from './assets/gallery/profile.jpg';
import brandImage from './assets/gallery/brand-identity.png';
import uiPrototypeImage from './assets/gallery/ui-prototype.png';
import characterImage from './assets/gallery/3d-character.jpg';
import videoProductionImage from './assets/gallery/video-production.jpg';
import promotionalImage from './assets/gallery/promotional-graphics.png';
import coding from './assets/gallery/webapps.png';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [titleIndex, setTitleIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const profileImage = myphoto; 

  const titles = [
    "Front-End Developer",
    "UI/UX Designer",
    "Creative Technologist",
    "Graphic Designer",
    "3D Content Creator",
    "Cybersecurity Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'gallery', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSections(prev => new Set([...prev, section]));
            if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
              setActiveSection(section);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Di Dwa Foodstuffs & Groceries",
      description: "E-commerce web app for grocery delivery with responsive UI, login system, and product listing.",
      tech: ["React", "Tailwind CSS", "Vite", "ShadCN UI"],
      role: "Front-End Developer",
      type: "Team Project",
      highlights: ["Modular Components", "Mobile-First Design", "Image Slider"]
    },
    {
      title: "Skin Scanner App",
      description: "AI-based skincare assistant app with camera input for skin analysis and personalized recommendations.",
      tech: ["React Native", "Expo", "Figma"],
      role: "Front-End + UI/UX",
      type: "Mobile App",
      highlights: ["Camera Integration", "AI Analysis", "Product Recommendations"]
    },
    {
      title: "Alpha Hour Consultation",
      description: "Consultation booking platform with clean UI and easy navigation for pastoral services.",
      tech: ["React", "Tailwind CSS"],
      role: "Front-End + UI/UX",
      type: "Client Project",
      highlights: ["Booking System", "Clean Interface", "User-Friendly Navigation"]
    },
    {
      title: "AltFit Clothing Brand",
      description: "Gender-neutral streetwear brand with complete brand identity and e-commerce platform.",
      tech: ["React", "Figma", "Canva"],
      role: "Founder & Designer",
      type: "Business",
      highlights: ["Brand Identity", "E-commerce", "Marketing Campaigns"]
    },
    {
      title: "Provision Shop Website",
      description: "Practice project for building a local grocery UI with simple, mobile-friendly design.",
      tech: ["React", "Tailwind CSS"],
      role: "Developer + Designer",
      type: "Practice Project",
      highlights: ["Responsive Design", "Clean UI", "Fast Loading"]
    },
    {
      title: "Jezzerr Labs Platform",
      description: "Tech innovation hub platform focused on digital creativity and software solutions.",
      tech: ["React", "Figma", "Tailwind CSS"],
      role: "Co-Founder & Lead Designer",
      type: "Business",
      highlights: ["Innovation Hub", "Creative Tools", "Collaborative Projects"]
    }
  ];

  const experiences = [
    {
      role: "Front-End Developer & UI/UX Designer",
      company: "Touch Stack Technologies",
      period: "Internship",
      description: "Designed user interfaces using Figma and implemented them with React and Tailwind CSS in Agile teams.",
      icon: <Code className="w-6 h-6" />
    },
    {
      role: "Media Intern",
      company: "KFM TV",
      period: "Internship",
      description: "Professional video editing using Adobe Premiere Pro and studio environment setup.",
      icon: <Video className="w-6 h-6" />
    },
    {
      role: "Camera Operator Intern",
      company: "Yamaco Media",
      period: "Internship",
      description: "Operated studio and field cameras, assisted in lighting setup and production planning.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      role: "Co-Founder",
      company: "Jezzerr Labs",
      period: "Current",
      description: "Tech innovation hub focused on digital creativity and software solutions.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      role: "Founder",
      company: "AltFit Clothing Brand",
      period: "Current",
      description: "Established gender-neutral streetwear fashion brand with complete brand identity.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const skills = {
    "Frontend Development": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React Native", "Tailwind CSS", "ShadCN UI", "Vite"],
    "Programming": ["Java", "C++", "Python"],
    "UI/UX Design": ["Figma", "Adobe Photoshop", "Canva", "Framer Motion", "Responsive Design", "Accessibility"],
    "Creative & Media": ["Video Editing", "3D Animation", "Graphic Design", "Camera Operations"],
    "Tools & More": ["Git & GitHub", "Agile/Scrum", "VS Code", "Postman", "Cybersecurity Basics"]
  };

 
  const galleryItems = [
    {
      title: "Brand Identity Design",
      description: "AltFit Clothing Brand - Complete visual identity including logo, color palette, and marketing materials",
      category: "Graphic Design",
      tools: ["Photoshop", "Canva"],
      image: brandImage 
    },
    {
      title: "3D Character Animation",
      description: "Animated 3D character models for digital content and storytelling projects",
      category: "3D Content",
      tools: ["Blender", "Animation"],
      image: characterImage
    },
    {
      title: "UI/UX Prototypes",
      description: "High-fidelity mockups and interactive prototypes for web and mobile applications",
      category: "UI/UX",
      tools: ["Figma", "Prototyping"],
      image: uiPrototypeImage
    },
    {
      title: "Video Production",
      description: "Professional video editing and content creation from KFM TV projects",
      category: "Media",
      tools: ["Premiere Pro", "Editing"],
      image: videoProductionImage
    },
    {
      title: "Promotional Graphics",
      description: "Social media graphics and advertising campaigns for various projects",
      category: "Graphic Design",
      tools: ["Canva", "Photoshop"],
      image: promotionalImage
    },
    {
      title: "Mobile & Webs",
      description: "Immersive coding projects showcasing front-end development skills",
      category: "Development",
      tools: ["Mobile Apps", "Websites", "WebApps"],
      image: coding
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const isVisible = (section) => visibleSections.has(section);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob`} style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className={`absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000`} style={{ transform: `translateY(${scrollY * 0.15}px)` }}></div>
        <div className={`absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000`} style={{ transform: `translateY(${-scrollY * 0.1}px)` }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm border-b ${darkMode ? 'border-cyan-500/20' : 'border-pink-500/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
              JA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors relative ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-cyan-500/20 transition-all transform hover:scale-110"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-black' : 'bg-white'} border-t ${darkMode ? 'border-cyan-500/20' : 'border-pink-500/20'}`}>
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className={`text-center md:text-left transition-all duration-1000 ${isVisible('home') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="mb-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                  <span className={`block mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                    Jessica Afriyie
                  </span>
                </h1>
                <div className="h-20 flex items-center justify-center md:justify-start">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                    {titles[titleIndex]}
                  </p>
                </div>
              </div>
              
              <p className={`text-lg sm:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-xl mx-auto md:mx-0`}>
                Transforming ideas into visually stunning and functional digital experiences. 
                I blend code, design, and creativity to create meaningful user experiences.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'data:text/plain;charset=utf-8,Jessica Afriyie - CV';
                    link.download = 'Jessica_Afriyie_CV.pdf';
                    link.click();
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/50"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-6 py-3 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} backdrop-blur-sm transition-all transform hover:scale-105 flex items-center gap-2`}
                >
                  Let's Connect
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </button>
              </div>

              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/obengjessica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-cyan-500/20 hover:bg-cyan-500' : 'bg-cyan-100 hover:bg-cyan-500'} hover:text-white transition-all transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-cyan-500/50`}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/obeng-jessica-afriyie-1375aa329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-pink-500/20 hover:bg-pink-500' : 'bg-pink-100 hover:bg-pink-500'} hover:text-white transition-all transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-pink-500/50`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:blaqluv233@gmail.com"
                  className={`p-3 rounded-full ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500' : 'bg-purple-100 hover:bg-purple-500'} hover:text-white transition-all transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-purple-500/50`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible('home') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-4 border-pink-400/30 animate-spin-reverse"></div>
                
                {/* Profile Image Container */}
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-gradient p-2">
                  <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-gradient-to-br from-cyan-500/20 to-pink-500/20' : 'bg-gradient-to-br from-cyan-100 to-pink-100'}`}></div>
                  
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Jessica Afriyie"
                      className="relative z-10 w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className={`relative z-10 w-full h-full rounded-full ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
                          JA
                        </div>
                        <p className="text-sm text-cyan-400">Add your photo</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-float-slow">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} relative`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          
          <div className={`space-y-6 text-lg transition-all duration-1000 delay-200 ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              I'm a passionate creative technologist and front-end developer who loves transforming ideas into visually stunning and user-friendly digital experiences. I blend technology with art — from crafting intuitive interfaces to creating 3D animations and storytelling visuals.
              A Cybersecurity Enthusiast at heart, I prioritize secure coding practices and data protection in all my projects.
            </p>
            
            <div className={`grid md:grid-cols-3 gap-4 my-8`}>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-cyan-500/10 to-transparent' : 'bg-gradient-to-br from-cyan-50 to-transparent'} border ${darkMode ? 'border-cyan-500/20' : 'border-cyan-200'} text-center transform hover:scale-105 transition-all`}>
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-cyan-400">2027</h3>
                <p className="text-sm">Expected Graduation</p>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-pink-500/10 to-transparent' : 'bg-gradient-to-br from-pink-50 to-transparent'} border ${darkMode ? 'border-pink-500/20' : 'border-pink-200'} text-center transform hover:scale-105 transition-all`}>
                <Briefcase className="w-12 h-12 text-pink-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-pink-400">5+</h3>
                <p className="text-sm">Professional Experiences</p>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-purple-500/10 to-transparent' : 'bg-gradient-to-br from-purple-50 to-transparent'} border ${darkMode ? 'border-purple-500/20' : 'border-purple-200'} text-center transform hover:scale-105 transition-all`}>
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-purple-400">6+</h3>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
            
            <p>
              Currently pursuing a BSc in Mathematical Sciences (Computer Science Department) at the University of Ghana, where I combine analytical thinking with creative design.
            </p>
            
            <p>
              Beyond coding, I've explored media, camera operations, and video editing during my internships at KFM TV and Yamaco Media. I'm also the co-founder of <span className="text-cyan-400 font-semibold">Jezzerr Labs</span> and <span className="text-pink-400 font-semibold">AltFit Clothing Brand</span>, where I merge innovation, design, and entrepreneurship.
            </p>
            
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-cyan-500/10 to-pink-500/10' : 'bg-gradient-to-r from-cyan-50 to-pink-50'} border-2 ${darkMode ? 'border-cyan-500/30' : 'border-pink-200'} transform hover:scale-[1.02] transition-all shadow-lg`}>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                Future Vision: Harmony
              </h3>
              <p>
                My dream is to create a new programming language called <span className="font-bold text-pink-400">Harmony</span> — where music and code unite. Imagine using musical patterns like chorus for loops, beats for iterations, and melody for syntax flow. Making coding feel like composing music — artistic, rhythmic, and expressive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border-l-4 border-cyan-400 hover:border-pink-500 transition-all transform hover:scale-[1.02] hover:shadow-2xl duration-500 ${isVisible('experience') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'} text-cyan-400`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">{exp.role}</h3>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 sm:mt-0`}>{exp.period}</span>
                    </div>
                    <p className="text-pink-400 font-semibold mb-2">{exp.company}</p>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl ${darkMode ? 'bg-black/50' : 'bg-white'} border ${darkMode ? 'border-cyan-500/20' : 'border-pink-200'} hover:border-pink-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 duration-500 ${isVisible('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-pink-500/20' : 'bg-pink-100'} text-pink-400 whitespace-nowrap`}>
                    {project.type}
                  </span>
                </div>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-pink-400 font-semibold mb-2">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'} text-cyan-400`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"></div>
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border ${darkMode ? 'border-cyan-500/20' : 'border-pink-200'} hover:border-pink-500 transition-all transform hover:scale-105 hover:shadow-xl duration-500 ${isVisible('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.includes('Frontend') && <Code className="w-6 h-6 text-cyan-400" />}
                  {category.includes('Design') && <Palette className="w-6 h-6 text-pink-400" />}
                  {category.includes('Creative') && <Video className="w-6 h-6 text-cyan-400" />}
                  {category.includes('Programming') && <Code className="w-6 h-6 text-pink-400" />}
                  {category.includes('Tools') && <Shield className="w-6 h-6 text-cyan-400" />}
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-500/20 to-pink-500/20' : 'bg-gradient-to-r from-cyan-50 to-pink-50'} hover:scale-105 transition-transform cursor-default hover:shadow-lg`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Gallery Section */}
      <section id="gallery" className={`py-20 px-4 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Design Gallery
          </h2>
          
          <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Explore my creative work spanning 3D content creation, graphic design, UI/UX prototypes, and video production
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl ${darkMode ? 'bg-black/50' : 'bg-white'} border ${darkMode ? 'border-cyan-500/20' : 'border-pink-200'} hover:border-pink-500 transition-all transform hover:scale-105 hover:shadow-2xl duration-500 overflow-hidden ${isVisible('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                {item.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ) : (
                  <div className={`h-48 ${darkMode ? 'bg-gradient-to-br from-cyan-500/20 to-pink-500/20' : 'bg-gradient-to-br from-cyan-100 to-pink-100'} flex items-center justify-center`}>
                    {item.category === 'Graphic Design' && <Palette className="w-16 h-16 text-cyan-400 opacity-50" />}
                    {item.category === '3D Content' && <Sparkles className="w-16 h-16 text-pink-400 opacity-50" />}
                    {item.category === 'UI/UX' && <Code className="w-16 h-16 text-purple-400 opacity-50" />}
                    {item.category === 'Media' && <Video className="w-16 h-16 text-cyan-400 opacity-50" />}
                  </div>
                )}
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Section */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gradient-to-br from-cyan-500/20 to-pink-500/20' : 'bg-gradient-to-br from-cyan-100 to-pink-100'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {item.category === 'Graphic Design' && <Palette className="w-5 h-5 text-cyan-400" />}
                      {item.category === '3D Content' && <Sparkles className="w-5 h-5 text-pink-400" />}
                      {item.category === 'UI/UX' && <Code className="w-5 h-5 text-purple-400" />}
                      {item.category === 'Media' && <Video className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-pink-500/20' : 'bg-pink-100'} text-pink-400`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'} text-cyan-400`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Let's Connect
          </h2>
          
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-all duration-1000 delay-200 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm always excited to collaborate on innovative projects or discuss new opportunities. Let's create something amazing together!
          </p>

          <div className={`grid sm:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-400 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="mailto:blaqluv233@gmail.com"
              className={`p-6 rounded-2xl ${darkMode ? 'bg-black/50' : 'bg-white'} border ${darkMode ? 'border-cyan-500/20' : 'border-pink-200'} hover:border-cyan-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 flex items-center gap-4`}
            >
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-cyan-400 text-lg">Email</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>blaqluv233@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/233591286053"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl ${darkMode ? 'bg-black/50' : 'bg-white'} border ${darkMode ? 'border-pink-500/20' : 'border-pink-200'} hover:border-pink-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 flex items-center gap-4`}
            >
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
                <Phone className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-pink-400 text-lg">WhatsApp</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+233 591 286 053</p>
              </div>
            </a>
          </div>

          <div className={`flex justify-center gap-6 transition-all duration-1000 delay-600 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/obengjessica"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'} hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-cyan-500/50`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/obeng-jessica-afriyie-1375aa329"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${darkMode ? 'bg-pink-500/20' : 'bg-pink-100'} hover:bg-pink-500 hover:text-white transition-all transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-pink-500/50`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:blaqluv233@gmail.com"
              className={`p-4 rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'} hover:bg-purple-500 hover:text-white transition-all transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-purple-500/50`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-cyan-500/20' : 'border-pink-500/20'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Jessica Afriyie | Built with React + Tailwind CSS | 💜 Ghana
          </p>
          <p className="text-sm bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mt-2 font-semibold">
            Designed with creativity, coded with passion
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;