import projects from '~/constants/projects';
import { Project } from '~/constants/types';

export default function Projects() {
  return (
    <ul>
      {projects.map((project: Project) => (
        <li key={project.id} className="m-4">
          <div className="p-4 border-2 border-white rounded-lg mx-12">
            <div className="flex justify-between mb-2">
              <p className="font-bold text-white text-2xl">{project.title}</p>
              <p className="text-white">{project.date}</p>
            </div>
            <div className="block sm:flex justify-between mb-2">
              <p className="mb-2 sm:mb-0 font-bold text-white">{project.type}</p>
              <p className="text-white">{project.technology}</p>
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-gray-300 hover:font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
            <p className="mt-1">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
