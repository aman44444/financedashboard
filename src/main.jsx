import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { TransactionsProvider } from './context/Transactions/TransactionsProvider.jsx';
import { FinanceProvider } from './context/Finance/FinanceProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FinanceProvider>
      <TransactionsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TransactionsProvider>
    </FinanceProvider>
  </StrictMode>
)