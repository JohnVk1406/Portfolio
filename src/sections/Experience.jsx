import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/Reveal";
import experiences from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionTitle
            title="Experience"
            subtitle="Research & Professional Exposure"
          />
        </Reveal>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <Reveal key={experience.role} delay={index * 90}>
              <ExperienceCard
                role={experience.role}
                organisation={experience.organisation}
                duration={experience.duration}
                description={experience.description}
                tech={experience.tech}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
