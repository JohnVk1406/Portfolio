import SectionTitle from "../components/SectionTitle";
import PublicationCard from "../components/PublicationCard";
import Reveal from "../components/Reveal";
import publications from "../data/publications";

function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionTitle title="Publications" subtitle="Research Contributions" />
        </Reveal>

        <div className="grid gap-8">
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 90}>
              <PublicationCard
                title={publication.title}
                journal={publication.journal}
                year={publication.year}
                description={publication.description}
                abstract={publication.abstract}
                paperLink={publication.paperLink}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
