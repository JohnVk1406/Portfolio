import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionTitle
            title="Projects"
            subtitle={showAll ? "All Projects" : "Selected Work"}
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
          {!showAll && (
            <Reveal delay={featuredProjects.length * 90}>
              <button
                onClick={() => setShowAll(true)}
                className="h-full w-full rounded-2xl border border-dashed border-neutral-300 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
              >
                <p className="text-3xl font-semibold transition-transform duration-300 group-hover:rotate-90">
                  +
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  View All Projects
                </h3>

                <p className="mt-2 text-gray-600">
                  Explore additional work and experiments.
                </p>
              </button>
            </Reveal>
          )}
          {showAll &&
            otherProjects.map((project, index) => (
              <Reveal
                key={project.title}
                className="expand-enter"
                delay={index * 70}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
