import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#about" className="text-gray-800 hover:text-blue-600">About</Link></li>
          <li><Link href="#experience" className="text-gray-800 hover:text-blue-600">Experience</Link></li>
          <li><Link href="#projects" className="text-gray-800 hover:text-blue-600">Projects</Link></li>
          <li><Link href="#skills" className="text-gray-800 hover:text-blue-600">Skills</Link></li>
        </ul>
      </nav>
    </header>
  )
}

