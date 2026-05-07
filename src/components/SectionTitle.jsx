function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}

export default SectionTitle;
