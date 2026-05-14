import { useState } from "react";
import { ExternalLink } from "lucide-react";
function PublicationCard({
  title,
  journal,
  year,
  description,
  abstract,
  paperLink,
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 className="text-2xl font-semibold leading-snug">{title}</h3>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {year}
        </span>
      </div>

      <p className="mt-3 text-gray-600">{journal}</p>

      <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
      {paperLink && (
        <div className="mt-6 flex items-center gap-4">
          <a
            href={paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:translate-x-1"
          >
            Read Paper
            <ExternalLink size={16} />
          </a>
        </div>
      )}
      {expanded && paperLink && abstract && (
        <p className="mt-4 leading-relaxed text-gray-600">{abstract}</p>
      )}
      {paperLink && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-sm font-medium text-black transition-all duration-300 hover:translate-x-1"
        >
          {expanded ? "Hide Abstract" : "Read Abstract"}
        </button>
      )}
    </div>
  );
}

export default PublicationCard;
