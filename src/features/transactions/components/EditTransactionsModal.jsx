import { useState } from "react";
import { CATEGORY_NAMES } from "../../../data/categories";

export default function EditTransactionModal({
  transaction,
  onClose,
  onUpdate,
  role,
}) {
  const [form, setForm] = useState(transaction);

  if (role !== "admin") return null;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!form.amount || Number(form.amount) <= 0) return;

    onUpdate({
      ...form,
      amount: Number(form.amount),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-5 w-full max-w-md space-y-3">
        <h2 className="font-semibold text-lg">Edit Transaction</h2>

        <input
          type="number"
          value={form.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />

        <select
          value={form.type}
          onChange={(e) => handleChange("type", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select
          value={form.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        >
          {CATEGORY_NAMES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) => handleChange("date", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 bg-gray-200 rounded">
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-3 py-2 bg-indigo-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}