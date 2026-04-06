import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { CHART_COLORS } from "../constants/chartColors";
import BalanceChart from "./BalanceChart";

export default function InsightsCharts({ transactions }) {
  if (!transactions.length) return null;

  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });
  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white shadow rounded-lg p-4 flex flex-col">
        <h2 className="text-gray-700 font-semibold mb-2">Spending by Category</h2>
        {categoryData.length === 0 ? (
          <p className="text-gray-400 text-sm">No expense data available</p>
        ) : (
          <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius="70%"
                  innerRadius="40%"
                  paddingAngle={2}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* BALANCE CHART */}
      <BalanceChart transactions={transactions} />
    </div>
  );
}