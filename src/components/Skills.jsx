import React, { useEffect, useRef } from 'react';
 
const skillsData = {
  categories: [
    {
      icon: "💻",
      title: "Programming",
      skills: ["Python", "JavaScript", "C++", "CUDA"]
    },
    {
      icon: "🌐",
      title: "Backend & Web",
      skills: ["FastAPI", "React", "Node.js", "Express", "Next.js"]
    },
    {
      icon: "🤖",
      title: "ML & LLM System",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "LangGraph", "CrewAI", "FAISS/ChromaDB", "OpenCV"]
    },
    {
      icon: "🗄️",
      title: "Databases & Infrastructure",
      skills: ["SQL", "PostgreSQL", "MongoDB", "Docker", "Git/Github", "Linux"]
    }
  ],
   
  certifications: [
    {
      name: "AI & Machine Learning Training",
      issuer: "Samsung Innovation Campus (Ongoing)",
      // date: "2024",
      // credentialId: "ABC123XYZ",
      // link: "https://example.com/certificate"
    },
  ],
   
  achievements: [
    {
      title: "Problem Solving",
      description: "LeetCode & GFG: 250+ problems solved across DSA topic",
      links: [
        { name: "LeetCode", url: "https://leetcode.com/u/ctAh4XbWkU/" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/princek7fze" }
      ]
      // year: "2024"
    }
  ]
};

const Skills = () => {
  const categoriesRef = useRef([]);
  const certRef = useRef([]);
  const achieveRef = useRef([]);

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

    [...categoriesRef.current, ...certRef.current, ...achieveRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const hasCertifications = skillsData.certifications && skillsData.certifications.length > 0;
  const hasAchievements = skillsData.achievements && skillsData.achievements.length > 0;

  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-label">Technical Skills</span>
        <h2>Technical Skills</h2>
      </div>

      {/* Skills Categories */}
      <div className="skills-grid">
        {skillsData.categories.map((category, index) => (
          <div
            key={index}
            className="skill-category fade-in"
            ref={(el) => (categoriesRef.current[index] = el)}
          >
            <h3>
              <span className="skill-icon">{category.icon}</span> {category.title}
            </h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Achievements Combined */}
      {(hasCertifications || hasAchievements) && (
        <>
          <div className="section-header" style={{ marginTop: '4rem' }}>
            <span className="section-label">Certifications & Achievements</span>
            <h2>Achievements & Learning</h2>
          </div>
          <div className="certifications-grid">
            {hasCertifications && skillsData.certifications.map((cert, index) => (
              <div
                key={`cert-${index}`}
                className="certification-card fade-in"
                ref={(el) => (certRef.current[index] = el)}
              >
                <div className="cert-header">
                  <h3>{cert.name}</h3>
                  {cert.date && <span className="cert-date">{cert.date}</span>}
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="cert-id">Credential ID: {cert.credentialId}</p>
                )}
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-link"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
            {hasAchievements && skillsData.achievements.map((achievement, index) => (
              <div
                key={`achieve-${index}`}
                className="achievement-card fade-in"
                ref={(el) => (achieveRef.current[index] = el)}
              >
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {achievement.year && <span className="achievement-year">{achievement.year}</span>}
                {achievement.links && (
                  <div className="achievement-links">
                    {achievement.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        {link.name} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Skills;
