import React, { useEffect, useRef } from 'react';

const experienceData = [
  {
    id: 1,
    company: "IIT Delhi — MISN Lab",
    position: "NLP Research Intern",
    duration: "Jun 2025 – Sep 2025",
    // location: "Remote",
    // type: "Full-time",
    description: "Contributed to speech-to-speech translation research for low-resource languages by fine-tuning transformer-based transformer models.",
    achievements: [
      "Curated and preprocessed multilingual datasets to develop robust training pipelines.",
      "Benchmarked generative AI models on zero-shot and few-shot translation tasks with reproducible evaluation workflows.",
      "Contributed to improving translation quality through efficient experimentation and model optimization.",
    ],
    technologies: ["Python", "PyTorch", "LLMs", "NLP", "Fine-tuning", "Evaluation"]
  }
];

const Experience = () => {
  const experienceRef = useRef([]);

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

    experienceRef.current.forEach((exp) => {
      if (exp) observer.observe(exp);
    });

    return () => observer.disconnect();
  }, []);

  // Only render if experience data exists
  if (!experienceData || experienceData.length === 0) {
    return null;
  }

  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-label">Experience</span>
        <h2>Experience</h2>
      </div>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            className="experience-card fade-in"
            ref={(el) => (experienceRef.current[index] = el)}
          >
            <div className="experience-header">
              <div className="experience-main-info">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="experience-duration">{exp.duration}</span>
                {exp.type && <span className="experience-type">{exp.type}</span>}
              </div>
            </div>
            {exp.location && <p className="experience-location">📍 {exp.location}</p>}
            <p className="experience-description">{exp.description}</p>
            
            <div className="experience-achievements">
              <h5>Key Achievements:</h5>
              <ul>
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="experience-technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
