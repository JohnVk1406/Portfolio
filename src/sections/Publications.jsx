import SectionTitle from "../components/SectionTitle";
import PublicationCard from "../components/PublicationCard";
import publications from "../data/publications";

function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Publications" subtitle="Research Contributions" />

        <div className="grid gap-8">
          {publications.map((publication) => (
            <PublicationCard
              key={publication.title}
              title={publication.title}
              journal={publication.journal}
              status={publication.status}
              description={publication.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
