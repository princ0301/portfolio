import React, { useEffect, useRef } from 'react';
 
const aboutData = {
  heading: "Who I Am",
  paragraphs: [
    "I am a Computer Science undergraduate focused on building scalable software and intelligent applications that solve real-world problems. My experience spans full-stack development, backend engineering, and machine learning, giving me a strong technical foundation and practical problem-solving skills.",
    "I enjoy designing efficient systems, optimizing performance, and writing clean, maintainable code. With a solid understanding of data structures and algorithms, I approach challenges with structured thinking and an engineering mindset.",
    "Currently, I am seeking internship opportunities where I can contribute to impactful projects, collaborate with experienced teams, and continue growing as a developer."
  ],
  expertise: [
    {
      icon: "🧠",
      title: "Machine Learning & Intelligent Systems",
      description: "Hands-on experience developing intelligent applications using modern ML frameworks and tools"
    },
    {
      icon: "⚙️",
      title: "Full-Stack & Backend Development",
      description: "Experienced in designing APIs, managing databases, and building efficient, end-to-end systems"
    },
    {
      icon: "💡",
      title: "Data Structures & Algorithms",
      description: "Solved 250+ problems, strengthening problem-solving ability and algorithmic thinking"
    },
    {
      icon: "🚀",
      title: "Production-Level Projects",
      description: "Developed and deployed scalable applications focused on performance, reliability, and real-world impact"
    }
  ]
};

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-header">
        <span className="section-label">About Me</span>
        <h2>Building the Future with Code & Intelligence</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>{aboutData.heading}</h3>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="expertise-grid">
          {aboutData.expertise.map((item, index) => (
            <div
              key={index}
              className="expertise-card fade-in"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h4>
                {item.icon} {item.title}
              </h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
