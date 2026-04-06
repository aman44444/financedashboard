import { columns } from "../../../utils/columns";
import { CATEGORY_MAP } from "../../../data/categories";

export default function TransactionTable({
  transactions,
  onDelete,
  onEdit,
  role,
}) {
  if (!transactions.length) {
    return (
      <div className="text-center text-gray-500 py-6">
        No transactions found
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-left px-4 md:px-6 py-3 font-medium whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
              {role === "admin" && (
                <th className="text-left px-4 md:px-6 py-3 whitespace-nowrap">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {transactions.map((t, i) => (
              <tr
                key={t.id}
                className={`transition ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                } hover:bg-gray-50`}
              >
                {columns.map((col) => {
                  if (col.key === "category") {
                    const cat = CATEGORY_MAP[t.category];

                    return (
                      <td
                        key={col.key}
                        className="px-4 md:px-6 py-3"
                      >
                        <span
                          className="px-2 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: cat?.bg,
                            color: cat?.color,
                          }}
                        >
                          {t.category}
                        </span>
                      </td>
                    );
                  }

                  return (
                    <td
                      key={col.key}
                      className="px-4 md:px-6 py-3 text-gray-700 whitespace-nowrap"
                    >
                      {col.key === "amount"
                        ? `₹${t[col.key]}`
                        : t[col.key]}
                    </td>
                  );
                })}

                {role === "admin" && (
                  <td className="px-4 md:px-6 py-3 space-x-3 whitespace-nowrap">
                    <button
                      onClick={() => onEdit(t)}
                      className="text-indigo-500 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(t.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}