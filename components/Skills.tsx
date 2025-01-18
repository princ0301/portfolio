const skills = [
    { category: "Programming Languages", items: ["Python", "C++/C"] },
    { category: "Machine Learning", items: ["Scikit-Learn", "PyTorch", "TensorFlow"] },
    { category: "Deep Learning", items: ["Neural Networks", "Transformers"] },
    { category: "Generative AI", items: ["Hugging Face", "LangChain", "Large Language Models (LLMs)"] },
    { category: "Tools and Libraries", items: ["OpenCV", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Git"] }
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="list-disc list-inside">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  