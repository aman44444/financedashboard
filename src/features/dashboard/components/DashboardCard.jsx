export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2  hover:bg-gray-50 transition">
      <p className="text-xs text-gray-500 uppercase tracking-wide">{title}</p>
      <h2 className="text-xl font-bold text-gray-800 mt-1">
        ₹{value.toLocaleString()}
      </h2>
    </div>
  );
}