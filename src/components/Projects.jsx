import { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    id: 1,
    image: "/knowledger.png",
    title: "Knowledger — AI Research Assistant (RAG System)",
    description: "Developed a multi-modal retrieval-augmented generation (RAG) system that ingests PDFs, audio, video, and web content to deliver citation-grounded responses. Engineered a scalable semantic retrieval pipeline with vector search, speech-to-text processing, and LLM integration to improve answer reliability.",
    tags: ["RAG", "Vector Search", "Mistral AI", "Speech-to-Text", ],
    demoLink: "",
    githubLink: "https://github.com/princ0301/Knowledger"
  },
  {
    id: 2,
    image: "/billcraft.png",
    title: "BillCraft - Invoice & Client Management Platform",
    description: "Built a full-stack invoice and client management platform using FastAPI and React. Implemented automated invoice calculations, PDF generation, and secure multi-tenant architecture using JWT authentication and Supabase Row Level Security (RLS). Designed robust backend validation with Pydantic, invoice lifecycle tracking, and property-based testing with Hypothesis to ensure reliability and scalability.",
    tags: ["FastAPI", "React", "PostgreSQL", "JWT Auth", "Full Stack", "Supabase"],
    demoLink: "",
    githubLink: "https://github.com/princ0301/Invoice_Generator"
  },
  {
    id: 3,
    image: "/deep_researcher.png",
    title: "Deep Researcher",
    description: "Architected an autonomous research agent that gathers, validates, and synthesizes information from web sources using structured reasoning workflows. Designed a multi-step execution pipeline enabling query decomposition, parallel searches, and context-aware report generation.",
    tags: ["AI Agents", "LangGraph", "LangChain", "Web Search", "LLM Reasoning"],
    demoLink: "https://deepresearcher.onrender.com/",
    githubLink: "https://github.com/princ0301/AI-Deep-Researcher"
  },
  {
    id: 4,
    image: "/yolov3.jpg",   
    title: "YOLOv3 From Scratch",
    description: "Implemented the YOLOv3 object detection architecture from scratch in PyTorch, featuring custom CNN layers, residual connections, and multi-scale predictions. Built an end-to-end training pipeline with dataset loaders, augmentation, and optimized evaluation for real-time detection.",
    tags: ["Object Detection", "PyTorch", "CNN Architecture", "Computer Vision"],
    demoLink: "",
    githubLink: "https://github.com/princ0301/Yolo_V3"
  },
  {
    id: 4,
    image: "/pyregex.png",
    title: "PyRegex - Custom Regex Engine",
    description: "Built a complete regular expression engine from scratch using lexical analysis, recursive descent parsing, and AST-based pattern matching. Designed a modular compiler-style architecture separating lexer, parser, and matcher. Implemented advanced regex capabilities including capturing groups, backreferences, lazy quantifiers, lookahead/lookbehind, and optimized backtracking for efficient pattern matching.",
    tags: ["Compiler Design", "Parsing", "AST", "Python", "Regex Engine", "Systems"],
    demoLink: "",
    githubLink: "https://github.com/princ0301/Regex-Engine"
  },
];

const Projects = () => {
  const projectsRef = useRef([]);
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);
  const hasMoreProjects = projectsData.length > 3;

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

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, [showAll]);

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card fade-in"
            ref={(el) => (projectsRef.current[index] = el)}
          >
            {(project.icon || project.image) && (
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  project.icon
                )}
              </div>
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {(project.demoLink || project.githubLink) && (
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} className="project-link">
                      View Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="project-link">
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {hasMoreProjects && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="btn btn-secondary"
          >
            {showAll ? 'Show Less' : 'View More Projects'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
