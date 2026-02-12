import React from 'react';
 
const personalInfo = {
  name: "Prince Kumar",
  title: "Building Scalable Software & Intelligent Systems",
  tagline: "Actively seeking Software Development and AI/ML opportunities",
  description: "I build scalable software systems and intelligent applications that solve real-world problems. My work spans full-stack development, backend engineering, and machine learning, with a focus on writing clean, efficient, and maintainable code.",
  description2: "With a strong foundation in data structures and problem solving, I enjoy turning complex ideas into reliable, production-ready solutions.",
  description3: "I am currently seeking opportunities where I can contribute meaningfully, learn from experienced engineers, and grow as a developer."
};

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">
          <span style={{ fontSize: '1.1rem' }}>👉</span> {personalInfo.tagline}
        </span>
        <h1>
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        <p className="hero-subtitle">
          <span className="gradient-text">{personalInfo.title}</span>
        </p>
        <div className="hero-description-wrapper">
          <p className="hero-description">{personalInfo.description}</p>
          <p className="hero-description">{personalInfo.description2}</p>
          <p className="hero-description hero-description-highlight">{personalInfo.description3}</p>
        </div>
        <div className="hero-cta">
          <a onClick={() => scrollToSection('projects')} className="btn btn-primary">
            View My Work
          </a>
          <a onClick={() => scrollToSection('contact')} className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
