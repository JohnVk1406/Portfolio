function ProjectCard({ title, description, tech }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-relaxed text-gray-600">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
