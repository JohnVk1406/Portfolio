function TimelineItem({ title, subtitle, description }) {
  return (
    <div className="relative border-l border-neutral-300 pl-6">
      <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-900"></div>

      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-1 text-sm font-medium text-gray-500">{subtitle}</p>

      <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default TimelineItem;
