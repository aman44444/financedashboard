export default function TransactionFilters({ filters, setFilters }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-5">
      <input
        placeholder="Search..."
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            search: e.target.value,
          }))
        }
        className="w-full md:w-64 px-3 py-2 rounded-lg border border-gray-200 
        focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      <select
        value={filters.type}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            type: e.target.value,
          }))
        }
        className="px-3 py-2 rounded-lg border border-gray-200 
        focus:outline-none focus:ring-2 focus:ring-indigo-200"
      >
        <option value="">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
}