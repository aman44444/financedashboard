export default function InsightCard({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 transition hover:bg-gray-50">
      <h3 className="text-xs text-gray-500">{title}</h3>
      <p className="text-sm md:text-base font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  );
}