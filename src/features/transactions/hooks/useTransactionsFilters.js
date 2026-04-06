import { useState, useMemo } from "react";

export function useTransactionFilters(transactions) {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
  });

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchesSearch =
        t.category.toLowerCase().includes(filters.search.toLowerCase()) ||
        t.amount.toString().includes(filters.search);

      const matchesType =
        filters.type === "" || t.type === filters.type;

      return matchesSearch && matchesType;
    });
  }, [transactions, filters]);

  return {
    filters,
    setFilters,
    transactions: filteredTransactions,
  };
}