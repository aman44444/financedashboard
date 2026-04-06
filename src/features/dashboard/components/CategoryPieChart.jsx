import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartColors } from "../constants/chartColors";

export default function CategoryPieChart({ data }) {
  if (!data.length) {
    return (
      <div className="w-full h-64 bg-white rounded-xl shadow p-4 flex items-center justify-center text-gray-400">
        No category data
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-80 bg-white rounded-xl shadow p-4">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">
        Spending Breakdown
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="amount"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="70%"
            innerRadius="45%"   
            paddingAngle={2}
            nameKey="category"  
            label={({ name }) => name} 
          >
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.color || chartColors.pie[i % chartColors.pie.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `₹${value}`}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ fontSize: "12px", color: chartColors.text }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}