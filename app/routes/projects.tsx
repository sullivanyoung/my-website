import React from 'react';
import projects from '~/constants/projects';
import { Project } from '~/constants/types';
import useIsVisible from '~/hooks/useIsVisible';

export default function Projects() {
  // Project ref for slow transition
  const ref = React.useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <ul
      ref={ref}
      className={`transition-opacity ease-in duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {projects.map((project: Project) => (
        <li key={project.id} className="m-4">
          <div className="p-4 border-2 border-white rounded-lg mx-12">
            <div className="sm:flex justify-between mb-2">
              <p className="font-bold text-white text-2xl">{project.title}</p>
              <p className="text-white mt-2 sm:mt-0 font-semibold">{project.date}</p>
            </div>
            <div className="block sm:flex justify-between mb-2">
              <p className="mb-2 sm:mb-0 font-bold text-white">{project.type}</p>
              <p className="text-white">{project.technology}</p>
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-gray-300 hover:font-bold group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-300 absolute bottom-0 left-0 w-0" />
              </a>
            )}
            <p className="mt-1 font-medium">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
