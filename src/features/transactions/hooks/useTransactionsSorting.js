import { useState, useMemo } from "react";

export function useTransactionSorting(transactions) {
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");

  const sortedTransactions = useMemo(() => {
    const sorted = [...transactions].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      }
      if (sortBy === "amount") {
        return a.amount - b.amount;
      }
      return 0;
    });

    return order === "asc" ? sorted : sorted.reverse();
  }, [transactions, sortBy, order]);

  return {
    sortedTransactions,
    sortBy,
    order,
    setSortBy,
    setOrder,
  };
}