import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Projects"
          subtitle={showAll ? "All Projects" : "Selected Work"}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="rounded-2xl border border-dashed border-neutral-300 p-6 text-left transition duration-300 hover:border-black hover:shadow-lg"
            >
              <p className="text-3xl font-semibold">+</p>

              <h3 className="mt-4 text-2xl font-semibold">View All Projects</h3>

              <p className="mt-2 text-gray-600">
                Explore additional work and experiments.
              </p>
            </button>
          )}
          {showAll &&
            otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
