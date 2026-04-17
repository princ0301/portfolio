import { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    id: 1,
    image: "/Lit2Lab.png",
    title: "Lit2Lab — Research Paper to Notebook Agent",
    description: "Built an end-to-end AI agent that converts any research paper PDF into a validated, executable Jupyter Notebook automatically. Engineered a LangGraph-powered pipeline with human-in-the-loop checkpoints, a self-healing fix loop that retries up to 3 times using full tracebacks, and a persistent error memory system that injects top-5 similar past fixes as few-shot examples making the agent smarter with every paper. Integrated auto virtual environment setup via uv, and intelligent .py → .ipynb conversion using section markers. Runs entirely on local LLMs via Ollama.",
    tags: ["Python", "LangGraph", "LangChain", "Ollama", "PyMuPDF", "Tavily", "nbformat", "uv"],
    demoLink: "",
    githubLink: "https://github.com/princ0301/Lit2Lab"
  },
  {
    id: 2,
    image: "/quickcompare1.jpg",
    title: "QuickCompare — Live Grocery Price Aggregator",
    description: "Built a full-stack price comparison platform that scrapes live pricing data from Blinkit, Zepto, and Instamart in real-time. Engineered intelligent product matching using fuzzy logic and barcode comparison, implemented Redis caching (30-min TTL) for 90% API reduction, and designed a responsive dark-themed UI with platform-specific color coding. Handles 1000+ products per search with <5s latency.",
    tags: ["FastAPI", "Next.js", "Playwright", "Redis", "Fuzzy Matching", "Web Scraping", "React 19", "Tailwind CSS"],
    demoLink: "https://quick-compare-sigma.vercel.app/",
    githubLink: "https://github.com/princ0301/QuickCompare"
  },
  // {
  //   id: 3,
  //   image: "/Lit2Lab.png",
  //   title: "Lit2Lab — Research Paper to Notebook Agent",
  //   description: "Built an end-to-end AI agent that converts any research paper PDF into a validated, executable Jupyter Notebook automatically. Engineered a LangGraph-powered pipeline with human-in-the-loop checkpoints, a self-healing fix loop that retries up to 3 times using full tracebacks, and a persistent error memory system that injects top-5 similar past fixes as few-shot examples making the agent smarter with every paper. Integrated auto virtual environment setup via uv, and intelligent .py → .ipynb conversion using section markers. Runs entirely on local LLMs via Ollama.",
  //   tags: ["Python", "LangGraph", "LangChain", "Ollama", "PyMuPDF", "Tavily", "WebRTC", "nbformat", "Rich", "uv"],
  //   demoLink: "",
  //   githubLink: "https://github.com/princ0301/Lit2Lab"
  // },
  {
    id: 3,
    image: "/receiver.png",
    title: "Sharefile — Peer-to-Peer File Transfer",
    description: "Engineered a high-performance P2P file-sharing application with direct WebRTC data channels, eliminating cloud storage dependencies for privacy-first transfers. Implemented intelligent backpressure management using native bufferedamountlow events and 4MB batched disk I/O to prevent memory crashes and achieve <5s latency on large files. Integrated Pusher WebSockets for secure peer discovery, Trickle ICE for optimal routing, and real-time progress tracking. Handles unlimited file sizes with responsive dark-themed UI.",
    tags: ["Next.js 16", "React 19", "WebRTC", "Simple-Peer", "Pusher", "TypeScript", "Tailwind CSS v4", "P2P Architecture"],
    demoLink: "https://sharefile-puce.vercel.app/",
    githubLink: "https://github.com/princ0301/sharefile"
  },
  {
    id: 4,
    image: "/fraud.png",
    title: "FraudShield — Real-Time Fraud Detection API",
    description: "Built a production-grade ML system that detects fraudulent transactions in real-time on the IEEE-CIS dataset (590K transactions, 3.5% fraud rate). Engineered 131 features including velocity signals, target encodings, and PCA compression of 300+ V-features. Trained XGBoost with 30-trial Optuna Bayesian tuning achieving 0.940 ROC-AUC and 0.640 PR-AUC, with threshold optimization (0.5 → 0.09) to maximize recall to 70%. Integrated SHAP explainability per prediction, KS-test drift detection. Deployed with Docker and GitHub Actions CI/CD pipeline running automated tests.",
    tags: ["Python", "XGBoost", "FastAPI", "SHAP", "Optuna", "MLflow", "DVC", "Docker", "GitHub Actions", "Scikit-learn", "Evidently"],
    demoLink: "https://fraud-detection-bg2l.onrender.com/dashboard",
    githubLink: "https://github.com/princ0301/fraud-detection"
  },
  // {
  //   id: 4,
  //   image: "/billcraft.png",
  //   title: "BillCraft - Invoice & Client Management Platform",
  //   description: "Built a full-stack invoice and client management platform using FastAPI and React. Implemented automated invoice calculations, PDF generation, and secure multi-tenant architecture using JWT authentication and Supabase Row Level Security (RLS). Designed robust backend validation with Pydantic, invoice lifecycle tracking, and property-based testing with Hypothesis to ensure reliability and scalability.",
  //   tags: ["FastAPI", "React", "PostgreSQL", "JWT Auth", "Full Stack", "Supabase"],
  //   demoLink: "",
  //   githubLink: "https://github.com/princ0301/Invoice_Generator"
  // },
  {
    id: 5,
    image: "/deep_researcher.png",
    title: "Deep Researcher",
    description: "Architected an autonomous research agent that gathers, validates, and synthesizes information from web sources using structured reasoning workflows. Designed a multi-step execution pipeline enabling query decomposition, parallel searches, and context-aware report generation.",
    tags: ["AI Agents", "LangGraph", "LangChain", "Web Search", "LLM Reasoning"],
    demoLink: "https://deepresearcher.onrender.com/",
    githubLink: "https://github.com/princ0301/AI-Deep-Researcher"
  },
  {
    id: 6,
    image: "/yolov3.jpg",   
    title: "YOLOv3 From Scratch",
    description: "Implemented the YOLOv3 object detection architecture from scratch in PyTorch, featuring custom CNN layers, residual connections, and multi-scale predictions. Built an end-to-end training pipeline with dataset loaders, augmentation, and optimized evaluation for real-time detection.",
    tags: ["Object Detection", "PyTorch", "CNN Architecture", "Computer Vision"],
    demoLink: "",
    githubLink: "https://github.com/princ0301/Yolo_V3"
  },
  // {
  //   id: 7,
  //   image: "/pyregex.png",
  //   title: "PyRegex - Custom Regex Engine",
  //   description: "Built a complete regular expression engine from scratch using lexical analysis, recursive descent parsing, and AST-based pattern matching. Designed a modular compiler-style architecture separating lexer, parser, and matcher. Implemented advanced regex capabilities including capturing groups, backreferences, lazy quantifiers, lookahead/lookbehind, and optimized backtracking for efficient pattern matching.",
  //   tags: ["Compiler Design", "Parsing", "AST", "Python", "Regex Engine", "Systems"],
  //   demoLink: "",
  //   githubLink: "https://github.com/princ0301/Regex-Engine"
  // },
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
