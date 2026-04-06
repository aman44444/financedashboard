import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar"
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import TransactionsPage from "./features/transactions/pages/TransactionsPage";
import InsightsPage from "../src/features/Insights/pages/InsightsPage"


function App() {
  return (
  <div>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </div>  
  </div>
  
  );
}

export default App;