import { useMemo } from "react";
import { CATEGORY_MAP } from "../../../data/categories";

export function useDashboardData(transactions) {
  return useMemo(() => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    const categoryTotals = {};
    transactions.forEach((t) => {
      if (!categoryTotals[t.category]) categoryTotals[t.category] = 0;
      categoryTotals[t.category] += t.amount;
    });

    const categoryChartData = Object.entries(categoryTotals).map(
      ([category, amount]) => ({
        category,
        amount,
        color: CATEGORY_MAP[category]?.color || "#6366f1",
      })
    );

    return { totalIncome, totalExpense, balance, categoryChartData };
  }, [transactions]);
}