import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'
import { notFound } from 'next/navigation'

const projects = {
  "ecommerce-chatbot": {
    title: "E-Commerce Chatbot",
    description: "An intelligent chatbot using LangChain and Groq, trained on Flipkart customer reviews to deliver personalized product insights through advanced conversational AI.",
    image: "/img/E-Comm-Chatbot.png",
    github: "https://github.com/princ0301/E-Commerce-Chatbot",
    details: [
      "Developed an AI-powered chatbot using LangChain and Groq, specifically trained on Flipkart customer reviews.",
      "Implemented natural language processing techniques to understand and respond to user queries about products.",
      "Integrated a recommendation system that suggests products based on user preferences and past interactions.",
      "Optimized the chatbot's response time through efficient data retrieval and processing techniques.",
      "Designed a user-friendly interface that seamlessly integrates with existing e-commerce platforms.",
    ],
    technologies: ["LangChain", "Groq", "Python", "Natural Language Processing", "Generative AI"]
  },
  "ai-web-search-agent": {
    title: "AI Web Search Agent",
    description: "An intelligent AI-powered web search agent integrating Groq and DuckDuckGo for dynamic and context-aware query generation.",
    image: "/img/search.jpg",
    github: "https://github.com/princ0301/AI-Search-Agent",
    details: [
      "Developed an AI-powered web search agent that integrates Groq for natural language processing and DuckDuckGo for web searches.",
      "Implemented context-aware query generation to improve search relevance and accuracy.",
      "Utilized the LLaMA 3.1 model for advanced natural language understanding and generation.",
      "Designed a system to determine query relevance and select optimal search results based on user intent.",
      "Implemented web scraping techniques using Trafilatura and BeautifulSoup to extract structured information from search results.",
      "Developed a ranking algorithm to prioritize and present the most relevant search results to users.",
      "Implemented caching mechanisms to improve response times for frequently searched queries.",
      "Created a user-friendly interface for inputting search queries and displaying results.",
      "Incorporated privacy features to ensure user searches remain confidential and secure.",
      "Developed an API to allow integration of the search agent into other applications and services."
    ],
    technologies: ["Groq", "DuckDuckGo API", "LLaMA 3.1", "Python", "Trafilatura", "BeautifulSoup", "Natural Language Processing", "Web Scraping"]
  },
  "Visa-approval-system": {
    title: "US Visa Approval System",
    description: "An ML model achieving 96.6% prediction accuracy using the K-Nearest Neighbors (KNN) algorithm to predict visa approval outcomes.",
    image: "/img/Visa.png",
    github: "https://github.com/princ0301/US-Visa-Approval-System",
    details: [
      "Developed a machine learning model using the K-Nearest Neighbors (KNN) algorithm to predict US visa approval outcomes.",
      "Achieved a high prediction accuracy of 96.6% through careful feature engineering and model optimization.",
      "Preprocessed and cleaned a large dataset of historical visa applications to ensure data quality.",
      "Conducted extensive exploratory data analysis to identify key factors influencing visa approval decisions.",
      "Implemented feature scaling and normalization techniques to improve model performance.",
      "Utilized cross-validation to ensure the model's robustness and generalizability.",
      "Developed a user-friendly interface for inputting visa application details and displaying prediction results.",
      "Implemented data visualization techniques to present insights on visa approval trends and patterns."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Machine Learning", "K-Nearest Neighbors", "Data Preprocessing", "Data Visualization"]
  },
  "yolo-football-analysis": {
    title: "YOLO Football Analysis System",
    description: "A comprehensive sports analytics platform using YOLO v5 for multi-object-detection and tracking of players, referees, and ball movements with high precision.",
    image: "/img/football.png",
    github: "https://github.com/princ0301/Football-Analysis-Using-YoloV5",
    details: [
      "Developed a state-of-the-art sports analytics platform using YOLO v5 for real-time object detection and tracking in football matches.",
      "Implemented multi-object tracking to simultaneously monitor players, referees, and ball movements with high precision.",
      "Utilized K-means clustering for automated team assignment through jersey color detection.",
      "Integrated optical flow algorithms to measure precise camera movements and maintain tracking accuracy.",
      "Developed a perspective transformation system to convert pixel-based measurements to real-world metrics.",
      "Implemented player speed and distance calculations based on transformed coordinates.",
      "Created heat maps to visualize player movements and team formations throughout the match.",
      "Implemented a user-friendly interface for coaches and analysts to review match data and generate reports."
    ],
    technologies: ["Python", "YOLO v5", "OpenCV", "NumPy", "TensorFlow", "PyTorch", "K-means Clustering", "Computer Vision"]
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full">
        <Link href="/projects" className="text-white hover:text-yellow-300 mb-4 inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-64 object-cover rounded-xl mb-6" />
        <p className="text-xl mb-6">{project.description}</p>
        <div className="bg-yellow-600 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.details.map((detail, index) => (
              <li key={index} className="text-lg">{detail}</li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-600 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FaGithub className="mr-2" /> View on GitHub
        </a>
      </div>
    </div>
  )
}
