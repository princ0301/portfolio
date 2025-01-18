import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full">
        <Link href="/" className="text-white hover:text-yellow-300 mb-4 inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        <div className="bg-blue-600 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">NLP Research Intern</h2>
          <p className="text-lg mb-2">Machine Intelligence and Signal Processing Lab (MISN), IIT Delhi</p>
          <p className="text-lg mb-4">Jan 2025 - Present</p>
          <ul className="list-disc list-inside text-lg">
          <li>Developing an innovative speech-to-speech translation system focusing on Hindi to Bhili (tribal language) bidirectional translation, contributing to language preservation and accessibility for tribal communities.</li>
            <li>Implementing and fine-tuning Seq2Seq models with advanced attention mechanisms and transformer architectures to handle the unique challenges of low-resource language translation.</li>
            <li>Designing and optimizing the complete pipeline: speech recognition (ASR) → text translation → speech synthesis (TTS), ensuring seamless end-to-end translation.</li>
            <li>Conducting extensive experiments on neural architecture optimization to improve translation accuracy between Hindi and Bhili, with particular focus on handling dialectal variations and limited training data.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
