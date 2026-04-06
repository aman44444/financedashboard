import { useTransactions } from "../../../context/Transactions/useTransactions";
import { useDashboardData } from "../hooks/useDashboardData";
import DashboardCard from "../components/DashboardCard";
import CategoryPieChart from "../components/CategoryPieChart";
import TransactionsChart from "../components/TransactionsChart";

export default function DashboardPage() {
  const { transactions } = useTransactions();
  const { totalIncome, totalExpense, balance, categoryChartData } = useDashboardData(transactions);

  if (!transactions.length) {
    return <div className="text-center text-gray-500 mt-10">No data available</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <DashboardCard title="Total Income" value={totalIncome} />
        <DashboardCard title="Total Expense" value={totalExpense} />
        <DashboardCard title="Balance" value={balance} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionsChart transactions={transactions} />
        <CategoryPieChart data={categoryChartData} />
      </div>
    </div>
  );
}
