import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const skills = [
  { category: "Programming Languages", items: ["Python", "C++/C"] },
  { category: "Machine Learning", items: ["Scikit-Learn", "PyTorch", "TensorFlow"] },
  { category: "Deep Learning", items: ["Neural Networks", "Transformers"] },
  { category: "Generative AI", items: ["Hugging Face", "LangChain", "Large Language Models (LLMs)"] },
  { category: "Tools and Libraries", items: ["OpenCV", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Git"] }
]

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full">
        <Link href="/" className="text-white hover:text-yellow-300 mb-4 inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-green-600 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">{skill.category}</h2>
              <ul className="list-disc list-inside">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

