import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "E-Commerce Chatbot",
    description: "An intelligent chatbot using LangChain and Groq, trained on Flipkart customer reviews.",
    image: "/placeholder.svg?height=200&width=400&text=E-Commerce+Chatbot",
    github: "https://github.com/yourgithub/ecommerce-chatbot",
    slug: "ecommerce-chatbot"
  },
  {
    title: "AI Web Search Agent",
    description: "An intelligent AI-powered web search agent integrating Groq and DuckDuckGo.",
    image: "/placeholder.svg?height=200&width=400&text=AI+Web+Search+Agent",
    github: "https://github.com/yourgithub/ai-web-search-agent",
    slug: "ai-web-search-agent"
  },
  {
    title: "US Visa Approval System",
    description: "An ML model achieving 96.6% prediction accuracy using the K-Nearest Neighbors (KNN) algorithm.",
    image: "/placeholder.svg?height=200&width=400&text=US+Visa+Approval+System",
    github: "https://github.com/yourgithub/us-visa-approval-system",
    slug: "us-visa-approval-system"
  },
  {
    title: "YOLO Football Analysis System",
    description: "A comprehensive sports analytics platform using YOLO v5 for multi-object-detection and tracking.",
    image: "/placeholder.svg?height=200&width=400&text=YOLO+Football+Analysis",
    github: "https://github.com/yourgithub/yolo-football-analysis",
    slug: "yolo-football-analysis"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Academic Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

