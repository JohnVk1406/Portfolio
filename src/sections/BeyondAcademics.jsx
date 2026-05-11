import SectionTitle from "../components/SectionTitle";
import ActivityCard from "../components/ActivityCard";
import activities from "../data/activities";

function BeyondAcademics() {
  return (
    <section id="beyond-academics" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Beyond Academics"
          subtitle="Leadership, Community & Involvement"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.title}
              title={activity.title}
              role={activity.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeyondAcademics;
