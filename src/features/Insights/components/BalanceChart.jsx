// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function BalanceChart({ transactions }) {
//   const data = transactions
//     .slice(-10)
//     .map((t, i) => ({
//       day: `Day ${i + 1}`,
//       balance: transactions
//         .slice(0, i + 1)
//         .reduce((acc, t) => t.type === "income" ? acc + t.amount : acc - t.amount, 0),
//     }));

//   return (
//     <div className="bg-white shadow rounded-lg p-4">
//       <h2 className="text-gray-700 font-semibold mb-2">Balance Trend</h2>
//       <ResponsiveContainer width="100%" height={200}>
//         <LineChart data={data}>
//           <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} />
//           <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
//           <Tooltip />
//           <Line type="monotone" dataKey="balance" stroke="#22c55e" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function BalanceChart({ transactions }) {
  const data = transactions
    .slice(-10)
    .map((t, i) => ({
      day: `Day ${i + 1}`,
      balance: transactions
        .slice(0, i + 1)
        .reduce((acc, t) => t.type === "income" ? acc + t.amount : acc - t.amount, 0),
    }));

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-gray-700 font-semibold mb-2">Balance Trend</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#22c55e" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}