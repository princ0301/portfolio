import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  slug: string;
}

export default function ProjectCard({ title, description, image, github, slug }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          <Link href={`/project/${slug}`} className="text-blue-600 hover:underline">Learn More</Link>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  )
}

