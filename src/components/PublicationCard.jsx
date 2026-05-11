function PublicationCard({ title, journal, status, description }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 className="text-2xl font-semibold leading-snug">{title}</h3>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {status}
        </span>
      </div>

      <p className="mt-3 text-gray-600">{journal}</p>

      <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default PublicationCard;
