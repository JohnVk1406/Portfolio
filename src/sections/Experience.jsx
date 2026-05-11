import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Experience"
          subtitle="Research & Professional Exposure"
        />

        <div className="grid gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.role}
              role={experience.role}
              organisation={experience.organisation}
              duration={experience.duration}
              description={experience.description}
              tech={experience.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
