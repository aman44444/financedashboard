// // import InsightCard from "../components/InsightCard";

// // export default function InsightsList({ data }) {
// //   if (!data) return null;

// //   const cards = [
// //     { title: "Total Transactions", value: data.totalTransactions },
// //     { title: "Total Income", value: `₹${data.totalIncome}` },
// //     { title: "Total Expense", value: `₹${data.totalExpense}` },
// //     { title: "Average Amount", value: `₹${data.averageAmount.toFixed(2)}` },
// //     { title: "Most Frequent Category", value: data.mostFrequentCategory || "-" },
// //     {
// //       title: "Highest Income",
// //       value: data.highestIncome
// //         ? `₹${data.highestIncome.amount}`
// //         : "-",
// //     },
// //     {
// //       title: "Highest Expense",
// //       value: data.highestExpense
// //         ? `₹${data.highestExpense.amount}`
// //         : "-",
// //     },
// //   ];

// //   return (
// //     // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
// //     {cards.map((card, idx) => (
// //         <InsightCard
// //           key={idx}
// //           title={card.title}
// //           value={card.value}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// import InsightCard from "../components/InsightCard";

// export default function InsightsList({ data }) {
//   if (!data) return null;

//   const cards = [
//     { title: "Total Transactions", value: data.totalTransactions },
//     { title: "Total Income", value: `₹${data.totalIncome}` },
//     { title: "Total Expense", value: `₹${data.totalExpense}` },
//     { title: "Avg Amount", value: `₹${data.averageAmount?.toFixed(2)}` },
//     { title: "Top Category", value: data.mostFrequentCategory || "-" },
//     {
//       title: "Highest Income",
//       value: data.highestIncome
//         ? `₹${data.highestIncome.amount}`
//         : "-",
//     },
//     {
//       title: "Highest Expense",
//       value: data.highestExpense
//         ? `₹${data.highestExpense.amount}`
//         : "-",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//       {cards.map((card, i) => (
//         <InsightCard key={i} {...card} />
//       ))}
//     </div>
//   );
// }


import InsightCard from "../components/InsightCard";

export default function InsightsList({ data }) {
  if (!data) return null;

  const cards = [
    { title: "Total Transactions", value: data.totalTransactions },
    { title: "Total Income", value: `₹${data.totalIncome}` },
    { title: "Total Expense", value: `₹${data.totalExpense}` },
    { title: "Avg Amount", value: `₹${data.averageAmount?.toFixed(2)}` },
    { title: "Top Category", value: data.mostFrequentCategory || "-" },
    { title: "Highest Income", value: data.highestIncome ? `₹${data.highestIncome.amount}` : "-" },
    { title: "Highest Expense", value: data.highestExpense ? `₹${data.highestExpense.amount}` : "-" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {cards.map((card, i) => (
        <InsightCard key={i} {...card} />
      ))}
    </div>
  );
}
