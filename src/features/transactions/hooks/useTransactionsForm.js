import { useState } from "react";

export function useTransactionForm(onAdd) {
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
      amount: Number(form.amount),
    });

    // ✅ reset
    setForm({
      amount: "",
      type: "expense",
      category: "",
      date: "",
    });
  };

  return { form, handleChange, handleSubmit };
}