import React from 'react';
 
const contactData = {
  email: "princeku07190@gmail.com",
  linkedin: "https://www.linkedin.com/in/prince-kumar-66ba45293/",
  github: "https://github.com/princ0301"
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <span className="section-label">Get In Touch</span>
        <h2>
          <span className="gradient-text">Let’s Connect</span>
        </h2>
        <p>
          Currently seeking internship or full-time opportunities in Software Engineering and AI/ML. Always open to meaningful technical conversations.
        </p>
        <div className="contact-links">
          <a href={`mailto:${contactData.email}`} className="contact-link">
            <span className="contact-icon">📧</span>
            <span>{contactData.email}</span>
          </a>
          <a href={contactData.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href={contactData.github} className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">🔗</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
