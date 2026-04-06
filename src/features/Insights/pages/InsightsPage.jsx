import { useTransactions } from "../../../context/Transactions/useTransactions";
import { useInsightsData } from "../hooks/useInsightsData";
import InsightsList from "../components/InsightsList";
import InsightsCharts from "../components/InsightsCharts";

export default function InsightsPage() {
  const { transactions } = useTransactions();
  const insights = useInsightsData(transactions);

  if (!transactions.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-400 text-lg">No insights available</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
        Insights
      </h1>

      <div className="mb-6">
        <InsightsList data={insights} />
      </div>

      <div className="mb-6">
        <InsightsCharts transactions={transactions} />
      </div>
    </div>
  );
}