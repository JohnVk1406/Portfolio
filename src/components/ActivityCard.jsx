function ActivityCard({ title, role }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 transition duration-300 hover:shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{role}</p>
    </div>
  );
}

export default ActivityCard;
