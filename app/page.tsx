import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full shadow-2xl">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-8">
            <Image
              src="/img/img.jpg"
              alt="Prince Kumar"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-lg"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Prince Kumar</h1>
            <p className="text-xl md:text-2xl mb-4 text-purple-200">Computer Science Student | NLP Research Intern</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="mailto:princeku07190@gmail.com" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaEnvelope size={28} />
              </a>
              <a href="tel:+916204313778" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaPhone size={28} />
              </a>
              <a href="https://github.com/princ0301" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/prince-kumar-66ba45293" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg text-purple-100">
            I am a passionate and driven Computer Science student at Bhagwan Parshuram Institute of Technology (affiliated with GGSIPU), Delhi, India. My interests lie in artificial intelligence, machine learning, and natural language processing, where I enjoy exploring innovative solutions to complex challenges.
          <br />
            My academic journey has provided me with a solid foundation in programming, deep learning, and AI technologies. I am proficient in programming languages like Python and C++, and I have hands-on experience with frameworks and tools such as TensorFlow, PyTorch, and Flask.
          <br />
            I thrive on continuous learning and experimentation, keeping myself updated with the latest advancements in AI and technology. By combining creativity, analytical thinking, and a results-driven approach, I aim to contribute meaningfully to the tech community and advance in this ever-evolving field.
          <br />
            Outside of academics, I enjoy engaging with the tech community, exploring research trends, and honing my problem-solving skills to develop impactful and transformative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/experience" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p>View my work history</p>
          </Link>
          <Link href="/skills" className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <p>Explore my technical skills</p>
          </Link>
          <Link href="/projects" className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p>Check out my academic projects</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

