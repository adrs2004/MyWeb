import { projects } from "../data/projects";
import GlowCard from "./helper/GlowCard";

export default function ProjectGallery() {
  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-20 px-4 sm:px-6 md:px-12 lg:px-[10vh]"
    >
      {/* Gradient divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Title Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 md:w-24 h-[2px] bg-[#2F2F2F]" />
          <span className="bg-[#2F2F2F] w-fit px-3 sm:px-5 py-2 rounded-md">
            <h2 className="text-sm sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400">
              My Projects
            </h2>
          </span>
          <span className="w-12 md:w-24 h-[2px] bg-[#2F2F2F]" />
        </div>
      </div>

      {/* Blurry blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Description */}
      <div className="relative flex flex-col items-center my-8 group">
        <div className="flex items-center flex-wrap justify-center gap-2 px-2">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-sm sm:text-base text-gray-300 text-center max-w-md px-2">
            A collection of my recent work and experiments
          </p>
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      {/* Project Cards */}
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
        {projects.map((project) => (
          <div className="flex justify-center" key={project.id}>
            <div className="w-full max-w-[400px]">
              <GlowCard identifier={`project-${project.id}`}>
                <div className="flex flex-col h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#2F2F2F] hover:border-amber-400 transition-all group">
                  
                  {/* Image */}
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs text-gray-400 font-mono flex items-center mb-2">
                      <span className="w-3 h-3 mr-2 rounded-full bg-amber-400" />
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{project.subtitle}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-[#25213b] text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto flex flex-col sm:flex-row gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-[#111] text-sm px-4 py-2 rounded-md hover:from-amber-400 hover:to-amber-500 transition-all">
                          View Project
                        </button>
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <button className="w-full bg-[#2F2F2F] text-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition-all">
                            Code
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
