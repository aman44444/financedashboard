import { useReducer, useEffect } from "react";
import { TransactionsContext } from "./TransactionsContext";
import { INITIAL_TRANSACTIONS } from "../../data/transactions";

function transactionsReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];

    case "DELETE_TRANSACTION":
      return state.filter((tx) => tx.id !== action.payload);

    case "UPDATE_TRANSACTION":
      return state.map((tx) =>
        tx.id === action.payload.id ? action.payload : tx
      );

    default:
      return state;
  }
}

function getInitialState() {
  const stored = localStorage.getItem("transactions");
  return stored ? JSON.parse(stored) : INITIAL_TRANSACTIONS;
}

export function TransactionsProvider({ children }) {
  const [transactions, dispatch] = useReducer(
    transactionsReducer,
    [],
    getInitialState
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    dispatch({ type: "ADD_TRANSACTION", payload: tx });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const updateTransaction = (tx) => {
    dispatch({ type: "UPDATE_TRANSACTION", payload: tx });
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}