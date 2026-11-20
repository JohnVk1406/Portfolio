import SectionTitle from "../components/SectionTitle";
import ActivityCard from "../components/ActivityCard";
import Reveal from "../components/Reveal";
import activities from "../data/activities";

function BeyondAcademics() {
  return (
    <section id="beyond-academics" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionTitle
            title="Beyond Academics"
            subtitle="Leadership, Community & Involvement"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 80}>
              <ActivityCard
                title={activity.title}
                role={activity.role}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeyondAcademics;
