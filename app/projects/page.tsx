import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaGithub, FaInfoCircle } from 'react-icons/fa'

const projects = [
  {
    title: "E-Commerce Chatbot",
    description: "An intelligent chatbot using LangChain and Groq, trained on Flipkart customer reviews.",
    image: "/img/E-Comm-Chatbot.png",
    github: "https://github.com/princ0301/E-Commerce-Chatbot",
    slug: "ecommerce-chatbot"
  },
  {
    title: "AI Web Search Agent",
    description: "An intelligent AI-powered web search agent integrating Groq and DuckDuckGo.",
    image: "/img/search.jpg",
    github: "https://github.com/princ0301/AI-Search-Agent",
    slug: "ai-web-search-agent"
  },
  {
    title: "Visa Approval System",
    description: "An ML model achieving 96.6% prediction accuracy using the K-Nearest Neighbors (KNN) algorithm.",
    image: "/img/Visa.png",
    github: "https://github.com/princ0301/US-Visa-Approval-System",
    slug: "Visa-approval-system"
  },
  {
    title: "YOLO Football Analysis System",
    description: "A comprehensive sports analytics platform using YOLO v5 for multi-object-detection and tracking.",
    image: "/img/football.png",
    github: "https://github.com/princ0301/Football-Analysis-Using-YoloV5",
    slug: "yolo-football-analysis"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full">
        <Link href="/" className="text-white hover:text-yellow-300 mb-4 inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Academic Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-yellow-600 rounded-2xl p-6 flex flex-col">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-lg mb-4 flex-grow">{project.description}</p>
              <div className="flex justify-between items-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 inline-flex items-center">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <Link href={`/projects/${project.slug}`} className="text-white hover:text-yellow-300 inline-flex items-center">
                  <FaInfoCircle className="mr-2" /> Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

