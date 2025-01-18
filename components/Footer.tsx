export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Prince Kumar. All rights reserved.</p>
          <div className="mt-4">
            <a href="mailto:princeku07190@gmail.com" className="text-gray-300 hover:text-white mx-2">Email</a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">GitHub</a>
          </div>
        </div>
      </footer>
    )
  }
  
  