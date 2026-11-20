import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const { title, description, details, tech, github, demo } = project;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
      {expanded && (
        <p className="expand-enter mt-4 leading-relaxed text-gray-600">
          {details}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm transition-all duration-300 hover:bg-neutral-200"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-gray-600"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub size={22} />
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-gray-600"
            aria-label={`Live demo for ${title}`}
          >
            <ExternalLink size={22} />
          </a>
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 text-sm font-medium text-black transition-all duration-300 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-expanded={expanded}
      >
        {expanded ? "Show Less" : "Learn More"}
      </button>
    </div>
  );
}

export default ProjectCard;
