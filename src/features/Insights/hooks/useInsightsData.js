import { useMemo } from "react";

export function useInsightsData(transactions) {
  return useMemo(() => {
    if (!transactions.length) return {};

    const totalTransactions = transactions.length;
    const totalIncome = transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const averageAmount =
      transactions.reduce((sum, t) => sum + t.amount, 0) / totalTransactions;

    // Most frequent category
    const categoryCount = {};
    transactions.forEach(t => {
      categoryCount[t.category] = (categoryCount[t.category] || 0) + 1;
    });
    const mostFrequentCategory = Object.entries(categoryCount).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0];

    // Highest income & expense
    const highestIncome = transactions
      .filter(t => t.type === "income")
      .sort((a, b) => b.amount - a.amount)[0];
    const highestExpense = transactions
      .filter(t => t.type === "expense")
      .sort((a, b) => b.amount - a.amount)[0];

    const categoryBreakdown = categoryCount;

    return {
      totalTransactions,
      totalIncome,
      totalExpense,
      averageAmount,
      mostFrequentCategory,
      highestIncome,
      highestExpense,
      categoryBreakdown
    };
  }, [transactions]);
}