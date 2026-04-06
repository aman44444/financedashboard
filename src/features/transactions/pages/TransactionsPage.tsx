import { useContext, useState, useMemo } from "react";
import { FinanceContext } from "../../../context/Finance/FinanceContext";
import { useTransactions } from "../../../context/Transactions/useTransactions";
import { useTransactionFilters } from "../hooks/useTransactionsFilters";
import { useTransactionSorting } from "../hooks/useTransactionsSorting";

import TransactionFilters from "../components/TransactionsFilters";
import TransactionTable from "../components/TransactionsTable";
import TransactionForm from "../components/TransactionsForm";
import EditTransactionModal from "../components/EditTransactionsModal";

export default function TransactionsPage() {
  const { state } = useContext(FinanceContext);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const { transactions, addTransaction, deleteTransaction, updateTransaction } =
    useTransactions();

  const { filters, setFilters, transactions: filteredTransactions } =
    useTransactionFilters(transactions);

  const { sortedTransactions, sortBy, order, setSortBy, setOrder } =
    useTransactionSorting(filteredTransactions);

  const totalAmount = useMemo(() => {
    return sortedTransactions.reduce((sum, t) => {
      return t.type === "income" ? sum + t.amount : sum - t.amount;
    }, 0);
  }, [sortedTransactions]);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
        Transactions
      </h1>

      <TransactionFilters filters={filters} setFilters={setFilters} />

      {state.role === "admin" && <TransactionForm onAdd={addTransaction} />}

      <div className="flex flex-wrap gap-3 items-center mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <button
          onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          {order === "asc" ? "Asc ↑" : "Desc ↓"}
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
        <TransactionTable
          transactions={sortedTransactions}
          onDelete={deleteTransaction}
          onEdit={setEditingTransaction}
          role={state.role}
        />

        <div className="px-6 py-3 border-t border-gray-200 flex justify-between bg-gray-50 font-semibold">
          <span>Total Balance:</span>
          <span className={totalAmount < 0 ? "text-red-500" : "text-green-600"}>
            ₹{totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      {editingTransaction && (
        <EditTransactionModal
          transaction={editingTransaction}
          onClose={() => setEditingTransaction(null)}
          onUpdate={updateTransaction}
          role={state.role}
        />
      )}
    </div>
  );
}