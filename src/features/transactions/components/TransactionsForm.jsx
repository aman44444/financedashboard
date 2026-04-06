import { useState } from "react";
import { CATEGORY_NAMES } from "../../../data/categories";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || Number(form.amount) <= 0) return;

    onAdd({
      ...form,
      id: Date.now(), // ✅ FIX: add ID
      amount: Number(form.amount),
    });

    setForm({
      amount: "",
      type: "expense",
      category: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-3"
    >
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => handleChange("amount", e.target.value)}
        className="flex-1 px-3 py-2 border rounded-lg"
      />

      <select
        value={form.type}
        onChange={(e) => handleChange("type", e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <select
        value={form.category}
        onChange={(e) => handleChange("category", e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="">Category</option>
        {CATEGORY_NAMES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) => handleChange("date", e.target.value)}
        className="px-3 py-2 border rounded-lg"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
      >
        Add
      </button>
    </form>
  );
}