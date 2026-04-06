import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { chartColors } from "../constants/chartColors";

export default function TransactionsChart({ transactions }) {
  const monthMap = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", { month: "short" });
    if (!monthMap[month]) monthMap[month] = { month, income: 0, expense: 0 };
    monthMap[month][t.type] += t.amount;
  });

  const data = Object.values(monthMap);

  return (
    <div className="w-full h-64 md:h-80 bg-white rounded-xl shadow p-4">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">
        Monthly Overview
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 50 }} 
        >
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: chartColors.text }}
            interval={0} 
            dy={10} 
          />

          <YAxis tick={{ fontSize: 12, fill: chartColors.text }} />

          <Tooltip
            formatter={(value) => `₹${value}`}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          <Legend
            verticalAlign="top" 
            align="right"
            wrapperStyle={{ fontSize: "12px", color: chartColors.text }}
          />

          <Bar dataKey="income" fill={chartColors.primary} radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill={chartColors.secondary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}