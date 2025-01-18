import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
            src="/img/img.jpg" 
            alt="Prince Kumar"
            width={200}
            height={200}
            className="rounded-full border-4 border-white mb-4 md:mb-0 md:mr-8"
            priority
        />
        <h1 className="text-4xl font-bold mb-2">Prince Kumar</h1>
        <p className="text-base mb-4">Computer Science Student | NLP Research Intern IIT Delhi | AI/ML enthusiasts</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:princeku07190@gmail.com" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100">Email</a>
          <a href="tel:+916204313778" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100">Call</a>
          <a href="https://github.com/princ0301" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100">GitHub</a>
        </div>
      </div>
    </section>
  )
}

