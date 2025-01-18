export default function Experience() {
    return (
      <section id="experience" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">NLP Research Intern</h3>
            <p className="text-gray-600 mb-2">Machine Intelligence and Signal Processing Lab (MISN), IIT Delhi</p>
            <p className="text-gray-600 mb-4">Jan 2025 - Present</p>
            <ul className="list-disc list-inside text-gray-700">
            <li>Developing an innovative speech-to-speech translation system focusing on Hindi to Bhili (tribal language) bidirectional translation, contributing to language preservation and accessibility for tribal communities.</li>
            <li>Implementing and fine-tuning Seq2Seq models with advanced attention mechanisms and transformer architectures to handle the unique challenges of low-resource language translation.</li>
            <li>Designing and optimizing the complete pipeline: speech recognition (ASR) → text translation → speech synthesis (TTS), ensuring seamless end-to-end translation.</li>
            <li>Conducting extensive experiments on neural architecture optimization to improve translation accuracy between Hindi and Bhili, with particular focus on handling dialectal variations and limited training data.</li>
          </ul>
          </div>
        </div>
      </section>
    )
  }
  
  